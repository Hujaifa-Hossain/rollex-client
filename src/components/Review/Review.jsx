import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";

const Review = () => {
  const { user } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://rollex-watch.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    reset();
  };
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit(onSubmit)}>

      <input
          className="p-2 my-1 w-100"
          placeholder="Enter your name"
          defaultValue={user.displayName}
          {...register("user")}
        />
        
        <input
          className="w-100 p-2 my-1"
          placeholder="Enter your email"
          defaultValue={user?.email}
          {...register("email")}
        />

        <input
          placeholder="Rating between 1 to 5"
          type="number"
          {...register("stars", { min: 0, max: 5, required: true })}
          className="w-100 p-2 my-1"
        />

        <textarea
          {...register("review", { required: true })}
          placeholder="What's in your mind?"
          className="w-100 p-2 my-1"
        />

        <input
          className="btn btn-danger d-block px-5 my-1 m-auto"
          value="Post Now!"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Review;

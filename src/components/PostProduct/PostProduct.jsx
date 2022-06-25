import React from "react";
import { useForm } from "react-hook-form";

const PostProduct = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5050/postproduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    reset();
  };
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("product", { required: true })}
          placeholder="Product name"
          className="w-100 p-2 my-1"
        />

        <input
          {...register("price", { required: true })}
          placeholder="Product price"
          className="w-100 p-2 my-1"
        />

        <input
          {...register("description", { required: true })}
          placeholder="Product description"
          className="w-100 p-2 my-1"
        />

        <input
          {...register("img", { required: true })}
          placeholder="Product image"
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

export default PostProduct;

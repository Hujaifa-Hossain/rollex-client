import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="text-center d-flex align-items-center justify-content-center vh-100 pb-4">
      <video
        id="videoBG"
        poster="https://content.rolex.com/dam/homepage/hss/watches/professional-watches/explorer/m124273-0001/homepage-explorer-m124273-0001-posterframe.jpg?imwidth=1920"
        autoPlay
        muted
        loop
      >
        <source
          src="https://content.rolex.com/dam/homepage/hss/watches/professional-watches/explorer/m124273-0001/homepage-explorer-m124273-0001.mp4"
          type="video/mp4"
        />
      </video>
        <div >
          <h1>EXPLORER</h1>
          <h5>THE CALL OF THE PEAKS</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;

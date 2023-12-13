import React from "react";
import NavigationBar from "../components/NavigationBar";
import homapage from "../assets/homepage.png";
import text from "../assets/text.png";

const Homepage = () => {
  return (
    <div className="container-content">
      <div
        style={{
          backgroundImage: `url(${homapage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
        className="min-h-[100vh]"
      >
        <NavigationBar makeWhite={true} />
        <img
          src={text}
          alt=""
          className="w-3/4 mt-[80px] mx-auto h-[260px] sm:h-[300px] sm:mt-[120px] max-w-2xl"
        />
      </div>
    </div>
  );
};

export default Homepage;

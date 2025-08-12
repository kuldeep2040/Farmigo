import React from "react";
import useProgressiveImg from "../../hooks/image/useProgressiveImg";

const SideImage = ({ type }) => {
  const [src, { blur }] = useProgressiveImg(
    "https://images.unsplash.com/9/fields.jpg?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Compressed version of the image
    "https://images.unsplash.com/9/fields.jpg?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Full-resolution image
  );

  return (
    <div className="block relative w-full md:w-1/2 h-48 md:h-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-green-800 via-transparent to-transparent text-white text-lg md:text-xl lg:text-2xl font-semibold flex items-end justify-end">
        <p className="pl-6 pb-8 md:pb-16 pr-12">
          {type === "seller"
            ? "Grow Your Farm, Reap Your Rewards with Farmigo"
            : "Farm-Fresh Delights Await – Join Us Today!"}
        </p>
      </div>
      <div
        className="relative w-full z-0 h-full"
        style={{
          filter: blur ? "blur(0px)" : "none",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default SideImage;

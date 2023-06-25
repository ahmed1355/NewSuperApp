import React from "react";
// import "./common.css";
import images1 from "./assets/image 1.png";
import imagestyles from "./imageside.module.css";

function Imageside() {
  return (
    <div className="dis">
      <div>
        <p className={imagestyles.para}>
          Discover new things on
          <span className={imagestyles.super}>SuperApp</span>
        </p>
        
          <img src={images1} alt="" className={imagestyles.imageside} />
        </div>
      </div>
  );
}

export default Imageside;

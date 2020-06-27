import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imageUrl, box }) {
  const { topRow, bottomRow, leftCol, rightCol } = box;
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {" "}
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: topRow,
            bottom: bottomRow,
            left: leftCol,
            right: rightCol,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;

import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div style={{ marginTop: "2rem", position: "relative" }}>
      <img id="inputImage" alt="" src={imageUrl} width="500px" height="auto" />
      {/* <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      >Hello</div> */}
      <div style={{backgroundColor: "red", top: "100px", right: "100px", bottom: "100px", left: "100px"}}>gu</div>
    </div>
  );
};

export default FaceRecognition;

import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <img alt="" src={imageUrl} width="500px" height="auto" />
    </div>
  );
};

export default FaceRecognition;

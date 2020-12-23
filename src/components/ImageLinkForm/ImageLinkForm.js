import React from "react";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p>
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div>
        <input type="text" onChange={onInputChange} />
        <button onClick={onPictureSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;

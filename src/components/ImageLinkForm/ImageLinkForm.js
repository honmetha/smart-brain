import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p>
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div>
        <input type="text" onChange={onInputChange} />
        <button onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;

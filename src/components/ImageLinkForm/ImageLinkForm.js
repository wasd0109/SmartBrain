import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div>
      <p className="f3 text-center">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center ">
        <div className="center p-4 br3 shadow form">
          <input
            className="f4 p-2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link px-2 py-3 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;

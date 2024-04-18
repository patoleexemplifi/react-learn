import React, { useState } from "react";
import "./TwoColumnSection.css";

const TwoColumnSection = ({ imageUrl, initialTitle, initialParagraph }) => {
  const [title, setTitle] = useState(initialTitle);
  const [paragraph, setParagraph] = useState(initialParagraph);
  const [isColumnReversed, setIsColumnReversed] = useState(false);

  const handleColumnSwitch = (e) => {
    setIsColumnReversed(!isColumnReversed);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.innerText);
  };

  const handleParagraphChange = (e) => {
    setParagraph(e.target.innerText);
  };

  return (
    <>
      <div
        className={`two-column-container ${
          isColumnReversed ? "reverse-columns" : ""
        }`}
      >
        <div className="image-column">
          <img src={imageUrl} alt="Section Image" />
        </div>
        <div className="content-column">
          <h2
            contentEditable
            onBlur={handleTitleChange}
            className="editable-title"
          >
            {title || "Enter Title..."}
          </h2>
          <p
            contentEditable
            onBlur={handleParagraphChange}
            className="editable-paragraph"
          >
            {paragraph || "Enter Paragraph..."}
          </p>
        </div>
      </div>
      <button onClick={handleColumnSwitch} className="switch-button">
        Switch Columns
      </button>
    </>
  );
};

export default TwoColumnSection;

import React, { useState } from "react";
import "./ColumnSection.css";
import EditableTitle from "./EditableTitle";
import RichtextEditor from "./RichtextEditor";

const ColumnSection = ({ imageUrl, initialTitle, selectOptions }) => {
  const [title, setTitle] = useState(initialTitle || "");
  const [selectedOption, setSelectedOption] = useState("");

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className="main-div">
      <div className={`two-column-container ${selectedOption}`}>
        <div className="image-column">
          <img src={imageUrl} alt="Section Image" />
        </div>
        <div className="content-column">
          <EditableTitle title={title} onChange={handleTitleChange} />
          <RichtextEditor />
        </div>
      </div>
      <select value={selectedOption} onChange={handleDropdownChange} className="select-option">
        <option value="" disabled>Switch Column</option>
        {selectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColumnSection;

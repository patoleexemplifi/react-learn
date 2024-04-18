import React from "react";

const EditableTitle = ({ title, onChange }) => {
  const handleTitleChange = (e) => {
    onChange(e.target.innerText);
  };

  return (
    <h2
      contentEditable
      onBlur={handleTitleChange}
      className="editable-title"
    >
      {title || "Enter Title..."}
    </h2>
  );
};

export default EditableTitle;

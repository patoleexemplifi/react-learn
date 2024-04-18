// RichtextEditor.js

import React, { useState, useEffect } from "react";

const EditableParagraph = ({ initialParagraph, onChange }) => {
  const [paragraph, setParagraph] = useState(initialParagraph || "");

  // Update local state when initialParagraph prop changes
  useEffect(() => {
    setParagraph(initialParagraph || "");
  }, [initialParagraph]);

  const handleParagraphChange = (e) => {
    const newParagraph = e.target.innerText;
    setParagraph(newParagraph);
    onChange(newParagraph); // Notify parent component about the change
  };

  return (
    <p
      contentEditable
      onBlur={handleParagraphChange}
      className="editable-paragraph"
    >
      {paragraph || "Enter Paragraph..."}
    </p>
  );
};

const RichtextEditor = () => {
  const [editorContent, setEditorContent] = useState("Add Text");

  const handleEditorChange = (newContent) => {
    setEditorContent(newContent);
    // Perform additional actions here in response to content changes
  };

  return (
    <div>
      <EditableParagraph
        initialParagraph={editorContent}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default RichtextEditor;

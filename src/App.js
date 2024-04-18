import "./App.css";
import Demo from "./Demo";
import TwoColumnSection from "./TwoColumnSection/TwoColumnSection";
import ColumnSection from "./ColumnSection/ColumnSection";
import { classOptions } from "./ColumnSection/ClassData";
import React, { useState } from "react";
import RichtextEditorParent from "./ColumnSection/RichtextEditor";
import EditableTitle from "./ColumnSection/EditableTitle";
import AddComponent from "./AddNewComponent/AddComponent";

function App() {
 

  return (
    <div className="App">
      <h1>React Learning...!</h1>
      <Demo data={'vinod'} />
      <TwoColumnSection
        imageUrl="https://via.placeholder.com/400"
        initialTitle="Two Column Section - Text with Image"
        initialParagraph="This is a sample paragraph. You can edit this text to provide more details about your content. Customize this section as needed for your project."
        
      />
        <ColumnSection
        imageUrl="https://via.placeholder.com/400"
        initialTitle="Column Section - Text with Image"
        selectOptions={classOptions}
      />
   
     <AddComponent />    </div>
  );
}

export default App;

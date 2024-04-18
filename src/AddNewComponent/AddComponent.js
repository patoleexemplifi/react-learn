import React, { useState } from 'react';
import ColumnSection from '../ColumnSection/ColumnSection';
import RichtextEditor from '../ColumnSection/RichtextEditor';
import { classOptions } from '../ColumnSection/ClassData';

const AddComponent = () => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    // Append the selected component type to the selectedComponents list
    setSelectedComponents([...selectedComponents, selectedValue]);

    // Reset the selected option to empty string to clear the dropdown
    setSelectedOption('');
  };

  return (
    <div>
      <div>
        {/* Render all selected components */}
        {selectedComponents.map((componentType, index) => (
          <div key={index}>
            {renderComponent(componentType)}
          </div>
        ))}
      </div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Add new Component</option>
        <option value="ComponentA">Text-Editor</option>
        <option value="ComponentB">Image And Text</option>
      </select>
    </div>
  );
};

// Define a function to render components based on their type
const renderComponent = (componentType) => {
  switch (componentType) {
    case 'ComponentA':
      return <ComponentA key={componentType} />;
    case 'ComponentB':
      return <ComponentB key={componentType} />;
    default:
      return null;
  }
};

const ComponentA = () => (
  <div>
    <RichtextEditor />
  </div>
);

const ComponentB = () => (
  <div>
    <ColumnSection
      imageUrl="https://via.placeholder.com/400"
      initialTitle="Column Section - Text with Image"
      selectOptions={classOptions}
    />
  </div>
);

export default AddComponent;

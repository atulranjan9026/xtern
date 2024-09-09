import React, { useState } from 'react';

const ChildComponent = ({ onUpdateData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onUpdateData(inputValue);
    setInputValue(''); // Clear input field after submission
  };

  const handleDelete = () => {
    setInputValue('');
  };

  return (
    <div className="child-container">
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new data"
      />
      <button className="update-button" onClick={handleSubmit}>Update Parent Data</button>
      <button className="delete-button" onClick={handleDelete}>Clear Input</button>
    </div>
  );
};

export default ChildComponent;

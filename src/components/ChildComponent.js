import React, { useState } from 'react';

const ChildComponent = ({ onUpdateData }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onUpdateData(inputValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new data"
      />
      <button onClick={handleSubmit}>Update Parent Data</button>
    </div>
  );
};

export default ChildComponent;

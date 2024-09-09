import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('Initial data from Parent');

  const handleUpdateData = (newData) => {
    setData(newData);
  };

  const handleDeleteData = () => {
    setData('');
  };

  return (
    <div className="parent-container">
      <h1>Parent Component</h1>
      <p>Data from Parent: {data}</p>
      <button className="delete-button" onClick={handleDeleteData}>Delete Data</button>
      <ChildComponent onUpdateData={handleUpdateData} />
    </div>
  );
};

export default ParentComponent;

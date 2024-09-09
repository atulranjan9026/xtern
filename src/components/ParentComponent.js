import React, { useState } from 'react';
import ChildComponent from './src/components/ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('Initial data from Parent');

  const handleUpdateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Parent: {data}</p>
      <ChildComponent onUpdateData={handleUpdateData} />
    </div>
  );
};

export default ParentComponent;

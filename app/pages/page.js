// pages/index.js
"use client"
import { useState } from 'react';

export default function Pages() {
  const [inputData, setInputData] = useState('');

  const handleSaveData = async () => {
    console.log(inputData)
    const response = await fetch('api/post-example', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputData }),
    });

    if (response.ok) {
      alert('Data saved successfully!');
      setInputData('');
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handleSaveData}>Save Data</button>
    </div>
  );
}
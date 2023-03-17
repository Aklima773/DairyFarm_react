import React from 'react'

export default function Search() {
    let Term= "";
    const handleChange = (e) =>{
        Term = e.target.value;
    };
  return (
    <div>
        <label>Search:</label>
        <input type="text" onChange={handleChange} />
        <h1>Search For{Term}</h1>
    </div>
  )
}

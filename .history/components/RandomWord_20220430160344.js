import React from "react";

const RandomWord = ({ data }) => {
    
    const { word } = data;
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-10 w-64 container h-64 mx-auto">
      <h2>{word}</h2>
    </div>
  );
};

export default RandomWord;

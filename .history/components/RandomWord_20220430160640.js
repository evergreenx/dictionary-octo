import React from "react";

const RandomWord = ({ data }) => {
  const { word, phonetics } = data;
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-7 w-64 container h-64 mx-auto">
          <h2 className="font-bold text-2xl">{word}</h2>
          
          <p>

          </p>
    </div>
  );
};

export default RandomWord;

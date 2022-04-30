import React from "react";

const RandomWord = ({ data }) => {
  const { word, phonetics } = data;
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-7 w-64 container h-64 mx-auto">
      <h2 className="font-bold text-2xl">{word}</h2>

      <p className="text-gray-400 py-5">
        {phonetics?.map((phonetic, index) => {
            return

            {
            <span key={index}>[{phonetic.text}]</span>;
            <span key={index}>[{phonetic.text}]</span>;
phonetic. && 
            }
            
        })}
      </p>
    </div>
  );
};

export default RandomWord;

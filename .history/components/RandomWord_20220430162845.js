import React from "react";

const RandomWord = ({ data }) => {
  const { word, phonetics, meanings } = data;
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-7 w-72 container h-auto mx-auto">
      <h2 className="font-bold text-2xl">{word}</h2>

      <p className="text-gray-400 pt-5 pb-2">
        {phonetics?.map((phonetic, index) => {
          return phonetic.text && <span key={index}>[{phonetic.text}]</span>;
        })}
      </p>

      <p className="text-black">
        {meanings?.map((text, index) => {
          return (
            text.partOfSpeech && (
              <span className="mr-4" key={index}>
                {text.partOfSpeech}
              </span>
            )
          );
        })}
      </p>

      <p className="text-black">
        {meanings?.map((text, index) => {
          return (
            text.definitions[0] && (
              <span className="mr-4 tracking-tighter " key={index}>
                {text.definitions[0].definition}
              </span>
            )
          );
        })}
      </p>
    </div>
  );
};

export default RandomWord;

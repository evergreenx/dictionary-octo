import React from "react";
import { FcSpeaker } from "react-icons/fc";

const RandomWord = ({ data }) => {
    const { word, phonetics, meanings } = data;
    
      const playSound = () => {
        const audio = new Audio(
          "https://raw.githubusercontent.com/dwyl/english-words/master/words/sounds/hello.mp3"
        );
        audio.play();
      };
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-7 w-72 container h-auto mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">{word}</h2>

        <FcSpeaker className="text-2xl cursor-pointer" />
      </div>

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

      <p className="text-black mt-10">
        {meanings?.map((text, index) => {
          return (
            text.definitions[0] && (
              <span className="mr-4 tracking-tight" key={index}>
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

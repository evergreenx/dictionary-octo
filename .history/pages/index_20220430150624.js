import Head from "next/head";
import Image from "next/image";
import bgimage from "../public/bg.svg";

import { ImSearch } from "react-icons/im";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col justify-center items-center py-20">
        <div className="input--container">
          <h1 className="text-2xl font-bold text-center py-5">
            Start your Search
          </h1>

          <div className="flex items-center bg-gray-300 shadow-md rounded-full py-3 px-3">
            <input
              className="input--text bg-gray-300 font-bold outline-none py-2"
              type="text"
              placeholder="Type something"
            />

            <ImSearch className="text-[#9900efff] text-2xl" />
          </div>
        </div>
      </main>
    </div>
  );
}

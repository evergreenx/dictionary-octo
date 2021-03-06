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
          <h1 className="text-2xl font-bold">Start your Search</h1>

          <div className="flex bg-gr ">
            <input className="input--text" type="text" placeholder="Search" />

            <ImSearch />
          </div>
        </div>
        x{" "}
      </main>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import bgimage from "../public/bg.svg";

import { ImSearch } from "react-icons/im";
import RandomWord from "../components/RandomWord";

 function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" py-20">
        <section className="input--container pb-10 flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold text-center py-5">
            Start your Search
          </h1>

          <div className="flex items-center bg-gray-200 shadow-lg rounded-full py-3 px-3">
            <input
              className="input--text bg-gray-200 font-bold outline-none py-2"
              type="text"
              placeholder="Type something"
            />

            <ImSearch className="text-[#9900efff] text-2xl" />
          </div>
        </section>

        <section>
          <RandomWord />
        </section>
      </main>
    </div>
  );

  export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
  }

  export default Home;

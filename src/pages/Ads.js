/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../assests/nightsky.jpg";
import Index from "./index";
import Image from 'next/image'
import Footer from "../components/Footer";
import Head from "next/head";

export default function Ads(props) {
  const lastepisode = props.episodes.slice(-5).reverse();

  return (
    <>
    <Index />
    <Head>
        <title>Ads</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
      </Head>
      <div className="relative">
        <Image className="bg-cover h-56 md:h-52 lg:h-96 xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-4 w-full text-white">
          <span className="text-lg md:text-3xl font-sans font-bold">
          google.com,<br />
          pub-9848331502386282,<br />
          DIRECT,<br />
          f08c47fec0942fa0<br />
          </span>
        </div>
        <div className="absolute text-center -top-12 md:-top-12 lg:-top-12 lg:top-32 xl:min-h-screen mt-52 w-full min-h-max bg-black">
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}


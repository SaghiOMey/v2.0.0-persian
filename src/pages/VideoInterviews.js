/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from "../saghimey.jpg";
import nightsky from "../assests/nightsky.jpg";
import Index from "./index";
import Image from 'next/image'
import Footer from "../components/Footer";
import Card from "../components/Card";
import Head from "next/head";

export default function VideoInterviews(props) {
  const episodes = [...props.episodes].reverse();
  const lastepisode = props.episodes.slice(-5).reverse();
  return (
    <>
    <Index />
    <Head>
        <title>VideoInterviews</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
        <link href="https://saghiomey.netlify.app/feed.xml" rel="alternate" type="application/rss+xml"/>
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">
            Video Interviews
          </span>
        </div>
        <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
        {episodes.length > 0 ? (
            <span className="text-xs ml-4 md:ml-20 lg:ml-28 md:text-lg lg:text-2xl xl:ml-40 xl:text-4xl font-sans font-bold text-gray-200">
              Looking for more videos? Check all of our videos right here
              below!
            </span>
          ) : (
            ""
          )}
          <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <Card episodes={episodes} />
            <Footer lastepisode={lastepisode} />
          </div>
        </div>
      </div>
    </>
  );
}

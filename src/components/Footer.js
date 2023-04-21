/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import apple from "../apple.svg";
import youtube from "../assests/youtube.svg";
import spotify from "../assests/spotify.svg";
import googlepodcast from "../assests/googlepodcast.svg";
import castbox from "../assests/castbox.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer(lastepisode) {
  const { pathname } = useRouter();
  const navigation = [
    { name: "Home", href: "", current: false },
    { name: "Video Interviews", href: "VideoInterviews", current: false },
    // {
    //   name: "Audio English Interviews",
    //   href: "/EnglishEpisodes",
    //   current: false,
    // },
    // {
    //   name: "Audio Persian Interviews",
    //   href: "/PersianEpisodes",
    //   current: false,
    // },
    {
      name: "Audio Interviews",
      href: "/AudioInterviews",
      current: false,
    },
    { name: "About", href: "About", current: false },
    { name: "Contact", href: "Contact", current: false },
  ];
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      {pathname === "/About" ||
      pathname === "/Profile" ||
      pathname === "/[Episode]" ||
      pathname === "/VideoInterviews/[Video]" ||
      // pathname === "/EnglishEpisodes/[English]" ||
      pathname === "/AudioInterviews/[Audio]" ||
      pathname === "/Contact" ||
      pathname === "/NFT" ? (
        <div className="md:flex mt-36 md:justify-between mx-auto text-center max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <span className="text-gray-300 text-lg font-medium">
            Recent Episodes
            <div className="mt-4 text-base font-normal">
              <ul className="md:list-disc">
                {lastepisode.lastepisode.map((episode) => (
                  <li className="hover:text-white mt-2">
                    <Link href={`/${episode.href}`}>{episode.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Pages
            <div className="mt-4 text-base font-normal">
              <ul>
                {navigation.map((item) => (
                  <li className="hover:text-white mt-2">
                    <Link
                      href={`/${item.href}`}
                      key={item.name}
                      className="hover:text-white mt-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Follow Our Show
            <div className="flex justify-center gap-3 mt-4">
              {/* <a href="#">
                    <img src={apple} className="h-8 w-8" />
                  </a> */}
              <a href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ">
                <Image src={youtube} className="h-8 w-8" />
              </a>
              <a href="https://open.spotify.com/show/6ObUzf2m0OtJNyVvNvwIVp">
                <Image src={spotify} className="h-8 w-8" />
              </a>
            </div>
            <div className="flex justify-center mt-4 md:ml-6 gap-3">
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ODJiZGVmNC9wb2RjYXN0L3Jzcw?ep=14">
                <Image
                  src={googlepodcast}
                  className="h-8 w-8 rounded-full bg-white"
                />
              </a>
              <a href="https://castbox.fm/channel/id4931691?country=gb">
                <Image src={castbox} className="h-8 w-8" />
              </a>
            </div>
          </span>
        </div>
      ) : (
        <div className="md:flex mt-36 md:justify-between">
          <span className="text-gray-300 text-lg font-medium">
            Recent Episodes
            <div className="mt-4 text-base font-normal">
              <ul className="md:list-disc">
                {lastepisode.lastepisode.map((episode) => (
                  <li className="hover:text-white mt-2">
                    <Link onClick={() => scrollToTop()} href={`/${episode.href}`}>{episode.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Pages
            <div className="mt-4 text-base font-normal">
              <ul>
                {navigation.map((item) => (
                  <li className="hover:text-white mt-2">
                    <Link
                      onClick={() => scrollToTop()}
                      href={`/${item.href}`}
                      key={item.name}
                      className="hover:text-white mt-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Follow Our Show
            <div className="flex justify-center gap-3 mt-4">
              {/* <a href="#">
                    <img src={apple} className="h-8 w-8" />
                  </a> */}
              <a href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ">
                <Image src={youtube} className="h-8 w-8" />
              </a>
              <a href="https://open.spotify.com/show/6ObUzf2m0OtJNyVvNvwIVp">
                <Image src={spotify} className="h-8 w-8" />
              </a>
            </div>
            <div className="flex justify-center mt-4 md:ml-6 gap-3">
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ODJiZGVmNC9wb2RjYXN0L3Jzcw?ep=14">
                <Image
                  src={googlepodcast}
                  className="h-8 w-8 rounded-full bg-white"
                />
              </a>
              <a href="https://castbox.fm/channel/id4931691?country=gb">
                <Image src={castbox} className="h-8 w-8" />
              </a>
            </div>
          </span>
        </div>
      )}
    </>
  );
}

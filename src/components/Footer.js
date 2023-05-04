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
        </div>
      )}
    </>
  );
}

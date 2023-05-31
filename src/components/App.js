/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Desert from "../assests/Desert.jpg";
import youtube from "../assests/youtube.svg";
import spotify from "../assests/spotify.svg";
import googlepodcast from "../assests/googlepodcast.svg";
import logo from "../assests/saghimey.png";
import Link from "next/link";
import Image from 'next/image'
import Card from "./Card";
import Footer from "./Footer";

export default function App(props) {
    const episodes = [...props.episodes].reverse();
    const [open, setOpen] = useState(false);
    const lastepisode = props.episodes.slice(-5).reverse();
    const cancelButtonRef = useRef(null);
    return (
        <>
        <div className="relative">
        <Image className="bg-cover xl:w-full" src={Desert} alt="Desert" />
        <div className="absolute top-44 left-20 lg:top-36 md:top-12 md:left-1/2">
          <div className="font-mono font-bold text-xs md:text-4xl text-white">
            Podcast SaghiOMey{" "}
          </div>
          <span className="font-mono md:font-bold text-xs md:pl-28 md:text-xl text-white">
            Hosted By
          </span>
          <br />
          <span className="font-mono font-bold text-xs md:pl-32 md:text-xl text-white">
            Milad
          </span>
        </div>
        <div className="absolute md:flex md:justify-between top-4 left-20 xl:top-80 lg:top-60 md:top-44">
          <Image
            className="h-40 md:h-1/4 md:w-1/4 rounded"
            src={logo}
            alt="logo"
          />
          <div className="mt-16 -ml-20 h-72 lg:h-auto md:h-44 md:m-0 md:flex md:flex-1 md:items-start md:justify-center bg-black">
            <div className="font-mono font-bold ml-6 text-xs lg:text-xs xl:text-lg text-gray-100">
              Join Host Milad as he talks to various guests each week where
              ”Everyone Has A Story” from the world.
              <br />
              <br />
              <div className="font-mono flex font-bold lg:ml-56 lg:text-lg text-gray-100">
                NFT: &nbsp;
                <Link href="/NFT" className="flex text-yellow-500 hover:text-gray-100">
                <h1>I</h1>&nbsp;<h1>A</h1>&nbsp;<h1>V</h1>
                </Link>
              </div>
              <br />
              <br />
              <p className="font-mono flex font-bold lg:ml-56 lg:text-lg text-gray-100">
                Follow US: &nbsp;
                <a
                  className="text-yellow-500 hover:text-white fill-current"
                  href="https://news.google.com/s/CBIw6YXAwrEB?sceid=US:en&sceid=US:en&r=0&oc=1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="google">
                    <path d="M2.492 1.994A.5.5 0 0 0 2.424 2a.5.5 0 0 0-.188.07.5.5 0 0 0-.113.098A.5.5 0 0 0 2 2.5V28c0 1.1.9 2 2 2h19.5a.5.5 0 0 0 .113-.014.5.5 0 0 0 .05-.013.5.5 0 0 0 .241-.17l5.905-5.905a.5.5 0 0 0 .171-.257.5.5 0 0 0 .012-.05.5.5 0 0 0 .002-.007.5.5 0 0 0 .004-.043A.5.5 0 0 0 30 23.5a.5.5 0 0 0 0-.008V2.5a.5.5 0 0 0-.508-.506.5.5 0 0 0-.35.152.5.5 0 0 0-.033.038.5.5 0 0 0-.035.046l-1.826 2.438-1.85-2.467a.5.5 0 0 0-.798 0l-1.85 2.467-1.848-2.467a.5.5 0 0 0-.4-.201h-.008a.5.5 0 0 0-.4.201l-1.848 2.467-1.85-2.467a.5.5 0 0 0-.8 0l-1.848 2.465L11.9 2.201a.5.5 0 0 0-.8 0L9.252 4.666 7.404 2.201a.5.5 0 0 0-.8 0l-1.85 2.467-1.838-2.453a.5.5 0 0 0-.01-.014.5.5 0 0 0-.02-.025.5.5 0 0 0-.011-.014.5.5 0 0 0-.023-.023.5.5 0 0 0-.038-.034.5.5 0 0 0-.013-.011.5.5 0 0 0-.026-.018.5.5 0 0 0-.015-.01.5.5 0 0 0-.028-.015.5.5 0 0 0-.017-.008.5.5 0 0 0-.043-.02.5.5 0 0 0-.002 0 .5.5 0 0 0-.031-.01.5.5 0 0 0-.018-.003.5.5 0 0 0-.049-.01.5.5 0 0 0-.049-.006.5.5 0 0 0-.03 0zm18.006 1.334 1.854 2.473a.5.5 0 0 0 .798 0L25 3.334l1.848 2.467a.5.5 0 0 0 .8 0L29 3.998V23h-3.7a2.307 2.307 0 0 0-2.3 2.3V29H4c-.563 0-1-.438-1-1V3.992l1.355 1.809a.5.5 0 0 0 .8 0l1.849-2.467 1.848 2.467a.5.5 0 0 0 .8 0L11.5 3.336 13.348 5.8a.5.5 0 0 0 .8 0l1.848-2.467 1.85 2.467a.5.5 0 0 0 .799 0l1.853-2.473zM4.5 8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-23zM5 9h22v2H5V9zm-.5 5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13zm.5 1h12v12H5V15zm14.45 1a.5.5 0 0 0 .05 1h.008a.5.5 0 1 0 0-1H19.5a.5.5 0 0 0-.05 0zm2 0a.5.5 0 0 0 .05 1h5.008a.5.5 0 1 0 0-1H21.5a.5.5 0 0 0-.05 0zM11.12 17.002a4.019 4.019 0 0 0-2.95 1.17A4.004 4.004 0 0 0 7.536 23a4.005 4.005 0 0 0 4.5 1.863A4.004 4.004 0 0 0 15 21a.5.5 0 0 0-.5-.5H11a.5.5 0 1 0 0 1h2.83c-.207 1.122-.919 2.095-2.053 2.398A2.997 2.997 0 0 1 8.402 22.5a2.995 2.995 0 0 1 .477-3.621 2.995 2.995 0 0 1 3.621-.477.5.5 0 1 0 .5-.867 3.986 3.986 0 0 0-1.879-.533zM19.45 18a.5.5 0 0 0 .051 1h.008a.5.5 0 1 0 0-1H19.5a.5.5 0 0 0-.05 0zm2 0a.5.5 0 0 0 .051 1h5.008a.5.5 0 1 0 0-1H21.5a.5.5 0 0 0-.05 0zm-2 2a.5.5 0 0 0 .051 1h.008a.5.5 0 1 0 0-1H19.5a.5.5 0 0 0-.05 0zm2 0a.5.5 0 0 0 .051 1h5.008a.5.5 0 1 0 0-1H21.5a.5.5 0 0 0-.05 0zm3.852 4h2.992L24 28.293v-2.992c0-.729.572-1.301 1.3-1.301z"  ></path>
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-4 md:ml-8 lg:ml-8 hover:text-white fill-current"
                  href="https://www.facebook.com/profile.php?id=100089930657614"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-4 md:ml-8 lg:ml-8 hover:text-white fill-current"
                  href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-4 md:ml-8 lg:ml-8 hover:text-white fill-current"
                  href="https://www.instagram.com/milad_podcast/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-4 md:ml-8 lg:ml-8 hover:text-white fill-current"
                  href="https://www.linkedin.com/in/mohammadreza-khorrami-238302215/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </p>
              <p className="font-mono flex font-bold mt-4 lg:ml-80 lg:mt-8 lg:text-lg text-gray-100">
                Reviews: &nbsp;
                <Link
                  className="text-yellow-500 mt-1 flex hover:text-white fill-current"
                  href="Reviews"
                >
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute mt-48 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Card episodes={episodes} />
            <Footer lastepisode={lastepisode} />
          </div>
        </div>
      </div>
        </>
    )
}
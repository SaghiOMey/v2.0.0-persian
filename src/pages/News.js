/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../assests/nightsky.jpg";
import Index from "./index";
import { Tab } from "@headlessui/react";
import { useState } from "react";
// import logo from "../saghimey.jpg";
import Footer from "../components/Footer";
import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NFT(props) {
  const reviews = props.reviews.slice(-6).reverse()
  const lastepisode = props.episodes.slice(-5).reverse();
  return (
    <>
    <Index />
    <Head>
        <title>NFT</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
        <link href="https://saghiomey.netlify.app//NFT.xml" rel="alternate" type="application/rss+xml"/>
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">News</span>
          <div className="flex">
            <span className="mr-1 lg:mt-8 lg:mr-2 md:mt-0 md:mr-2 text-xs md:text-base font-sans font-medium">
              Available On:
            </span>
            <a
              href="https://news.google.com/s/CBIw6YXAwrEB?sceid=US:en&sceid=US:en&r=0&oc=1"
              className="text-yellow-500 mr-1 lg:mt-8 md:mt-0 lg:mr-2 md:mr-2 hover:text-white fill-current"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="google">
                <path d="M2.492 1.994A.5.5 0 0 0 2.424 2a.5.5 0 0 0-.188.07.5.5 0 0 0-.113.098A.5.5 0 0 0 2 2.5V28c0 1.1.9 2 2 2h19.5a.5.5 0 0 0 .113-.014.5.5 0 0 0 .05-.013.5.5 0 0 0 .241-.17l5.905-5.905a.5.5 0 0 0 .171-.257.5.5 0 0 0 .012-.05.5.5 0 0 0 .002-.007.5.5 0 0 0 .004-.043A.5.5 0 0 0 30 23.5a.5.5 0 0 0 0-.008V2.5a.5.5 0 0 0-.508-.506.5.5 0 0 0-.35.152.5.5 0 0 0-.033.038.5.5 0 0 0-.035.046l-1.826 2.438-1.85-2.467a.5.5 0 0 0-.798 0l-1.85 2.467-1.848-2.467a.5.5 0 0 0-.4-.201h-.008a.5.5 0 0 0-.4.201l-1.848 2.467-1.85-2.467a.5.5 0 0 0-.8 0l-1.848 2.465L11.9 2.201a.5.5 0 0 0-.8 0L9.252 4.666 7.404 2.201a.5.5 0 0 0-.8 0l-1.85 2.467-1.838-2.453a.5.5 0 0 0-.01-.014.5.5 0 0 0-.02-.025.5.5 0 0 0-.011-.014.5.5 0 0 0-.023-.023.5.5 0 0 0-.038-.034.5.5 0 0 0-.013-.011.5.5 0 0 0-.026-.018.5.5 0 0 0-.015-.01.5.5 0 0 0-.028-.015.5.5 0 0 0-.017-.008.5.5 0 0 0-.043-.02.5.5 0 0 0-.002 0 .5.5 0 0 0-.031-.01.5.5 0 0 0-.018-.003.5.5 0 0 0-.049-.01.5.5 0 0 0-.049-.006.5.5 0 0 0-.03 0zm18.006 1.334 1.854 2.473a.5.5 0 0 0 .798 0L25 3.334l1.848 2.467a.5.5 0 0 0 .8 0L29 3.998V23h-3.7a2.307 2.307 0 0 0-2.3 2.3V29H4c-.563 0-1-.438-1-1V3.992l1.355 1.809a.5.5 0 0 0 .8 0l1.849-2.467 1.848 2.467a.5.5 0 0 0 .8 0L11.5 3.336 13.348 5.8a.5.5 0 0 0 .8 0l1.848-2.467 1.85 2.467a.5.5 0 0 0 .799 0l1.853-2.473zM4.5 8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-23zM5 9h22v2H5V9zm-.5 5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13zm.5 1h12v12H5V15zm14.45 1a.5.5 0 0 0 .05 1h.008a.5.5 0 1 0 0-1H19.5a.5.5 0 0 0-.05 0zm2 0a.5.5 0 0 0 .05 1h5.008a.5.5 0 1 0 0-1H21.5a.5.5 0 0 0-.05 0zM11.12 17.002a4.019 4.019 0 0 0-2.95 1.17A4.004 4.004 0 0 0 7.536 23a4.005 4.005 0 0 0 4.5 1.863A4.004 4.004 0 0 0 15 21a.5.5 0 0 0-.5-.5H11a.5.5 0 1 0 0 1h2.83c-.207 1.122-.919 2.095-2.053 2.398A2.997 2.997 0 0 1 8.402 22.5a2.995 2.995 0 0 1 .477-3.621 2.995 2.995 0 0 1 3.621-.477.5.5 0 1 0 .5-.867 3.986 3.986 0 0 0-1.879-.533zM19.45 18a.5.5 0 0 0 .051 1h.008a.5.5 0 1 0 0-1H19.5a.5.5 0 0 0-.05 0zm2 0a.5.5 0 0 0 .051 1h5.008a.5.5 0 1 0 0-1H21.5a.5.5 0 0 0-.05 0zm-2 2a.5.5 0 0 0 .051 1h.008a.5.5 0 1 0 0-1H19.5a.5.5 0 0 0-.05 0zm2 0a.5.5 0 0 0 .051 1h5.008a.5.5 0 1 0 0-1H21.5a.5.5 0 0 0-.05 0zm3.852 4h2.992L24 28.293v-2.992c0-.729.572-1.301 1.3-1.301z"  ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-black p-4">
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                  <ul className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                    {reviews.map((post) => (
                      <>
                        <Link
                          href={`/News/${post.href}`}
                          key={post.id}
                          className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                        >
                          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                            <img
                              src={post.img}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                            />
                          </div>

                          <ul className="mt-1 flex justify-between text-xs font-normal leading-4 text-gray-200">
                            <li>
                              <span className="font-semibold text-gray-500">
                              Title:
                              </span>
                              &nbsp;{post.name}
                            </li>
                            <li>
                              <span className="font-semibold text-gray-500">
                                Publish date:
                              </span>
                              &nbsp;{post.expire}
                            </li>
                          </ul>
                        </Link>
                      </>
                    ))}
                  </ul>
                </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}

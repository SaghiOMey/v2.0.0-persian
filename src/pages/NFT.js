/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../assests/nightsky.jpg";
import Index from "./index";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assests/SOM.svg";
import Image from 'next/image'
import Head from "next/head";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NFT(props) {
  let [categories] = useState({
    Image: [
    ],
    Audio: [
    ],
    Video: [
    ],
  });
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
          <span className="text-lg md:text-5xl font-sans font-bold">NFT</span>
          <div className="flex">
            <span className="lg:mt-8 md:mt-0 text-xs md:text-base font-sans font-medium">
              Available On:
            </span>
            <a
              href="https://opensea.io/milad21"
              className="text-yellow-500 lg:mt-8 md:mt-0 hover:text-white fill-current"
            >
              <Image
              className="block h-20 -mt-6 -mr-2 w-auto"
              src={logo}
              alt="SaghiOMey"
            />
            </a>
          </div>
        </div>
        <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-black p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                      "ring-opacity-60 ring-offset-2 focus:outline-none",
                      selected ? "shadow text-yellow-500" : "text-blue-100 hover:text-yellow-500"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                >
                  <ul className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                    {[...posts].reverse().map((post) => (
                      <>
                        {new Date(post.expire).getMonth() > new Date().getMonth() ? (
                          <>
                          <li
                            key={post.id}
                            className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                          >
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                              <img
                                src={post.img}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                              />
                            </div>
                            <h1 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.name}
                            </h1>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.describtion}
                            </h3>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              <span className="font-semibold text-gray-500">
                                Creator:
                              </span>
                              &nbsp; {post.creator}
                            </h3>

                            <ul className="mt-1 flex justify-between text-xs font-normal leading-4 text-gray-200">
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Current price:
                                </span>
                                &nbsp;{post.price}
                              </li>
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Expire date:
                                </span>
                                &nbsp;{post.expire}
                              </li>
                            </ul>

                            <a
                              href={post.link}
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-yellow-500 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                          </>
                        ) : post.expire.slice(4,6) <= new Date().toString().slice(8, 10) ? 
                        null
                          : 
                          <>
                          <li
                            key={post.id}
                            className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                          >
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                              <img
                                src={post.img}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                              />
                            </div>
                            <h1 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.name}
                            </h1>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.describtion}
                            </h3>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              <span className="font-semibold text-gray-500">
                                Creator:
                              </span>
                              &nbsp; {post.creator}
                            </h3>

                            <ul className="mt-1 flex justify-between text-xs font-normal leading-4 text-gray-200">
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Current price:
                                </span>
                                &nbsp;{post.price}
                              </li>
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Expire date:
                                </span>
                                &nbsp;{post.expire}
                              </li>
                            </ul>

                            <a
                              href={post.link}
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-yellow-500 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                          </>
                        }
                      </>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}

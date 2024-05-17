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
import logo from "../assests/SOM.svg";
import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NFT(props) {
  let [categories] = useState({
    Image: [
      // {
      //   id: 1,
      //   ln: "img",
      //   name: "The cover of #ep61",
      //   describtion: "The cover of #ep61, also 10% of sales goes to charity",
      //   price: "0.0125  WETH, $23.29",
      //   creator: "Maryam Karimi",
      //   img: "https://i.seadn.io/gcs/files/769e530f1c833dd09171c1e1fec732e0.jpg?auto=format&dpr=1&w=1000",
      //   expire: "July 05 , 2023",
      //   link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/34451397322601742123712235644046916536807054080760084198907560942151453900801",
      // },
    ],
    Audio: [
      // {
      //   id: 1,
      //   name: "The Audio of #ep61",
      //   describtion:
      //    "The Audio of #ep61, also 10% of sales goes to charity",
      //   price: "0.0123 ETH, $22.80",
      //   creator: "SaghiOMey(SM)",
      //   img: "https://i.seadn.io/gcs/files/2fc411b8a86daac6d5de611a04987a46.jpg?auto=format&dpr=1&w=1920",
      //   expire: "July 05 , 2023",
      //   link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/34451397322601742123712235644046916536807054080760084198907560939952430645249",
      // },
    ],
    Video: [
      // {
      //   id: 1,
      //   name: "The Video of #ep61",
      //   describtion: "The Video of #ep61, whole of sales goes to charity",
      //   price: "0.0125 ETH, $23.13",
      //   creator: "SaghiOMey(SM)",
      //   img: "https://i.seadn.io/gcs/files/2fc411b8a86daac6d5de611a04987a46.jpg?auto=format&dpr=1&w=1920",
      //   expire: "July 05 , 2023",
      //   link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/34451397322601742123712235644046916536807054080760084198907560941051942273025",
      // },
    ],
  });
  const lastepisode = props.episodes.slice(-5).reverse();
  // console.log(new Date("July 05, 2023").getMonth() > new Date().getMonth() ? "y" : "July 05 , 2023".slice(4,6) <= new Date().toString().slice(8, 10) ? "n" : "y" );
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
            {/* <a
              className="text-yellow-500 mr-1 lg:mt-8 md:mt-0 lg:mr-2 md:mr-2 hover:text-white fill-current"
              href="https://discord.com/invite/sf8Unn9Brh"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" id="discord-alt"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
            </a>
            <a
              className="text-yellow-500 mr-1 lg:mt-8 md:mt-0 hover:text-white fill-current"
              href="https://www.facebook.com/profile.php?id=100089930657614"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a> */}
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

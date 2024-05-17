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
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NFT(props) {
  const reviews = props.review.reverse();
  const review = [...props.review].reverse();
  const [ep, setEp] = useState(review.slice(0, 9));
  const lastepisode = props.episodes.slice(-5).reverse();
  // console.log(review);
  return (
    <>
      <Index />
      <Head>
        <title>News</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
        <link
          href="https://saghiomey.netlify.app//NFT.xml"
          rel="alternate"
          type="application/rss+xml"
        />
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-4 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">News</span>
          <div className="flex">
            <span className="lg:mt-8 md:mt-0 text-xs md:text-base font-sans font-medium">
              Available On:
            </span>
            <a
              href="https://news.google.com/s/CBIw6YXAwrEB?sceid=US:en&sceid=US:en&r=0&oc=1"
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
            <Tab.List className="flex space-x-1 rounded-xl bg-black p-4"></Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ul className="md:mx-2 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                  {ep > review ?
                  <>
                  {review.map((post) => (
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
                            &nbsp;{post.date}
                          </li>
                        </ul>
                      </Link>
                    </>
                  ))}
                  </>
                  :
                  <>
                  {ep.map((post) => (
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
                            &nbsp;{post.date}
                          </li>
                        </ul>
                      </Link>
                    </>
                  ))}
                  </>
                  }
                </ul>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          {props.reviews.length > 0 ? (
            <div className="flex justify-center mt-16 md:mr-80">
            <button
              onClick={() => setEp(reviews.slice(0, ep.length + 9))}
              class="bg-yellow-500 text-white h-12 w-28 lg:w-32 lg:h-16 lg:ml-80 md:ml-60 rounded-full hover:bg-white hover:text-black"
            >
              Load More
            </button>
          </div>
          ) : (
            <span className="flex text-gray-200 justify-center text-xl font-semibold">
              Your search returned no results, please try again
            </span>
          )}
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}

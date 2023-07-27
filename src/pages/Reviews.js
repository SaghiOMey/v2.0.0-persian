/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Index from "./index";
import Footer from "../components/Footer";
import nightsky from "../assests/nightsky.jpg";
import Image from 'next/image'
import person from "../assests/person.svg";
import calendar from "../assests/calendar.svg";
import { getFirestore } from "firebase/firestore";
import { StarIcon } from '@heroicons/react/20/solid'
import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { useState, useEffect } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews(props) {
  const [messages, setMessages] = useState(false);
  const reviews = messages !== false ? messages.Message : [] ; 
  const [ep, setEp] = useState([]);
  const lastepisode = props.episodes.slice(-5).reverse();

  useEffect(() => {
    async function fetchData() {
    const db = getFirestore();
    const Snap = await getDoc(doc(db ,"comments", "CmH4vduV6PMnqShozQJU"));
    if (Snap.exists()) {
      setMessages(Snap.data())
      setEp(Snap.data().Message.reverse().slice(0, 9))
    } else {
      // console.log("No such document!");
    }
  }
    fetchData();
}, [props.user]);
// console.log(ep);
  return (
    <>
    <Index />
    <Head>
        <title>Reviews</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">
            Reviews
          </span>
        </div>
        <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          {reviews.length > 0 ? (
            <span className="text-xs ml-4 md:ml-20 lg:ml-28 md:text-lg lg:text-2xl xl:ml-40 xl:text-4xl font-sans font-bold text-gray-200">
              Read reviews about our podcast below!
            </span>
          ) : (
            ""
          )}
          <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
              {ep.length > reviews.length ? (
                <>
                  {reviews.slice(0, 9).map((review) => (
                    <>
                    {review.ep === result.href && review.status === 1 ? (
                      <div
                      key={review.ep}
                      className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                    >
                      <div className="h-20 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none lg:h-90">
                        <span className="absolute flex w-full justify-center font-medium text-sm text-gray-400">
                          SaghiOMey(SM)
                        </span>
                        <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                      </div>
                      <div className="mt-4">
                          <Link href={`/${review.ep}`} className="lg:mt-6 ml-4 mr-1 font-bold text-base text-white hover:text-yellow-500">
                            {review.nameep}
                          </Link>
                        <p className="text-lg lg:text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                          {review.message}
                        </p>
                      </div>
                      <div className="flex place-content-between items-end">
                        <span className="flex ml-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white" src={person} />
                          <span style={{ color: "#5b5454" }}>
                            {review.name}
                          </span>
                        </span>
                        <span className="flex mr-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white mr-1" src={calendar} />
                          <span style={{ color: "#5b5454" }}>
                            {review.Date}
                          </span>
                        </span>
                      </div>
                      <div className="flex place-content-between items-end">
                        <div className="flex ml-4 font-semibold text-base">
                          <TwitterShareButton url="https://saghiomey.netlify.app/#/Reviews">
                            <TwitterIcon size={40} round={true} />
                          </TwitterShareButton>
                        </div>
                        <div className="flex mr-4 font-semibold text-base">
                          <FacebookShareButton url="https://saghiomey.netlify.app/#/Reviews">
                            <FacebookIcon size={40} round={true} />
                          </FacebookShareButton>
                        </div>
                      </div>
                    </div>
                    ) : null}
                    </>
                  ))}
                </>
              ) : (
                <>
                  {ep.map((review)  => (
                    <>
                    {review.status === 1 ? (
                      <div
                      key={review.ep}
                      className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                    >
                      <div className="h-20 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none lg:h-90">
                        <span className="absolute flex w-full justify-center font-medium text-sm text-gray-400">
                          SaghiOMey(SM)
                        </span>
                        <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                      </div>
                      <div className="mt-4">
                          <Link href={`/${review.ep}`} className="lg:mt-6 ml-4 mr-1 font-bold text-base text-white hover:text-yellow-500">
                            {review.nameep}
                          </Link>
                        <p className="text-lg lg:text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                          {review.message}
                        </p>
                      </div>
                      <div className="flex place-content-between items-end">
                        <span className="flex ml-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white" src={person} />
                          <span style={{ color: "#5b5454" }}>
                            {review.name}
                          </span>
                        </span>
                        <span className="flex mr-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white mr-1" src={calendar} />
                          <span style={{ color: "#5b5454" }}>
                            {review.Date}
                          </span>
                        </span>
                      </div>
                      <div className="flex place-content-between items-end">
                        <div className="flex ml-4 font-semibold text-base">
                          <TwitterShareButton url="https://saghiomey.netlify.app/#/Reviews">
                            <TwitterIcon size={40} round={true} />
                          </TwitterShareButton>
                        </div>
                        <div className="flex mr-4 font-semibold text-base">
                          <FacebookShareButton url="https://saghiomey.netlify.app/#/Reviews">
                            <FacebookIcon size={40} round={true} />
                          </FacebookShareButton>
                        </div>
                      </div>
                    </div>
                    ) : null}
                    </>
                  ))}
                </>
              )}
            </div>
            {reviews.length > 0 ? (
              <div className="mt-16 md:mr-80">
                <button
                  onClick={() =>
                    setEp(messages.Message.reverse().slice(0, ep.length + 9))
                  }
                  class="bg-yellow-500 text-white h-12 w-28 lg:w-1/6 lg:h-16 lg:ml-80 md:ml-60 rounded-full hover:bg-white hover:text-black"
                >
                  Load More
                </button>
              </div>
            ) : (
              <div role="status" className="absolute -mt-72 lg:-mt-24 md:-mt-24 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
              <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
              <span className="sr-only">Loading...</span>
              </div>
            )}
            <Footer lastepisode={lastepisode} />
          </div>
        </div>
      </div>
    </>
  );
}

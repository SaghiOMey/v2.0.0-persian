/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Index from "./index";
import Footer from "../components/Footer";
import nightsky from "../assests/nightsky.jpg";
import Image from 'next/image'
import person from "../assests/person.svg";
import calendar from "../assests/calendar.svg";
import Head from "next/head";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { useState } from "react";


export default function Reviews(props) {
  const reviews = [...props.reviews].reverse();
  const [ep, setEp] = useState(reviews.slice(0, 9));
  const lastepisode = props.episodes.slice(-5).reverse();
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
                    <div
                      key={review.id}
                      className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                    >
                      <div className="h-20 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none lg:h-90">
                        <span className="absolute flex w-full justify-center font-medium text-sm text-gray-400">
                          {review.platform}
                        </span>
                        <span className="ml-4 text-yellow-500 mt-8 lg:mt-4 flex fill-current">
                          <svg
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            stroke-linejoin="round"
                            stroke-miterlimit="2"
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                              fill-rule="nonzero"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="mt-4">
                        <div>
                          <p className=" lg:mt-6 ml-4 mr-1 font-bold text-base text-white">
                            {review.epname}
                          </p>
                        </div>
                        <p className="text-lg lg:text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                          {review.describtion}
                        </p>
                      </div>
                      <div className="flex place-content-between items-end">
                        <span className="flex ml-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white" src={person} />
                          <span style={{ color: "#5b5454" }}>
                            {review.username}
                          </span>
                        </span>
                        <span className="flex mr-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white mr-1" src={calendar} />
                          <span style={{ color: "#5b5454" }}>
                            {review.date}
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
                  ))}
                </>
              ) : (
                <>
                  {ep.map((review) => (
                    <div
                      key={review.id}
                      className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                    >
                      <div className="h-20 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none lg:h-90">
                        <span className="absolute flex w-full justify-center font-medium text-sm text-gray-400">
                          {review.platform}
                        </span>
                        <span className="ml-4 text-yellow-500 mt-8 lg:mt-4 flex fill-current">
                          <svg
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            stroke-linejoin="round"
                            stroke-miterlimit="2"
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
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
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                              fill-rule="nonzero"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="mt-4">
                        <div>
                          <p className=" lg:mt-6 ml-4 mr-1 font-bold text-base text-white">
                            {review.epname}
                          </p>
                        </div>
                        <p className="text-lg lg:text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                          {review.describtion}
                        </p>
                      </div>
                      <div className="flex place-content-between items-end">
                        <span className="flex ml-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white" src={person} />
                          <span style={{ color: "#5b5454" }}>
                            {review.username}
                          </span>
                        </span>
                        <span className="flex mr-4 font-semibold text-xs lg:text-base">
                          <Image className="text-white mr-1" src={calendar} />
                          <span style={{ color: "#5b5454" }}>
                            {review.date}
                          </span>
                        </span>
                      </div>
                      <div className="flex place-content-between items-end">
                        <div className="flex ml-4 font-semibold text-base">
                          <TwitterShareButton url={"/"}>
                            <TwitterIcon size={40} round={true} />
                          </TwitterShareButton>
                        </div>
                        <div className="flex mr-4 font-semibold text-base">
                          <FacebookShareButton url={"/"}>
                            <FacebookIcon size={40} round={true} />
                          </FacebookShareButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            {reviews.length > 0 ? (
              <div className="mt-16 md:mr-80">
                <button
                  onClick={() =>
                    setEp([...props.reviews].reverse().slice(0, ep.length + 9))
                  }
                  class="bg-yellow-500 text-white h-12 w-28 lg:w-1/6 lg:h-16 lg:ml-80 md:ml-60 rounded-full hover:bg-white hover:text-black"
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
      </div>
    </>
  );
}

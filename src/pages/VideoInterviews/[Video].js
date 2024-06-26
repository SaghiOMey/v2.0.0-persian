/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import sky from "../../assests/sky.jpg";
import Footer from "../../components/Footer";
import Image from "next/image";
import person from "../../assests/person.svg";
import calendar from "../../assests/calendar.svg";
import { StarIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Video(props) {
  const router = useRouter();
  const messages = props.message
  const episodes = [...props.episodes].reverse();
  const lastepisode = props.episodes.slice(-5).reverse();
  const result = episodes.find(
    (episode) => episode.href === router.asPath.replace("/VideoInterviews/", "")
  );

  return (
    <>
      {router.isReady ? (
        <>
          <Head>
            <title>{result.name}</title>
            <meta property="og:type" content="website" />
            <meta
              property="og:site_name"
              content="Podcast SaghiOMey Hosted By Milad"
            />
            <meta property="og:title" key="og:title" content={result.name} />
            <meta name="description" content={result.describtion} />
            <meta
              name="keywords"
              content={`${result.name}, ${result.describtion}`}
            />
            <meta
              property="og:description"
              key="og:description"
              content={result.describtion}
            />
            <meta
              property="og:image"
              key="og:image"
              itemprop="image"
              content={result.img}
            />
            <meta property="og:image:secure_url" content={result.img} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            <meta property="og:image:alt" content={result.name} />
          </Head>
          <div className="relative">
            <Image
              className="bg-cover h-96 md:h-auto xl:w-full"
              src={sky}
              alt="sky"
            />
            <div className="absolute grid justify-items-center md:justify-items-start xl:top-3/4 w-full text-white">
              <img
                src={result.img}
                alt="logo"
                className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-4 rounded"
              />
              <span className="-mt-56 xl:-mt-96 lg:-mt-96 md:-mt-72 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-2xl lg:text-xl md:text-base font-bold">
                {result.name}
              </span>
              <div className="justify-self-center -mt-40 w-72 md:-mt-64 md:ml-56 md:h-60 md:w-1/2 lg:-mt-80 lg:ml-80 lg:w-3/5 lg:h-72 xl:ml-96 aspect-video">
                <iframe
                  className="w-full h-36 md:h-60 lg:h-72"
                  src={result.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
              <div className="mx-auto text-center md:text-justify max-w-2xl py-4 px-6 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="text-center text-white font-bold text-xs md:text-base mt-3">
                  <span className="font-normal font-sans text-white lg:text-2xl">
                    {result.describtion}.
                  </span>
                </div>
                <br />
                <br />
                <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                    <>
                      {messages ? (
                        messages.map((review) => (
                          <>
                            {review.ep === result.href &&
                            review.status === 1 ? (
                              <div
                                key={review.ep}
                                className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                              >
                                <div className="h-20 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none lg:h-90">
                                  <span className="absolute flex w-full justify-center font-medium text-sm text-gray-400">
                                    SaghiOMey
                                  </span>
                                  <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                      <StarIcon
                                        key={rating}
                                        className={classNames(
                                          review.rating > rating
                                            ? "text-yellow-400"
                                            : "text-gray-200",
                                          "h-5 w-5 flex-shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                    ))}
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <span className=" lg:mt-6 ml-4 mr-1 font-bold text-base text-white">
                                    {review.nameep}
                                  </span>
                                  <br />
                                  <br />
                                  <span className="text-lg lg:text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                                    {review.message}
                                  </span>
                                </div>
                                <div className="flex place-content-between items-end">
                                  <span className="flex ml-4 font-semibold text-xs lg:text-base">
                                    <Image
                                      className="text-white"
                                      src={person}
                                    />
                                    <span style={{ color: "#5b5454" }}>
                                      {review.name}
                                    </span>
                                  </span>
                                  <span className="flex mr-4 font-semibold text-xs lg:text-base">
                                    <Image
                                      className="text-white mr-1"
                                      src={calendar}
                                    />
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
                            ) : // eslint-disable-next-line react/no-unescaped-entities
                            null}
                          </>
                        ))
                      ) : (
                        <div
                          role="status"
                          className="absolute -mt-96 xl:-mt-72 lg:-mt-72 md:-mt-72 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-12 h-12 mr-2 -mt-44 xl:mt-0 lg:mt-0 md:mt-0 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    </>
                  </div>
                </div>
                <br />
                <br />
                <Footer lastepisode={lastepisode} />
              </div>
            </div>
          </div>
        </>
      ) : (
        false
      )}
    </>
  );
}

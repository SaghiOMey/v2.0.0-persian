/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import Index from "../index";
import sky from "../../assests/sky.jpg";
import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Head from "next/head";
import Image from 'next/image'
// import apple from "../apple.svg";
import youtube from "../../assests/youtube.svg";
import spotify from "../../assests/spotify.svg";
import googlepodcast from "../../assests/googlepodcast.svg";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import share from "../../assests/share.svg";
import copy from "../../assests/copy.svg";
import done from "../../assests/done.svg";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import browse from "../../assests/browsePodcast.svg";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Footer from "../../components/Footer";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import person from "../../assests/person.svg";
import calendar from "../../assests/calendar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Persian(props) {
  const [Open, setOpen] = useState(false);
  const [openreview, setopenreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [like, setLike] = useState(false);
  const [countlike, setCountlike] = useState(0);
  const [dislike, setDislike] = useState(false);
  const [comments, setComments] = useState(false);
  const [messages, setMessages] = useState(false);
  const [countdislike, setCountdislike] = useState(0);
  const [isCopied, setIsCopied] = useState();
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const episodes = [...props.episodes].reverse();
  const lastepisode = props.episodes.slice(-5).reverse();
  const result = episodes.find(
    (episode) => episode.href === router.asPath.replace("/AudioInterviews/", "")
  );


  // const show = props.episodes.slice(-4).reverse().find((episode) => episode.href === router.asPath.replace("/AudioInterviews/", ""))
  // console.log(result);
  return (
    <>
     <Index />
     {router.isReady ?
     <>
     <Head>
      <title>{result.name}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Podcast SaghiOMey Hosted By Milad" />
      <meta property="og:title" key="og:title" content={result.name} />
      <meta name="description" content={result.describtion} />
      <meta name="keywords" content={`${result.name}, ${result.describtion}`} />
        <meta
          property="og:description"
          key="og:description"
          content={result.describtion}
        />
        <meta property="og:image" key="og:image" itemprop="image" content={result.img} />
        <meta property="og:image:secure_url" content={result.img} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content={result.name}  />
    </Head>
    {submit ? (
              <Transition.Root show={submit} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={settimeout}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div
                class="flex w-72 -mt-36 ml-4 xl:-mt-72 lg:-mt-44 md:-mt-36 xl:ml-96 lg:ml-96 md:ml-52 md:w-96 shadow-lg rounded-lg"
              >
                <div class="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-white fill-current"
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                </div>
                <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                  <div className="text-lg md:text-xl font-bold text-black">
                    Submitted successfully, We will check your comment and show
                  </div>
                  <button onClick={() => setSubmit(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-current text-gray-700"
                      viewBox="0 0 16 16"
                      width="20"
                      height="20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
                </Transition.Child>
              </Dialog>
            </Transition.Root>
            ) : (
              ""
            )}
    <>
    {props.user ?
      <div className="relative">
        <Image className="bg-cover h-96 md:h-auto xl:w-full" src={sky} alt="sky" />
        <div className="absolute grid justify-items-center md:justify-items-start xl:top-3/4 w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
          />

          <div className="flex -mt-52 xl:-mt-96 lg:-mt-80 md:-mt-64 xl:-ml-36 lg:ml-16 md:ml-36 justify-self-center">
            <Image src={browse} className="h-4 w-4 rounded-full text-white" />
            <br />
            <span className="text-xs">Podcast SaghiOMey</span>&nbsp;&nbsp;
            <a className="text-zinc-100 fill-current">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
              >
                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
              </svg>
            </a>
            &nbsp;
            <span className="text-xs">{result.date}</span>&nbsp;&nbsp;
            <a className="text-zinc-100 fill-current">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
              >
                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
              </svg>
            </a>
            &nbsp;
            <span className="text-xs">{result.time}</span>
          </div>
          <span className="-mt-48 xl:-mt-80 lg:-mt-72 md:-mt-60 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-4xl lg:text-2xl md:text-xl font-bold">
            {result.name}
          </span>

          <div className="flex -mt-40 xl:-mt-64 lg:-mt-58 md:-mt-52 justify-self-center md:ml-56 h-0 w-9/12 md:w-5/12">
          <AudioPlayer
          style={{backgroundColor: "inherit"}}
            className="h-20"
            src={result.voice}
            onPlay={e => console.log("onPlay")}
            />
            <button onClick={() => setOpen(true)}>
              <Image src={share} className="mt-1 ml-4 h-10 w-10" />
            </button>
            <Transition.Root show={Open} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <Dialog.Title
                                as="h3"
                                className="text-lg flex font-semibold leading-6 text-gray-200"
                              >
                                <img
                                  src={result.img}
                                  alt="logo"
                                  className="w-1/4 rounded"
                                />
                                <span className="ml-4">{result.name}</span>
                              </Dialog.Title>
                              <div className="flex justify-between mt-8">
                                <TwitterShareButton
                                  url={result.eplink}
                                  title={result.name}
                                >
                                  <TwitterIcon size={40} round={true} />
                                </TwitterShareButton>
                                <FacebookShareButton
                                  url={result.eplink}
                                  quote={result.name}
                                >
                                  <FacebookIcon size={40} round={true} />
                                </FacebookShareButton>
                                <LinkedinShareButton
                                  url={result.eplink}
                                  title={result.name}
                                  summary={result.describtion}
                                >
                                  <LinkedinIcon size={40} round={true} />
                                </LinkedinShareButton>
                                <PinterestShareButton
                                  url={result.eplink}
                                  media={result.img}
                                  description={result.describtion}
                                >
                                  <PinterestIcon size={40} round={true} />
                                </PinterestShareButton>
                              </div>
                              <div className="flex justify-between mt-8">
                                <WhatsappShareButton
                                  url={result.eplink}
                                  title={result.name}
                                >
                                  <WhatsappIcon size={40} round={true} />
                                </WhatsappShareButton>
                                <TelegramShareButton
                                  url={result.eplink}
                                  title={result.name}
                                >
                                  <TelegramIcon size={40} round={true} />
                                </TelegramShareButton>
                                <RedditShareButton
                                  url={result.eplink}
                                  title={result.name}
                                >
                                  <RedditIcon size={40} round={true} />
                                </RedditShareButton>
                                <EmailShareButton
                                  url={result.eplink}
                                  subject={result.name}
                                >
                                  <EmailIcon size={40} round={true} />
                                </EmailShareButton>
                              </div>
                              <div className="flex mt-8 items-center">
                                <div class="relative w-full">
                                  <input
                                    value={result.eplink}
                                    type="text"
                                    id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled
                                  />
                                </div>
                                <button
                                  onClick={() =>
                                    setIsCopied(
                                      navigator.clipboard.writeText(
                                        result.eplink
                                      )
                                    )
                                  }
                                  type="submit"
                                  class="p-2.5 ml-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                  {isCopied ? (
                                    <Image src={done} />
                                  ) : (
                                    <Image src={copy} />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
          <span className="flex justify-self-center -mt-20 mr-32 xl:mr-0 xl:-mt-44 xl:-ml-80 lg:mr-0 lg:-mt-36 lg:-ml-32 md:mr-0 md:-mt-32 md:-ml-12 text-gray-300 font-semibold">
            Hosted By
          </span>
          <br />
          <span className="flex justify-self-center pt-2 xl:pt-0 lg:pt-0 md:pt-0 -mt-28 xl:-mt-40 xl:-ml-80 lg:-mt-32 lg:-ml-32 md:-mt-32 md:-ml-12 font-medium h-8">
            Milad
          </span>
          
        </div>
        <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          
          <div className="mx-auto text-center md:text-justify max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <span className="font-normal font-sans text-white lg:text-2xl">
              {result.describtion}.
            </span>
            <br />
            <br />
            <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                <>
                  {messages.Message ? messages.Message.map((review) => (
                    <>
                    {review.ep === result.href && review.status === 1 ? (
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
                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
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
                        <span className="text-lg lg:text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                          {review.message}
                        </span>
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
                  )) : (
                    <div role="status" className="absolute -mt-96 xl:-mt-72 lg:-mt-72 md:-mt-72 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                    <svg aria-hidden="true" className="w-12 h-12 mr-2 -mt-44 xl:mt-0 lg:mt-0 md:mt-0 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </>
            </div>
          </div>
            <br />
            <br />
            <span className="font-normal font-sans text-white lg:text-2xl">
              Follow us on Social Media for the latest show updates
            </span>
            <br />
            <br />
            {/* <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Twitter</a><br /><br /> */}
            <a
              href="https://www.instagram.com/milad_podcast/"
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              Instagram
            </a>
            <br />
            <br />
            <a
              href="https://www.facebook.com/profile.php?id=100089930657614"
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              Facebook
            </a>
            <br />
            <br />
            <a
              href="https://saghiomey.netlify.app"
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              SaghiOMey
            </a>
            <br />
            <br />
            <a
              href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ"
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              YouTube
            </a>
            <br />
            <br />
            <Footer lastepisode={lastepisode} />
          </div>
        </div>
      </div>
          : <h1 className="mt-44 bg-black text-yellow-500 text-center font-bold text-2xl">Please First Signin</h1>
        }
        </> 
      </>
      : false}
    </>
  );
}

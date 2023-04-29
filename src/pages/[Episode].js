/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';
import sky from "../assests/sky.jpg";
import Image from 'next/image'
import Index from "./index";
import Head from "next/head";
// import apple from "../apple.svg";
import youtube from "../assests/youtube.svg";
import spotify from "../assests/spotify.svg";
import googlepodcast from "../assests/googlepodcast.svg";
import share from "../assests/share.svg";
import copy from "../assests/copy.svg";
import done from "../assests/done.svg";
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
import browse from "../assests/browsePodcast.svg";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Footer from "../components/Footer";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import person from "../assests/person.svg";
import calendar from "../assests/calendar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Episode(props) {
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
    (episode) => episode.href === router.asPath.replace("/", "")
  );
  const [form, setForm] = useState({
    rating: 0,
    name: props.user.displayName,
    message: "",
    status: 0,
    Date: Date().slice(4,10)+','+Date().slice(10,15),
    nameep: result.name,
    ep: result.href
  });
  // const re = comments ? comments.Comments.find((comment) => comment.name === result.href) : false
  // const me = comments ? comments.Comments.find((comment) => comment.ep === result.href) : false

  useEffect(() => {
    async function fetchData() {
    const db = getFirestore();
    const docSnap = await getDoc(doc(db ,"comments", "w44wc6XwYePlrsl3f3Ll"));
    const Snap = await getDoc(doc(db ,"comments", "CmH4vduV6PMnqShozQJU"));
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setComments(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    if (Snap.exists()) {
      setMessages(Snap.data())
    } else {
      // console.log("No such document!");
    }
  }
    fetchData();
}, []);

// async function flike(){
//   const db = getFirestore();
//   const com = doc(db,"comments", "w44wc6XwYePlrsl3f3Ll")

//   const c = re !== undefined ? !like === true ? re.like + 1 : re.like === 0 ? re.like : re.like - 1 : 1

//   await updateDoc(com, 
//     {
//       "Comments" : arrayUnion(
//         {
//           like: c,
//           dislike: re !== undefined ? re.dislike : 0,
//           name: result.href
//         }
//       )
//     }, { merge: true });
//     await updateDoc(com, 
//       {
//         "Comments" : arrayRemove(
//           {
//             like: re !== undefined ? re.like : 0,
//             dislike: re !== undefined ? re.dislike : 0,
//             name: result.href
//           }
//         )
//       }, { merge: true });
//       getDoc(doc(getFirestore(), "comments", "w44wc6XwYePlrsl3f3Ll")).then(docSnap => {
//         if (docSnap.exists()) {
//           setComments(docSnap.data())
//         } else {
//           // console.log("No such document!");
//         }
//         });    
// }

// async function fdislike(){
//   const db = getFirestore();
//   const com = doc(db,"comments", "w44wc6XwYePlrsl3f3Ll")

//   const d = re !== undefined ? !dislike === true ? re.dislike + 1 : re.dislike === 0 ? re.dislike : re.dislike - 1 : 1

//   await updateDoc(com, 
//     {
//       "Comments" : arrayUnion(
//         {
//           like: re !== undefined ? re.like : 0,
//           dislike: d,
//           name: result.href
//         }
//       )
//     }, { merge: true });
//     await updateDoc(com, 
//       {
//         "Comments" : arrayRemove(
//           {
//             like: re !== undefined ? re.like : 0,
//             dislike: re !== undefined ? re.dislike : 0,
//             name: result.href
//           }
//         )
//       }, { merge: true });
//       getDoc(doc(getFirestore(), "comments", "w44wc6XwYePlrsl3f3Ll")).then(docSnap => {
//         if (docSnap.exists()) {
//           setComments(docSnap.data())
//         } else {
//           // console.log("No such document!");
//         }
//         });    
// }

const onSubmitForm = (e) => {
  e.preventDefault();
};

const onUpdateField = (e) => {
  const field = e.target.name;
  const nextFormState = {
    ...form,
    [field]: e.target.value,
  };
  setForm(nextFormState);
};

async function message(){
  const db = getFirestore();
  const com = doc(db,"comments", "CmH4vduV6PMnqShozQJU")

  await updateDoc(com, 
    {
      "Message" : arrayUnion(
        {
            rating: form.rating,
            name: form.name,
            message: form.message,
            status: form.status,
            Date: form.Date,
            ep: form.ep,
            nameep: form.nameep
        }
      )
    }, { merge: true });
      getDoc(doc(getFirestore(), "comments", "CmH4vduV6PMnqShozQJU")).then(docSnap => {
        if (docSnap.exists()) {
          setMessages(docSnap.data())
        } else {
          // console.log("No such document!");
        }
        });    
}
function settimeout(){
  setTimeout(() => {
    setSubmit(false)
  },3000)
}

  // const show = props.episodes.slice(-4).reverse().find((episode) => episode.href === router.asPath.replace("/", ""))
  // console.log(!like === true || re === undefined ? re.like + 1 : re.like === 0 ? re.like : re.like - 1);
  return (
    <>
    {props.user ?
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
      <div className="relative">
        <Image className="bg-cover h-96 md:h-auto xl:w-full" src={sky} alt="sky" />
        <div className="absolute grid justify-items-center md:justify-items-start xl:top-3/4 w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
          />
          <div className="flex -mt-52 xl:-mt-96 lg:-mt-80 md:-mt-64 xl:-ml-36 lg:ml-16 md:ml-36 justify-self-center">
            <Image src={browse} className=" h-4 w-4 rounded-full text-white" />
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
                                <WhatsappShareButton url={result.eplink}>
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
          <div className="flex md:justify-self-center w-80 md:w-auto gap-0.5 md:gap-3 -mt-20 xl:-mt-32 xl:ml-12 lg:-mt-18 lg:ml-64 md:-mt-24 md:ml-72">
            {/* <button
              onClick={() => flike() && setLike(!like) || setCountlike(like === false ? countlike + 1 : countlike - 1)}
              className="flex bg-white h-12 w-32 rounded hover:bg-opacity-0"
            >
              <svg className={like === false ? "text-yellow-500 animate-ping" : "text-red-700 animate-ping"} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" version="1" id="heart"><path fill="currentColor" d="M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3C11 4.9 9.4 4 7.6 4 4.7 4 2.2 6.4 2.2 9.4z"></path></svg>
              
              <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">
                Like
              </span>&nbsp;
              <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">
                {re !== undefined ? re.name === result.href ? re.like : 
                (<div role="status" className="absolute -mt-8 xl:-mt-24 lg:-mt-14 md:-mt-14 -ml-16 xl:-ml-20 lg:ml-7 md:ml-12 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span className="sr-only">Loading...</span>
                </div>)
                 : 0}
              </span>
            </button> */}
            <button
              onClick={() => setopenreview(true)}
              className="flex bg-white h-12 w-32 rounded hover:bg-opacity-0"
            >
              <svg className="ml-2 mt-1 text-yellow-500 animate-ping" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 36 36" id="comment"><path fill="currentColor" d="M5.078 24.482A19.813 19.813 0 0 1 1.812 30c3.198 0 7.312-.42 10.482-2.364A19.52 19.52 0 0 0 16 28c8.836 0 16-5.82 16-13S24.836 2 16 2 0 7.82 0 15c0 3.744 1.96 7.11 5.078 9.482z"></path></svg>
              <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">
                Comment
              </span>
            </button>
            <Transition.Root show={openreview} as={Fragment}>
                      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setopenreview}>
                        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Dialog.Overlay className="fixed inset-0 hidden transition-opacity bg-gray-500 bg-opacity-75 md:block" />
                          </Transition.Child>

                          {/* This element is to trick the browser into centering the modal contents. */}
                          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
                            &#8203;
                          </span>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                          >
                            <div className="flex w-full text-base text-left transition transform md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                              <div className="relative bg-black flex items-center w-full px-4 pb-8 overflow-hidden shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button
                                  type="button"
                                  className="absolute text-gray-400 top-4 right-4 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                  onClick={() => setopenreview(false)}
                                >
                                  <span className="sr-only">Close</span>
                                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                </button>

                                <div className="grid items-start w-full grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                  <form className="sm:col-span-full lg:col-span-full" onSubmit={onSubmitForm}>
                                    {/* <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{result.name}</h2> */}
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
                                    <div className="mt-2 pl-0.5 cursor-pointer flex items-center">
                                      {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                          key={rating}
                                          className={classNames(
                                            form.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                          )}
                                          aria-hidden="true"
                                          name="rating"
                                          onClick={() => setForm({rating: rating + 1, name: form.name, nameep: result.name, message: form.message, status: 0, Date: Date().slice(4,10)+','+Date().slice(10,15), ep: form.ep})}
                                        />
                                      ))}
                                    </div>
                                    <label htmlFor="street-address" className="block mt-4 text-sm font-medium text-gray-300">
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      disabled ="disabled"
                                      value={form.name}
                                      autoComplete="name"
                                      className="mt-1 h-12 w-72 md:w-96 bg-black block rounded-md border shadow-sm text-gray-300 border-yellow-500 sm:text-medium cursor-not-allowed"
                                      required
                                    />
                                    <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-300">
                                      Message
                                    </label>
                                    {/* {this.state.errorMessage.message ? <p className="text-red-500">{this.state.errorMessage.message[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>} */}
                                    <textarea
                                      type="text"
                                      name="message"
                                      id="message"
                                      value={form.message}
                                      autoComplete="address-level2"
                                      className="mt-1 h-32 w-72 md:w-96 bg-black block text-gray-300 rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                                      onChange={onUpdateField}
                                      required
                                    />
                                    <div className="mt-8">
                                    <div className="flex justify-center mt-5">
                                   <button
                                      onClick={() => message() && setopenreview(false) || setSubmit(true) || settimeout()}
                                      type="submit"
                                      className="bg-yellow-500 text-white w-32 h-16 rounded-full hover:bg-white hover:text-black"
                                  >
                                    Submit
                                  </button>
                                  </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition.Root>
            {/* <button
              onClick={() => fdislike() && setDislike(!dislike) || setCountdislike(dislike === false ? countdislike + 1 : countdislike - 1)}
              className="flex bg-white h-12 w-32 rounded hover:bg-opacity-0"
            >
              <svg className={dislike === false ? "text-yellow-500 animate-ping" : "text-red-700 animate-ping"} xmlns="http://www.w3.org/2000/svg" id="dislike" version="1" width="40" height="40" viewBox="0 0 27 27"><path fill="currentColor" d="M11.377.937h2v25.456h-2z" transform="rotate(-45.001 12.377 13.665)"></path><path d="m21.439 18.483 2.633-2.633.354-.354a6.5 6.5 0 0 0-9.192-9.192l-.354.354-.354-.354a6.495 6.495 0 0 0-6.784-1.518l13.697 13.697zM3.663 9.193a6.494 6.494 0 0 0 1.671 6.304l.354.354 9.192 9.192 2.317-2.317L3.663 9.193z"></path></svg>
              
              <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">
                Dislike
              </span>&nbsp;
              <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">
                {re !== undefined ? re.name === result.href ? re.dislike : 
                (<div role="status" className="absolute -mt-8 xl:-mt-24 lg:-mt-14 md:-mt-14 ml-36 xl:ml-52 lg:ml-80 md:ml-80 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span className="sr-only">Loading...</span>
                </div>)
                : 0}
              </span>
            </button> */}
          </div>
        </div>
        <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <span className="flex justify-center mt-14">
            <iframe
              width="560"
              height="315"
              src={result.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </span>
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
                    // eslint-disable-next-line react/no-unescaped-entities
                    ) : null}
                    </>
                  )) : (
                    <div role="status" className="absolute -mt-80 xl:-mt-36 lg:-mt-36 md:-mt-36 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                    <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
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
      </>
      : false}
    </>
    : <h1 className="mt-44 bg-black text-yellow-500 text-center font-bold text-2xl">Please First Signin</h1>
    }
    </>
  );
}

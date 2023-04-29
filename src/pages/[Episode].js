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
//   const [form, setForm] = useState({
//     rating: 0,
//     name: props.user.displayName,
//     message: "",
//     status: 0,
//     Date: Date().slice(4,10)+','+Date().slice(10,15),
//     nameep: result.name,
//     ep: result.href
//   });
//   const re = comments ? comments.Comments.find((comment) => comment.name === result.href) : false
//   // const me = comments ? comments.Comments.find((comment) => comment.ep === result.href) : false

//   useEffect(() => {
//     async function fetchData() {
//     const db = getFirestore();
//     const docSnap = await getDoc(doc(db ,"comments", "w44wc6XwYePlrsl3f3Ll"));
//     const Snap = await getDoc(doc(db ,"comments", "CmH4vduV6PMnqShozQJU"));
//     if (docSnap.exists()) {
//       // console.log("Document data:", docSnap.data());
//       setComments(docSnap.data())
//     } else {
//       // docSnap.data() will be undefined in this case
//       console.log("No such document!");
//     }
//     if (Snap.exists()) {
//       setMessages(Snap.data())
//     } else {
//       // console.log("No such document!");
//     }
//   }
//     fetchData();
// }, []);

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

// const onSubmitForm = (e) => {
//   e.preventDefault();
// };

// const onUpdateField = (e) => {
//   const field = e.target.name;
//   const nextFormState = {
//     ...form,
//     [field]: e.target.value,
//   };
//   setForm(nextFormState);
// };

// async function message(){
//   const db = getFirestore();
//   const com = doc(db,"comments", "CmH4vduV6PMnqShozQJU")

//   await updateDoc(com, 
//     {
//       "Message" : arrayUnion(
//         {
//             rating: form.rating,
//             name: form.name,
//             message: form.message,
//             status: form.status,
//             Date: form.Date,
//             ep: form.ep,
//             nameep: form.nameep
//         }
//       )
//     }, { merge: true });
//       getDoc(doc(getFirestore(), "comments", "CmH4vduV6PMnqShozQJU")).then(docSnap => {
//         if (docSnap.exists()) {
//           setMessages(docSnap.data())
//         } else {
//           // console.log("No such document!");
//         }
//         });    
// }
// function settimeout(){
//   setTimeout(() => {
//     setSubmit(false)
//   },3000)
// }

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
        
      </div>
      </>
      : false}
    </>
    : <h1 className="mt-44 bg-black text-yellow-500 text-center font-bold text-2xl">Please First Signin</h1>
    }
    </>
  );
}

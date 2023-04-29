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

  const [form, setForm] = useState({
    rating: 0,
    name: props.user.displayName,
    message: "",
    status: 0,
    Date: Date().slice(4,10)+','+Date().slice(10,15),
    nameep: result.name,
    ep: result.href
  });
  const re = comments ? comments.Comments.find((comment) => comment.name === result.href) : false
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

async function flike(){
  const db = getFirestore();
  const com = doc(db,"comments", "w44wc6XwYePlrsl3f3Ll")

  const c = re !== undefined ? !like === true ? re.like + 1 : re.like === 0 ? re.like : re.like - 1 : 1

  await updateDoc(com, 
    {
      "Comments" : arrayUnion(
        {
          like: c,
          dislike: re !== undefined ? re.dislike : 0,
          name: result.href
        }
      )
    }, { merge: true });
    await updateDoc(com, 
      {
        "Comments" : arrayRemove(
          {
            like: re !== undefined ? re.like : 0,
            dislike: re !== undefined ? re.dislike : 0,
            name: result.href
          }
        )
      }, { merge: true });
      getDoc(doc(getFirestore(), "comments", "w44wc6XwYePlrsl3f3Ll")).then(docSnap => {
        if (docSnap.exists()) {
          setComments(docSnap.data())
        } else {
          // console.log("No such document!");
        }
        });    
}

async function fdislike(){
  const db = getFirestore();
  const com = doc(db,"comments", "w44wc6XwYePlrsl3f3Ll")

  const d = re !== undefined ? !dislike === true ? re.dislike + 1 : re.dislike === 0 ? re.dislike : re.dislike - 1 : 1

  await updateDoc(com, 
    {
      "Comments" : arrayUnion(
        {
          like: re !== undefined ? re.like : 0,
          dislike: d,
          name: result.href
        }
      )
    }, { merge: true });
    await updateDoc(com, 
      {
        "Comments" : arrayRemove(
          {
            like: re !== undefined ? re.like : 0,
            dislike: re !== undefined ? re.dislike : 0,
            name: result.href
          }
        )
      }, { merge: true });
      getDoc(doc(getFirestore(), "comments", "w44wc6XwYePlrsl3f3Ll")).then(docSnap => {
        if (docSnap.exists()) {
          setComments(docSnap.data())
        } else {
          // console.log("No such document!");
        }
        });    
}

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

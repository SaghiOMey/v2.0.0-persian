/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Voice from '@/components/voice';
import dynamic from 'next/dynamic'
import '@/styles/globals.css'
import Head from "next/head";
import episodes from './api/episodes'
import Reviews from './api/reviews'
import Message from './api/message'
import Comment from './api/comments'
import { Fragment, useCallback } from "react";
import logo from "../assests/SOM.svg";
import profile from "../assests/Logo.jpg";
import Image from 'next/image'
import Link from "next/link";
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/performance";
import 'nprogress/nprogress.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCX0QCbi91uyfR-FFoq6B6Ld955eknirfo",
  authDomain: "saghiomey-f6203.firebaseapp.com",
  projectId: "saghiomey-f6203",
  storageBucket: "saghiomey-f6203.appspot.com",
  messagingSenderId: "838247378490",
  appId: "1:838247378490:web:a8bc732e73e69f42b14f03",
  measurementId: "G-B3DNY6FW6W"
};

// Initialize firebase and google 
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// const perf = firebase.performance();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// Sign in and sign out functins
const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();

const TopProgressBar = dynamic(
  () => {
    return import("@/components/TopProgressBar");
  },
  { ssr: false },
);

export default function App({ Component, pageProps }) {
  const form1 = useRef();
  const router = useRouter();
  const { pathname } = useRouter();
  const [Search, setSearch] = useState(false);
  const [user, setUser] = useState(null);
  const [ep, setEp] = useState(Message);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);

  let [Name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const filterNames = episodes.filter((episodes) =>
    episodes.name.toLowerCase().includes(Name.toLowerCase())
  );
  const filterReviews = Reviews.filter((reviews) =>
    reviews.epname.toLowerCase().includes(Name.toLowerCase())
  );
  const filterComments = ep.length !== 0 ? Message.filter((comments) =>
    comments.ep.toLowerCase().includes(Name.toLowerCase())
  ) : []

  let navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Video Interviews", href: "/VideoInterviews", current: false },
    {
      name: "Audio Interviews",
      href: "/AudioInterviews",
      current: false,
    },
    { name: "About", href: "/About", current: false },
    { name: "News", href: "/News", current: false },
    { name: "Contact", href: "/Contact", current: false },
  ];
  function current() {
    let result = navigation.find((item) =>
      item.href === pathname
        ? item.href
        : item.href === pathname.replace("/", "")
    );
    if (result) {
      result.current = true;
    } else {
      result = pathname;
    }
    return (navigation = navigation.map((nav) =>
      nav.href === result.href ? result : nav
    ));
  }

  return (
    <>
        <div style={{ height: "0px" }}>
        </div>
      <Head>
        <title>SaghiOMey</title>
        <link rel="shortcut icon" href="/SM.ico" />
        <link href="https://saghiomey.netlify.app/feed.xml" rel="alternate" type="application/rss+xml"/>
        <meta name="author" content="Milad" />
        <meta name="google-site-verification" content="QpBWZ37FwTOQtW_1NPVKstxLBeO_7Y__NPqCx9vZla4" />
        <meta name="keywords"
        content="Milad, Milad Podcast, SaghiOMey, saghiomey, Saghiomey, SaghiOMey Podcast, Cultural and social podcast" />
      </Head>
      {pathname === "/" ? null :
      <Disclosure as="nav" style={{ backgroundColor: "#1f2022" }}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-32 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="block h-20 mb-20 w-auto lg:hidden"
                      src={logo}
                      alt="SaghiOMey"
                    />
                  </Link>
                  <Link href="/"> 
                    <Image
                      className="hidden h-28 w-auto lg:block"
                      src={logo}
                      alt="SaghiOMey"
                    />
                  </Link>
                  </div>
                  <div className="hidden pt-4 sm:ml-6 sm:block">
                    <div>
                      {navigation.map((item) => (
                        <>
                        <Link
                          href={item.href}
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                              : "text-gray-300 hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                        </>
                      ))}
                      {user ? 
                      <button
                      onClick={signOut}
                      className="text-gray-300 hover:bg-gray-700 pointer hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SignOut
                    </button>
                     :
                     <button
                      onClick={signIn}
                      className="text-gray-300 hover:bg-gray-700 pointer hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SignIn
                    </button>
                     }
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {Search ? (
                    <input
                      type="search"
                      onChange={handleChange}
                      value={Name}
                      className={pathname === "/" || pathname === "/VideoInterviews" || pathname === "/AudioInterviews" || pathname === "/Reviews" || pathname === "/News" ? "form-control relative flex-auto min-w-0 block w-32 px-3 py-1.5 text-base font-normal bg-inherit text-gray-200 bg-clip-padding border-b border-solid border-b-yellow-500 transition ease-in-out m-0 focus:text-gray-200 focus:border-b-yellow-600	 focus:outline-none" : "hidden"}
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                  ) : null}
                  <button
                    onClick={() => setSearch(!Search)}
                    type="button"
                    className={pathname === "/" || pathname === "/VideoInterviews" || pathname === "/AudioInterviews" || pathname === "/News" || pathname === "/Reviews" ? "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800" : "hidden"}
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {user ?
                        <img
                          className="h-16 w-16 rounded-full"
                          src={user.photoURL}
                          alt="profile"
                        />
                        :
                        <Image
                          className="h-16 w-16 rounded-full"
                          src={profile}
                          alt="profile"
                        />
                        }
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <>
                            {user ?
                            <>
                           <span className={classNames(active ? "bg-gray-100" : "","block px-4 py-2 text-sm text-gray-700")}>{user.displayName}</span>
                            </>
                            :
                            null
                            }
                            </>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link
                              href="/NFT"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-yellow-500"
                              )}
                            >
                              NFT
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <Link
                              href="/Reviews"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-yellow-500"
                              )}
                            >
                              Reviews <span className='px-2'>0</span>
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    onClick={current()}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-yellow-500"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                {user ? 
                      <button
                      onClick={signOut}
                      className="text-gray-300 hover:bg-gray-700 pointer hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SignOut
                    </button>
                     :
                     <button
                      onClick={signIn}
                      className="text-gray-300 hover:bg-gray-700 pointer hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SignIn
                    </button>
                     }
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      }
  <TopProgressBar />    
  <Component {...pageProps} user={user} signIn={signIn} signOut={signOut} episode = {episodes} reviews={Reviews} message={Message} episodes={filterNames} comment={Comment} review={filterReviews} comments={filterComments} />
  <Voice />
    </>
  )
}

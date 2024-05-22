/* eslint-disable react-hooks/rules-of-hooks */
import App from '../components/App';
import episodes from "../pages/api/episodes"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Fragment, useCallback } from "react";
import logo from "../assests/SOM.svg";
import profile from "../assests/Logo.jpg";
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";
import Script from 'next/script'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "../../serviceworker";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function index(props) {
  const { pathname } = useRouter();
  const [Open, setOpen] = useState(false);
  const [Search, setSearch] = useState(false);
  const [Reviews, setReviews] = useState(null);
  const [Img, setImg] = useState(null);
  const [ep, setEp] = useState(props.message);
  let [Name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const filterNames = episodes.filter((episodes) =>
    episodes.name.toLowerCase().includes(Name.toLowerCase())
  );

  let navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Video Interviews", href: "VideoInterviews", current: false },
    {
      name: "Audio Interviews",
      href: "/AudioInterviews",
      current: false,
    },
    { name: "About", href: "About", current: false },
    { name: "News", href: "News", current: false },
    { name: "Contact", href: "Contact", current: false },
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
  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      const last = episodes.slice(-5).reverse().map((item) => item.name)
      const querySnapshot = await getDocs(collection(db, "guests"));
      querySnapshot.forEach((doc) => {
      last.find(element => element.includes(doc.id)) ? 
      setReviews(doc.id) || setImg(doc.data().img)
      : ""
      });
    }
      fetchData();
    }, []);

  return (
    <div>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9848331502386282"
          crossorigin="anonymous"></Script>
      <Head>
      <meta property="og:title" key="og:title" content="Podcast SaghiOMey Hosted By Milad" />
      <meta property="og:image" key="og:image" content="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded/22745765/22745765-1673944612760-1d57f610e6e73.jpg" />
      </Head>
      {pathname === "/" ? 
      <>
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
                      {props.user ? 
                      <button
                      onClick={props.signOut}
                      className="text-gray-300 hover:bg-gray-700 pointer hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SignOut
                    </button>
                     :
                     <button
                      onClick={props.signIn}
                      className="text-gray-300 hover:bg-gray-700 pointer hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SignIn
                    </button>
                     }
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm">
                        <span className="sr-only">Open user menu</span>

                    <div className="flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </div>

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
                      <Menu.Items className="absolute -mr-16 md:mr-0 w-60 md:min-w-max min-h-max right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <>
                              {episodes.slice(-5).reverse().map((item) => (
                                <>
                                <Link href={item.eplink} className={classNames(
                                active ? "flex bg-neutral-900" : "",
                                "flex block px-4 py-2 text-sm text-gray-700 hover:text-yellow-500"
                              )}>
                                <Image
                                className="h-12 w-12 rounded-full"
                                src={profile}
                                alt="profile"
                                />
                                <div className="p-2 text-gray-200 hover:text-yellow-500 hover:cursor-pointer">Recommended: {item.name}<br /><span className={new Date(item.date).getMonth() < new Date().getMonth() ? null : item.date.slice(4,6) <= new Date().toString().slice(8, 10) ? null : null}>{new Date(item.date).getMonth() < new Date().getMonth() ? item.date : item.date.slice(4,6) <= new Date().toString().slice(8, 10) ? item.date : item.date}</span></div>
                                <img
                                className="h-12 w-12 rounded"
                                src={item.img} />
                                </Link>
                                </>
                              ))}
                            </>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>&nbsp;
                  {Search ? (
                    <input
                      type="search"
                      onChange={handleChange}
                      value={Name}
                      class="form-control relative flex-auto min-w-0 block w-32 px-3 py-1.5 text-base font-normal bg-inherit text-gray-200 bg-clip-padding border-b border-solid border-b-yellow-500 transition ease-in-out m-0 focus:text-gray-200 focus:border-b-yellow-600	 focus:outline-none"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                  ) : null}
                  <button
                    onClick={() => setSearch(!Search)}
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
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
                        {props.user ?
                        <img
                          className="h-16 w-16 rounded-full"
                          src={props.user.photoURL}
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
                            {props.user ?
                            <span className={classNames(active ? "bg-gray-100" : "","block px-4 py-2 text-sm text-gray-700")}>{props.user.displayName}</span>
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
                              href="NFT"
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
                              href="Reviews"
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
                {props.user ? 
                      <button
                      onClick={props.signOut}
                      className="text-gray-300 hover:bg-gray-700 pointer hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      SignOut
                    </button>
                     :
                     <button
                      onClick={props.signIn}
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
      <App episode={episodes} episodes={filterNames} />
      </>
      : null
      }
    </div>
  )
}

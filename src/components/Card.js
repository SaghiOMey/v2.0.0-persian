/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import logo from "../assests/saghimey.jpg";
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from "next/link";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// Sign in and sign out functins


export default function Card(episodes) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [ep, setEp] = useState(episodes.episodes.slice(0, 9));
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);
  return (
    <>
    {/* <div
            className={`relative z-10 ${open === true ? "block" : "hidden"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                        <h3
                          className="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Please First Signin
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                          To access the Interviews, Please Signin in the NavBar section
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
  </div> */}
      {pathname === "/" ? (
        <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
          {ep.length > episodes.episodes.length ? (
            <>
              {episodes.episodes.slice(0, 9).map((episode) => (
                <>
                {user ?
                <Link href={`/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <Image
                        src={logo}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
                : 
                <button onClick={() => setOpen(true)}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <Image
                        src={logo}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </button>
                }
                </>
              ))}
            </>
          ) : (
            <>
              {ep.map((episode) => (
                // <>
                // {user ?
                // <Link href={`/${episode.href}`}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <Image
                //         src={logo}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </Link>
                // :
                // <button onClick={() => setOpen(true)}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <Image
                //         src={logo}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </button>
                // }
                // </>
                <Link href={`/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <Image
                        src={logo}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
          {ep.length > episodes.episodes.length ? (
            <>
              {episodes.episodes.slice(0, 9).map((episode) => (
                <>
                {pathname === "/VideoInterviews" ?
                // <>
                //  {user ?
                // <Link href={`/VideoInterviews/${episode.href}`}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </Link>
                // :
                // <button onClick={() => setOpen(true)}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </button>
                //  }
                // </>
                <Link href={`/VideoInterviews/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
                : null }
                {pathname === "/PersianEpisodes" ?
                // <>
                // {user ? 
                // <Link href={`/PersianEpisodes/${episode.href}`}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </Link>
                // :
                // <button onClick={() => setOpen(true)}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </button>
                // }
                // </>
                <Link href={`/PersianEpisodes/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
                : null }
                {pathname === "/EnglishEpisodes" ?
                // <> 
                // {user ? 
                // <Link href={`/EnglishEpisodes/${episode.href}`}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </Link>
                // :
                // <button onClick={() => setOpen(true)}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </button>
                // }
                // </>
                <Link href={`/EnglishEpisodes/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
                : null }
                </>
              ))}
            </>
          ) : (
            <>
              {ep.map((episode) => (
                <>
                {pathname === "/VideoInterviews" ?
                // <>
                // {user ?  
                // <Link href={`/VideoInterviews/${episode.href}`}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </Link>
                // :
                // <button onClick={() => setOpen(true)}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </button>
                // }
                // </>
                <Link href={`/VideoInterviews/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
                : null }
                {pathname === "/PersianEpisodes" ? 
                // <>
                // {user ?
                // <Link href={`/PersianEpisodes/${episode.href}`}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </Link>
                // :
                // <button onClick={() => setOpen(true)}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </button>
                // }
                // </>
                <Link href={`/PersianEpisodes/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
                : null }
                {pathname === "/EnglishEpisodes" ? 
                // <>
                // {user ?
                // <Link href={`/EnglishEpisodes/${episode.href}`}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </Link>
                // :
                // <button onClick={() => setOpen(true)}>
                //   <div
                //     key={episode.id}
                //     className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                //   >
                //     <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                //       <img
                //         src={episode.img}
                //         alt={episode.imageAlt}
                //         className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                //       />
                //     </div>
                //     <div className="mt-4">
                //       <div>
                //         <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                //           <p
                //             href={episode.href}
                //             className="absolute flex -mt-6 w-full justify-center"
                //           >
                //             <span
                //               aria-hidden="true"
                //               className="absolute inset-0"
                //             />
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="17"
                //                 height="17"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.date}&nbsp;&nbsp;
                //             <span className="text-zinc-300 fill-current">
                //               <svg
                //                 xmlns="http://www.w3.org/2000/svg"
                //                 width="19"
                //                 height="19"
                //                 viewBox="0 0 24 24"
                //               >
                //                 <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                //               </svg>
                //             </span>
                //             &nbsp;{episode.time}
                //           </p>
                //         </h3>
                //         <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                //           {episode.name}
                //         </p>
                //       </div>
                //       <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                //         {episode.describtion}
                //       </p>
                //     </div>
                //   </div>
                // </button>
                // }
                // </>
                <Link href={`/EnglishEpisodes/${episode.href}`}>
                  <div
                    key={episode.id}
                    className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                  >
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className="text-xs md:text-xs lg:text-sm text-zinc-300">
                          <p
                            href={episode.href}
                            className="absolute flex -mt-6 w-full justify-center"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                              </svg>
                            </span>
                            &nbsp;{episode.date}&nbsp;&nbsp;
                            <span className="text-zinc-300 fill-current">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                              </svg>
                            </span>
                            &nbsp;{episode.time}
                          </p>
                        </h3>
                        <p className="mt-8 ml-4 mr-1 font-semibold rwxt-xs md:text-sm lg:text-lg text-yellow-500">
                          {episode.name}
                        </p>
                      </div>
                      <p className="text-xs md:text-xs lg:text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                        {episode.describtion}
                      </p>
                    </div>
                  </div>
                </Link>
                : null }
                </>
              ))}
            </>
          )}
        </div>
      )}
      {episodes.episodes.length > 0 ? (
        <div className="mt-16 md:mr-80">
          <button
            onClick={() => setEp(episodes.episodes.slice(0, ep.length + 9))}
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
    </>
  );
}

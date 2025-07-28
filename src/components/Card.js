/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import Link from "next/link";
import { useState, useEffect } from "react";



export default function Card(episodes) {
  const { pathname } = useRouter();
  const [ep, setEp] = useState(episodes.episodes.slice(0, 9));

  return (
    <>
      {pathname === "/" ? (
        <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
          {ep.length > episodes.episodes.length ? (
            <>
              {episodes.episodes.slice(0, 9).map((episode) => (
                <>
                <Link href={`/${episode.href}`}>
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
                </>
              ))}
            </>
          ) : (
            <>
              {ep.map((episode) => (
                <>
                <Link href={`/${episode.href}`}>
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
                </>
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
                <>
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
                </>
                : null }
                {pathname === "/AudioInterviews" ?
                <>
                <Link href={`/AudioInterviews/${episode.href}`}>
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
                </>
                : null }
                </>
              ))}
            </>
          ) : (
            <>
              {ep.map((episode) => (
                <>
                {pathname === "/VideoInterviews" ?
                <>
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
                </>
                : null }
                {pathname === "/AudioInterviews" ? 
                <>
                <Link href={`/AudioInterviews/${episode.href}`}>
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
                </>
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

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../assests/nightsky.jpg";
import Index from "./index";
import { Tab } from "@headlessui/react";
import { useState } from "react";
// import logo from "../saghimey.jpg";
import Footer from "../components/Footer";
import Image from 'next/image'
import Head from "next/head";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NFT(props) {
  let [categories] = useState({
    Image: [
      {
        id: 1,
        name: "The first cover of Saghi.O.May podcast",
        describtion:
          "The first cover of Saghi.O.May podcast, which was unveiled in 2021, also 10% of sales goes to charity",
        price: "0.0125 WETH, $20.45",
        creator: "Milad",
        img: "https://i.seadn.io/gcs/files/824a750c60cecdae055fe3a29704235d.png?auto=format&w=1000",
        date: "May 28",
        expire: "May 28, 2023",
        link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/34451397322601742123712235644046916536807054080760084198907560899270500417537/",
      },
      // {
      //   id: 2,
      //   name: "So you've bought coffee... now what?",
      //   describtion: "Does drinking coffee make you smarter?",
      //   price: "0.62 ETH, $992.79",
      //   creator: "Milad",
      //   img: logo,
      //   date: "Mar 26",
      //   expire: "March 5, 2023",
      //   link: "#",
      // },
    ],
    Audio: [
      {
        id: 1,
        name: "The first episode of Saghi.O.May podcast",
        describtion:
          "The first episode of Saghi.O.May podcast, which was unveiled in 2021, also 10% of sales goes to charity",
        price: "0.0125 WETH, $20.45",
        creator: "Milad & Dani",
        img: "https://i.seadn.io/gcs/files/3e83fe2a43a75496bc263080d4adc95a.png?auto=format&w=1000",
        date: "May 28",
        expire: "May 28, 2023",
        link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/34451397322601742123712235644046916536807054080760084198907560900370012045313/",
      },
      {
        id: 2,
        name: "The first exclusive music of Saghi.O.Mey podcast",
        describtion: "The first exclusive music of Saghi.O.Mey podcast, also 10% of sales goes to charity",
        price: "0.014 WETH, $20.43",
        creator: "Milad & Sadaf",
        img: logo,
        date: "Mar 19",
        expire: "March 19, 2023",
        link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/34451397322601742123712235644046916536807054080760084198907560902569035300865/",
      },
    ],
    Video: [
      {
        id: 1,
        name: "The first video of Saghi.O.May podcast",
        describtion:
          "The first video of Saghi.O.May podcast, which was unveiled in 2021, also 10% of sales goes to charity",
        price: "0.0125 WETH, $20.45",
        creator: "Milad & Dani",
        img: "https://i.seadn.io/gcs/files/3e83fe2a43a75496bc263080d4adc95a.png?auto=format&w=1000",
        date: "May 28",
        expire: "May 28, 2023",
        link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/34451397322601742123712235644046916536807054080760084198907560901469523673089/",
      },
      // {
      //   id: 2,
      //   name: "The worst advice we've ever heard about coffee",
      //   describtion: "Does drinking coffee make you smarter?",
      //   price: "0.62 ETH, $992.79",
      //   creator: "Milad",
      //   img: logo,
      //   date: "Feb 26",
      //   expire: "March 5, 2023",
      //   link: "#",
      // },
    ],
  });
  const lastepisode = props.episodes.slice(-5).reverse();
  return (
    <>
    <Index />
    <Head>
        <title>NFT</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">NFT</span>
          <div className="flex">
            <span className="mr-1 lg:mt-8 lg:mr-2 md:mt-0 md:mr-2 text-xs md:text-base font-sans font-medium">
              Available On:
            </span>
            <a
              href="https://opensea.io/milad21"
              className="text-yellow-500 mr-1 lg:mt-8 md:mt-0 lg:mr-2 md:mr-2 hover:text-white fill-current"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12s12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081l3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528c-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199a.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962c-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132c-.026.226.017.459.125.67c.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992c.156-.274.308-.566.43-.86c.024-.052.043-.107.065-.16c.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787c0-.108-.004-.221-.014-.327c-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312a6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972a5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197a4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05l.192.054l.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202a.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017c.034.024.084.062.147.11c.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691c.065.074.127.146.192.226c.062.079.132.156.19.232c.079.104.16.212.235.324c.033.053.074.108.105.161c.096.142.178.288.257.435c.034.067.067.141.096.213c.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254c-.075.17-.161.343-.264.502c-.034.06-.075.122-.113.182c-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209c-.081.098-.16.19-.245.278c-.048.058-.1.118-.156.17c-.052.06-.108.113-.156.161c-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298c.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z" />
              </svg>
            </a>
            <a
              className="text-yellow-500 mr-1 lg:mt-8 md:mt-0 lg:mr-2 md:mr-2 hover:text-white fill-current"
              href="https://www.instagram.com/milad_podcast/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              className="text-yellow-500 mr-1 lg:mt-8 md:mt-0 hover:text-white fill-current"
              href="https://www.facebook.com/profile.php?id=100089930657614"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-black p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                      "ring-opacity-60 ring-offset-2 focus:outline-none",
                      selected ? "shadow text-yellow-500" : "text-blue-100 hover:text-yellow-500"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl p-3",
                    "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                    {[...posts].reverse().map((post) => (
                      <>
                        {post.date <=
                        new Date().toString().slice(4, 10) ? null : (
                          <li
                            key={post.id}
                            className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                          >
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                              <img
                                src={post.img}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                              />
                            </div>
                            <h1 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.name}
                            </h1>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.describtion}
                            </h3>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              <span className="font-semibold text-gray-500">
                                Creator:
                              </span>
                              &nbsp; {post.creator}
                            </h3>

                            <ul className="mt-1 flex justify-between text-xs font-normal leading-4 text-gray-200">
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Current price:
                                </span>
                                &nbsp;{post.price}
                              </li>
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Expire date:
                                </span>
                                &nbsp;{post.expire}
                              </li>
                            </ul>

                            <a
                              href={post.link}
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-yellow-500 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}

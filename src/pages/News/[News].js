/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import sky from "../../assests/sky.jpg";
import Footer from "../../components/Footer";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function IMG(props) {
  const router = useRouter();
  const lastepisode = props.episodes.slice(-5).reverse();
  const result = props.reviews.find(
    (review) => review.href === router.asPath.replace("/News/", "")
  );

  return (
    <>
      <Script
        async
        type="application/javascript"
        src="https://news.google.com/swg/js/v1/swg-basic.js"
      ></Script>
      <Script id="google-news">
        {`
      (self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
        basicSubscriptions.init({
        type: "NewsArticle",
        isPartOfType: ["Product"],
        isPartOfProductId: "CAowqe_OCw:openaccess",
        clientOptions: { theme: "light", lang: "en" },
        });
      });
      `}
      </Script>
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
                className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
              />
              <span className="-mt-56 xl:-mt-96 lg:-mt-96 md:-mt-72 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-4xl lg:text-2xl md:text-xl font-bold">
                {result.name}
              </span>
              <span className="w-10/12 md:w-4/12 -mt-48 xl:-mt-80 lg:-mt-80 md:-mt-64 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center font-normal font-sans text-white lg:text-2xl">
                {result.describtion}.
              </span>
            </div>
            <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
              <div className="mx-auto text-center md:text-justify max-w-2xl py-4 px-6 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {result.video ? 
              <iframe
              className="w-full h-36 md:h-60 lg:h-72"
              src={result.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              ></iframe>
              : null
              }
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

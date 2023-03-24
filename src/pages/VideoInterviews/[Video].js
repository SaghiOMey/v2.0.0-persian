/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from 'next/router';
import sky from "../../assests/sky.jpg";
import Footer from "../../components/Footer";
import Image from 'next/image'
import Head from "next/head";

export default function Persian(props) {
  const router = useRouter();
  const episodes = [...props.episodes].reverse();
  const lastepisode = props.episodes.slice(-5).reverse();
  const result = episodes.find(
    (episode) => episode.href === router.asPath.replace("/VideoInterviews/", "")
  );
  const show = lastepisode.find((episode) => episode.href === router.asPath.replace("/VideoInterviews/", ""))
  // console.log(result);
  return (
    <>
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
    <>
    {props.user || show ?
      <div className="relative">
        <Image className="bg-cover h-96 md:h-auto xl:w-full" src={sky} alt="sky" />
        <div className="absolute grid justify-items-center md:justify-items-start xl:top-3/4 w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
          />
          <p className="-mt-56 xl:-mt-96 lg:-mt-96 md:-mt-72 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-4xl lg:text-2xl md:text-xl font-bold">
            {result.name}
          </p>
          <div className="justify-self-center -mt-48 w-72 md:-mt-64 md:ml-56 md:h-60 md:w-1/2 lg:-mt-80 lg:ml-80 lg:w-3/5 lg:h-72 xl:ml-96 aspect-video">
            <iframe
              className="w-full h-36 md:h-60 lg:h-72"
              src={result.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <div className="mx-auto text-center md:text-justify max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <span className="font-normal font-sans text-white lg:text-2xl">
              {result.describtion}.
            </span>
            <br />
            <br />
            {show ?
            <span className="font-normal font-sans text-white lg:text-2xl">
              Listen on
            </span>
            : null }
            <br />
            <br />
            {show ?
            <span className="font-normal font-sans text-white lg:text-2xl">
              Anchor-
            </span>
            : null }
            {show ?
            <a
              href={result.anchor}
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              {result.anchor}
            </a>
            : null }
            <br />
            <br />
            {/* <span className="font-normal font-sans text-white lg:text-2xl">Spotify-</span><a href={result.spotify} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.spotify}</a><br /><br /> */}
            {/* <span className="font-normal font-sans text-white lg:text-2xl">
              ApplePodcast-
            </span>
            <a
              href={result.apple}
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              {result.apple}
            </a>
            <br />
            <br /> */}
            {show ?
            <span className="font-normal font-sans text-white lg:text-2xl">
              CastBox-
            </span>
            : null }
            {show ?
            <a
              href={result.castbox}
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              {result.castbox}
            </a>
            : null}
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
    // <>
    // {router.isReady ?
    // <>
    // <Head>
    //   <title>{result.name}</title>
    //   <meta property="og:type" content="website" />
    //   <meta property="og:site_name" content="Podcast SaghiOMey Hosted By Milad" />
    //   <meta property="og:title" key="og:title" content={result.name} />
    //   <meta name="description" content={result.describtion} />
    //   <meta name="keywords" content={`${result.name}, ${result.describtion}`} />
    //     <meta
    //       property="og:description"
    //       key="og:description"
    //       content={result.describtion}
    //     />
    //     <meta property="og:image" key="og:image" itemprop="image" content={result.img} />
    //     <meta property="og:image:secure_url" content={result.img} />
    //     <meta property="og:image:type" content="image/jpeg" />
    //     <meta property="og:image:width" content="400" />
    //     <meta property="og:image:height" content="300" />
    //     <meta property="og:image:alt" content={result.name}  />
    // </Head>
    //   <div className="relative">
    //     <Image className="bg-cover h-96 md:h-auto xl:w-full" src={sky} alt="sky" />
    //     <div className="absolute grid justify-items-center md:justify-items-start xl:top-3/4 w-full text-white">
    //       <img
    //         src={result.img}
    //         alt="logo"
    //         className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
    //       />
    //       <p className="-mt-56 xl:-mt-96 lg:-mt-96 md:-mt-72 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-4xl lg:text-2xl md:text-xl font-bold">
    //         {result.name}
    //       </p>
    //       <div className="justify-self-center -mt-48 w-72 md:-mt-64 md:ml-56 md:h-60 md:w-1/2 lg:-mt-80 lg:ml-80 lg:w-3/5 lg:h-72 xl:ml-96 aspect-video">
    //         <iframe
    //           className="w-full h-36 md:h-60 lg:h-72"
    //           src={result.video}
    //           title="YouTube video player"
    //           frameborder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowfullscreen
    //         ></iframe>
    //       </div>
    //     </div>
    //     <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
    //       <div className="mx-auto text-center md:text-justify max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
    //         <span className="font-normal font-sans text-white lg:text-2xl">
    //           {result.describtion}.
    //         </span>
    //         <br />
    //         <br />
    //         <span className="font-normal font-sans text-white lg:text-2xl">
    //           Listen on
    //         </span>
    //         <br />
    //         <br />
    //         <span className="font-normal font-sans text-white lg:text-2xl">
    //           Anchor-
    //         </span>
    //         <a
    //           href={result.anchor}
    //           className="font-normal font-sans text-yellow-500 lg:text-2xl"
    //         >
    //           {result.anchor}
    //         </a>
    //         <br />
    //         <br />
    //         {/* <span className="font-normal font-sans text-white lg:text-2xl">Spotify-</span><a href={result.spotify} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.spotify}</a><br /><br /> */}
    //         {/* <span className="font-normal font-sans text-white lg:text-2xl">
    //           ApplePodcast-
    //         </span>
    //         <a
    //           href={result.apple}
    //           className="font-normal font-sans text-yellow-500 lg:text-2xl"
    //         >
    //           {result.apple}
    //         </a>
    //         <br />
    //         <br /> */}
    //         <span className="font-normal font-sans text-white lg:text-2xl">
    //           CastBox-
    //         </span>
    //         <a
    //           href={result.castbox}
    //           className="font-normal font-sans text-yellow-500 lg:text-2xl"
    //         >
    //           {result.castbox}
    //         </a>
    //         <br />
    //         <br />
    //         <span className="font-normal font-sans text-white lg:text-2xl">
    //           Follow us on Social Media for the latest show updates
    //         </span>
    //         <br />
    //         <br />
    //         {/* <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Twitter</a><br /><br /> */}
    //         <a
    //           href="https://www.instagram.com/milad_podcast/"
    //           className="font-normal font-sans text-yellow-500 lg:text-2xl"
    //         >
    //           Instagram
    //         </a>
    //         <br />
    //         <br />
    //         <a
    //           href="https://www.facebook.com/profile.php?id=100089930657614"
    //           className="font-normal font-sans text-yellow-500 lg:text-2xl"
    //         >
    //           Facebook
    //         </a>
    //         <br />
    //         <br />
    //         <a
    //           href="https://saghiomey.netlify.app"
    //           className="font-normal font-sans text-yellow-500 lg:text-2xl"
    //         >
    //           SaghiOMey
    //         </a>
    //         <br />
    //         <br />
    //         <a
    //           href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ"
    //           className="font-normal font-sans text-yellow-500 lg:text-2xl"
    //         >
    //           YouTube
    //         </a>
    //         <br />
    //         <br />
    //         <Footer lastepisode={lastepisode} />
    //       </div>
    //     </div>
    //   </div>  
    //  </> 
    //   : false}
    // </>
  );
}

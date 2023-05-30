/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import sky from "../../assests/sky.jpg";
import Footer from "../../components/Footer";
import Image from 'next/image'
import Head from "next/head";


export default function IMG(props) {
  const router = useRouter();
  const lastepisode = props.episodes.slice(-5).reverse();
  const result = props.reviews.find(
    (review) => review.href === router.asPath.replace("/NFT/", "")
  );
  console.log(result);
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
    <div className="relative">
        <Image className="bg-cover h-96 md:h-auto xl:w-full" src={sky} alt="sky" />
        <div className="absolute grid justify-items-center md:justify-items-start xl:top-3/4 w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
          />
          <span className="-mt-56 xl:-mt-96 lg:-mt-96 md:-mt-72 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-4xl lg:text-2xl md:text-xl font-bold">
            {result.name}
          </span>
          <span className="-mt-48 xl:-mt-80 lg:-mt-80 md:-mt-64 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center font-normal font-sans text-white lg:text-2xl">
              {result.describtion}.
          </span>
          
          <div className="-mt-24 xl:-mt-52 lg:-mt-52 md:-mt-44 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center flex">
            <span className="font-normal font-sans text-white lg:text-2xl">
              Available On:
            </span>&nbsp;
            <a
              href={result.link}
              className="text-yellow-500 mr-1 lg:mt-0 md:mt-0 lg:mr-2 md:mr-2 hover:text-white fill-current"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12s12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081l3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528c-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199a.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962c-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132c-.026.226.017.459.125.67c.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992c.156-.274.308-.566.43-.86c.024-.052.043-.107.065-.16c.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787c0-.108-.004-.221-.014-.327c-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312a6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972a5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197a4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05l.192.054l.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202a.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017c.034.024.084.062.147.11c.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691c.065.074.127.146.192.226c.062.079.132.156.19.232c.079.104.16.212.235.324c.033.053.074.108.105.161c.096.142.178.288.257.435c.034.067.067.141.096.213c.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254c-.075.17-.161.343-.264.502c-.034.06-.075.122-.113.182c-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209c-.081.098-.16.19-.245.278c-.048.058-.1.118-.156.17c-.052.06-.108.113-.156.161c-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298c.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z" />
              </svg>
            </a>
          </div>

          <h3 className="-mt-16 xl:mt-45 lg:-mt-24 md:-mt-20 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center flex justify-center text-sm lg:text-2xl font-medium leading-7 text-gray-200">
            <span className="font-semibold text-gray-500">
            Creator:
            </span>
            &nbsp; {result.creator}
          </h3>

          <ul className="-mt-8 xl:mt-30 lg:-mt-18 md:-mt-12 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center flex justify-between text-xs lg:text-2xl font-normal leading-4 text-gray-200">
            <li>
            <span className="font-semibold text-gray-500">
              Current price:
            </span>
            &nbsp;{result.price}
            </li>
            <li>
            <span className="font-semibold text-gray-500">
              Expire date:
            </span>
            &nbsp;{result.expire}
            </li>
          </ul>
        </div>
        <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <div className="mx-auto text-center md:text-justify max-w-2xl py-4 px-6 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <br />
            <br />
            <span className="font-normal font-sans text-white lg:text-2xl">
              Follow us on Social Media for the latest show updates
            </span>
            <br />
            <br />
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
              href="https://news.google.com/s/CBIw6YXAwrEB?sceid=US:en&sceid=US:en&r=0&oc=1"
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              GoogleNews
            </a>
            <br />
            <br />
            <a
              href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ"
              className="font-normal font-sans text-yellow-500 lg:text-2xl"
            >
              YouTube
            </a>
            <Footer lastepisode={lastepisode} />
          </div>
        </div>
    </div> 
     </> 
      : false}
    </>
  );
}

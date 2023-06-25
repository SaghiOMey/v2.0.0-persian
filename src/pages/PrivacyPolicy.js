import Index from "./index";
import Footer from "../components/Footer";
import nightsky from "../assests/nightsky.jpg";
import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";

export default function About(props) {
  const lastepisode = props.episodes.slice(-5).reverse();
  return (
    <>
      <Index />
      <Head>
        <title>Privacy</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">Privacy</span>
          <span className="text-sm md:text-xl md:mt-1 font-sans font-bold">Last Updated: June 25, 2023</span>
        </div>
        <div className="absolute text-center -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="lg:mb-56 mt-12 lg:ml-20 leading-8 text-gray-200">
            <span className="text-xl md:text-2xl text-gray-400 font-sans font-bold">
            This privacy notice for <span className="text-xl md:text-2xl font-sans font-bold text-white">SaghiOMey</span> (doing business as <span className="text-xl md:text-2xl font-sans font-bold text-white">SM</span>) (“Company,” “we,” “us,” or “our“), describes how and why we might collect, store, use, and/or share (“process“) your information when you use our services (“Services“), such as when you:<br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">1.</span> Visit our website at <span className="text-xl md:text-2xl font-sans font-bold text-white">https://saghiomey.netlify.app</span>, or any website of ours that links to this privacy notice.<br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">2.</span> Engage with us in other related ways ― including any sales, marketing, or events.<br /><br /><br />  
            <span className="text-xl md:text-2xl font-sans font-bold text-white">Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <Link href="https://saghiomey.netlify.app/Contact" className="text-blue-900">Contact Us</Link>.<br/><br/><br/>
            This privacy policy was created by <span className="text-xl md:text-2xl font-sans font-bold text-white">MohammadReza Khorrami(Milad).</span><br /><br /><br />
            <span className="text-2xl md:text-4xl font-sans font-bold text-white">SUMMARY OF KEY POINTS</span><br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.</span><br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with <span className="text-xl md:text-2xl font-sans font-bold text-white">SaghiOMey</span> and the Services, the choices you make, and the products and features you use.<br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">Do we process any sensitive personal information?</span> We do not process sensitive personal information.<br /><br /><br /> 
            <span className="text-xl md:text-2xl font-sans font-bold text-white">Do you receive any information from third parties?</span> We may receive information from public databases, marketing partners, social media platforms, and other outside sources.<br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">How do you process my information?</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.<br /><br /><br /> 
            <span className="text-xl md:text-2xl font-sans font-bold text-white">In what situations and with which types of parties do we share personal information?</span> We may share information in specific situations and with specific categories of third parties.<br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">How do we keep your information safe?</span> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.<br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">What are your rights?</span> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.<br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">How do I exercise my rights?</span> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.<br /><br /><br />
            Want to learn more about what <span className="text-xl md:text-2xl font-sans font-bold text-white">SaghiOMey</span> does with any information we collect? Review the notice in full below.<br /><br /><br />
            <span className="text-2xl md:text-4xl font-sans font-bold text-white">TABLE OF CONTENTS</span><br /><br /><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">1. WHAT INFORMATION DO WE COLLECT?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">2. HOW DO WE PROCESS YOUR INFORMATION?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">9. HOW LONG DO WE KEEP YOUR INFORMATION?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">10. HOW DO WE KEEP YOUR INFORMATION SAFE?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">11. DO WE COLLECT INFORMATION FROM MINORS?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">12. WHAT ARE YOUR PRIVACY RIGHTS?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">13. CONTROLS FOR DO-NOT-TRACK FEATURES</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">14. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">15. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">16. DO WE MAKE UPDATES TO THIS NOTICE?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span><br />
            <span className="text-xl md:text-2xl font-sans font-bold text-white">18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span><br />
            
            </span>
          </div>
          <Footer lastepisode = {lastepisode} />
        </div>
      </div>
    </>
  );
}

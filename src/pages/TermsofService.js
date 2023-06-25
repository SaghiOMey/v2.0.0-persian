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
        <title>Terms</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">Terms</span>
          <span className="text-sm md:text-xl font-sans font-bold">Last Updated: June 25, 2023</span>
        </div>
        <div className="absolute text-center -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="lg:mb-56 mt-12 lg:ml-20 leading-8 text-gray-200">
            <span className="text-xl md:text-2xl text-gray-400 font-sans font-bold">
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <span className="text-xl md:text-2xl font-sans font-bold text-white">SaghiOMey</span> (“we,” “us” or “our”), concerning your access to and use of the <span className="text-xl md:text-2xl font-sans font-bold text-white">https://saghiomey.netlify.app</span> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).<br /><br /><br />  
            You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.<br/><br /><br />
            Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason.<br/><br/><br/>
            We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions, and you waive any right to receive specific notice of each such change.<br/><br/><br/>
            It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and Conditions are posted.<br/><br/><br/>
            The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.<br/><br/><br/>
            Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.<br/><br/><br/>
            These terms and conditions were created by <span className="text-xl md:text-2xl font-sans font-bold text-white">MohammadReza Khorrami(Milad)</span>.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">Option 1:</span> The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to register for the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">Option 2:</span> All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms and Conditions prior to you using the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">INTELLECTUAL PROPERTY RIGHTS</span><br/><br/><br/>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.<br/><br/><br/>
            The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.<br/><br/><br/>
            Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">USER REPRESENTATIONS</span><br/><br/><br/>
            By using the Site, you represent and warrant that:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(1)</span> all registration information you submit will be true, accurate, current, and complete;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(2)</span> you will maintain the accuracy of such information and promptly update such registration information as necessary;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(3)</span> you have the legal capacity and you agree to comply with these Terms and Conditions;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(4)</span> you are not under the age of 18;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(5)</span> if a minor, you have received parental permission to use the Site;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(6)</span> you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(7)</span> you will not use the Site for any illegal or unauthorized purpose;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(8)</span> your use of the Site will not violate any applicable law or regulation.<br/><br/><br/>
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">USER REGISTRATION</span><br/><br/><br/>
            You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">PROHIBITED ACTIVITIES</span><br/><br/><br/>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.<br/><br/><br/>
            As a user of the Site, you agree not to:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">1.</span>
            systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">2.</span>
            make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">3.</span>
            use a buying agent or purchasing agent to make purchases on the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">4.</span>
            use the Site to advertise or offer to sell goods and services.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">5.</span>
            circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">6.</span>
            engage in unauthorized framing of or linking to the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">7.</span>
            trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">8.</span>
            make improper use of our support services or submit false reports of abuse or misconduct.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">9.</span>
            engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">10.</span>
            interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">11.</span>
            attempt to impersonate another user or person or use the username of another user.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">12.</span>
            sell or otherwise transfer your profile.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">13.</span>
            use any information obtained from the Site in order to harass, abuse, or harm another person.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">14.</span>
            use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">15.</span>
            decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">16.</span>
            attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">17.</span>
            harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">18.</span>
            delete the copyright or other proprietary rights notice from any Content.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">19.</span>
            copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">20.</span>
            upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">21.</span>
            upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">22.</span>
            except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">23.</span>
            disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">24.</span>
            use the Site in a manner inconsistent with any applicable laws or regulations.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">USER GENERATED CONTRIBUTIONS</span><br/>
            The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, “Contributions”).<br/><br/><br/>
            Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">1.</span>
            the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">2.</span>
            you are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms and Conditions.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">3.</span>
            you have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms and Conditions.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">4.</span>
            your Contributions are not false, inaccurate, or misleading.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">5.</span>
            your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">6.</span>
            your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">7.</span>
            your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">8.</span>
            your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">9.</span>
            your Contributions do not violate any applicable law, regulation, or rule.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">10.</span>
            your Contributions do not violate the privacy or publicity rights of any third party.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">11.</span>
            your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">12.</span>
            your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health or well-being of minors;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">13.</span>
            your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">14.</span>
            your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms and Conditions, or any applicable law or regulation.<br/><br/><br/>
            Any use of the Site in violation of the foregoing violates these Terms and Conditions and may result in, among other things, termination or suspension of your rights to use the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">CONTRIBUTION LICENSE</span><br/>
            By posting your Contributions to any part of the Site, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.<br/><br/><br/>
            This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.<br/><br/><br/>
            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site.<br/><br/><br/>
            You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.<br/><br/><br/>
            We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">GUIDELINES FOR REVIEWS</span><br/>
            We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">1.</span>
            you should have firsthand experience with the person/entity being reviewed;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">2.</span>
            your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">3.</span>
            your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">4.</span>
            your reviews should not contain references to illegal activity;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">5.</span>
            you should not be affiliated with competitors if posting negative reviews;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">6.</span>
            you should not make any conclusions as to the legality of conduct;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">7.</span>
            you may not post any false or misleading statements;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">8.</span>
            you may not organize a campaign encouraging others to post reviews, whether positive or negative.<br/><br/><br/>
            We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners.<br/><br/><br/>
            We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">SOCIAL MEDIA</span><br/>
            As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account.<br/><br/><br/>
            You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.<br/><br/><br/>
            By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the “Social Network Content”) so that it is available on and through the Site via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account.<br/><br/><br/>
            Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site.<br/><br/><br/>
            Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site. You will have the ability to disable the connection between your account on the Site and your Third-Party Accounts at any time.<br/><br/><br/>
            PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS.<br/><br/><br/>
            We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content.<br/><br/><br/>
            You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site.<br/><br/><br/>
            You can deactivate the connection between the Site and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">SUBMISSIONS</span><br/>
            You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (“Submissions”) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.<br/><br/><br/>
            You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">THIRD-PARTY WEBSITES AND CONTENT</span><br/>
            The Site may contain (or you may be sent via the Site) links to other websites (“Third-Party Websites”) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (“Third-Party Content”).<br/><br/><br/>
            Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.<br/><br/><br/>
            Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms and Conditions no longer govern.<br/><br/><br/>
            You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party.<br/><br/><br/>
            You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">ADVERTISERS</span><br/>
            We allow advertisers to display their advertisements and other information in certain areas of the Site, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the Site and any services provided on the Site or products sold through those advertisements.<br/><br/><br/>
            Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the Site, including, but not limited to, intellectual property rights, publicity rights, and contractual rights.<br/><br/><br/>
            As an advertiser, you agree that such advertisements are subject to our Digital Millennium Copyright Act (“DMCA”) Notice and Policy provisions as described below, and you understand and agree there will be no refund or other compensation for DMCA takedown-related issues We simply provide the space to place such advertisements, and we have no other relationship with advertisers.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">SITE MANAGEMENT</span><br/>
            We reserve the right, but not the obligation, to:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(1) </span>
            monitor the Site for violations of these Terms and Conditions;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(2) </span>
            take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms and Conditions, including without limitation, reporting such user to law enforcement authorities;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(3) </span>
            in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(4) </span>
            in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(5) </span>
            otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(6) </span>
            All users on Home page & Voice section & Audio Interviews must sign in, Because the comments section is stored in the database Then it will be reviewed and published in the comments section also all of comments must be english language.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(7) </span>
            All episodes( Audio Interviews & Videos Interviews) before #ep61 are persian episodes.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">PRIVACY POLICY</span><br/>
            We care about data privacy and security. Please review our Privacy Policy <Link href="https://saghiomey.netlify.app/PrivacyPolicy" className="text-blue-900">CLICK HERE</Link> By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms and Conditions. Please be advised the Site is hosted in the United States.<br/><br/><br/>
            If you access the Site from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.<br/><br/><br/>
            Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Site as quickly as is reasonably practical.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY</span><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">Notifications</span><br/>
            We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify our Designated Copyright Agent using the contact information provided below (a “Notification”).<br/><br/><br/>
            A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.<br/><br/><br/>
            All Notifications should meet the requirements of DMCA 17 U.S.C. § 512(c)(3) and include the following information:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(1) </span>
            A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(2) </span>
            identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works on the Site are covered by the Notification, a representative list of such works on the Site;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(3) </span>
            identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(4) </span>
            information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email address at which the complaining party may be contacted;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(5) </span>
            a statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(6) </span>
            a statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed upon.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">Counter Notification</span><br/>
            If you believe your own copyrighted material has been removed from the Site as a result of a mistake or misidentification, you may submit a written counter notification to us using the contact information provided below (a “Counter Notification”).<br/><br/><br/>
            To be an effective Counter Notification under the DMCA, your Counter Notification must include substantially the following:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(1) </span>
            identification of the material that has been removed or disabled and the location at which the material appeared before it was removed or disabled;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(2) </span>
            a statement that you consent to the jurisdiction of the Federal District Court in which your address is located, or if your address is outside the United States, for any judicial district in which we are located;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(3) </span>
            a statement that you will accept service of process from the party that filed the Notification or the party’s agent;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(4) </span>
            your name, address, and telephone number;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(5) </span>
            a statement under penalty of perjury that you have a good faith belief that the material in question was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled;<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">(6) </span>
            your physical or electronic signature.<br/><br/><br/>
            If you send us a valid, written Counter Notification meeting the requirements described above, we will restore your removed or disabled material, unless we first receive notice from the party filing the Notification informing us that such party has filed a court action to restrain you from engaging in infringing activity related to the material in question.<br/><br/><br/>
            Please note that if you materially misrepresent that the disabled or removed content was removed by mistake or misidentification, you may be liable for damages, including costs and attorney’s fees. Filing a false Counter Notification constitutes perjury.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">COPYRIGHT INFRINGEMENTS</span><br/>
            We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification.<br/><br/><br/>
            Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">TERM AND TERMINATION</span><br/>
            These Terms and Conditions shall remain in full force and effect while you use the Site.WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS AND CONDITIONS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE [YOUR ACCOUNT AND] ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.<br/><br/><br/>
            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.<br/><br/><br/>
            In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">MODIFICATIONS AND INTERRUPTIONS</span><br/>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.<br/><br/><br/>
            We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.<br/><br/><br/>
            We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.<br/><br/><br/>
            We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site.<br/><br/><br/>
            Nothing in these Terms and Conditions will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">INDEMNIFICATION</span><br/>
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) [your Contributions]; (2) use of the Site; (3) breach of these Terms and Conditions; (4) any breach of your representations and warranties set forth in these Terms and Conditions; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site.<br/><br/><br/>
            Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">USER DATA</span><br/>
            We will maintain certain data that you transmit to the Site for the purpose of managing the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.<br/><br/><br/>
            You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span><br/>
            Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.<br/><br/><br/>
            YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.<br/><br/><br/>
            You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">CALIFORNIA USERS AND RESIDENTS</span><br/>
            If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">MISCELLANEOUS</span><br/>
            These Terms and Conditions and any policies or operating rules posted by us on the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms and Conditions shall not operate as a waiver of such right or provision.<br/><br/><br/>
            These Terms and Conditions operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.<br/><br/><br/>
            If any provision or part of a provision of these Terms and Conditions is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and Conditions and does not affect the validity and enforceability of any remaining provisions.<br/><br/><br/>
            There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms and Conditions or use of the Site. You agree that these Terms and Conditions will not be construed against us by virtue of having drafted them.<br/><br/><br/>
            You hereby waive any and all defenses you may have based on the electronic form of these Terms and Conditions and the lack of signing by the parties hereto to execute these Terms and Conditions.<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white">CONTACT US</span><br/>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:<br/><br/><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white"><Link href="https://saghiomey.netlify.app" className="text-blue-900">SaghiOMey</Link></span><br/>
            <span className="text-xl md:text-2xl font-sans font-bold text-white"><Link href="https://saghiomey.netlify.app/Contact" className="text-blue-900">Contact Us</Link></span><br/>
            </span>
          </div>
          <Footer lastepisode = {lastepisode} />
        </div>
      </div>
    </>
  );
}

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";


export default function Store() {

    return(
        <>
        <div className="w-full h-5/6 text-center pt-56 bg-cover" style={{backgroundImage: "linear-gradient(to bottom, rgba(2, 0, 0, 0.52), rgba(255, 255, 255, 0.73)), url('https://images.unsplash.com/photo-1462045504115-6c1d931f07d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2NzgzOTM4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"}}>
        <p className="font-black text-5xl">Store Specification</p>
        <p className="mt-8 text-gray-700">Organize is a system to kepp your desk tidy and photo-worthy all day long. Procrastinate your work while you<br /> meticulously arrange items into dedicated trays.</p>
        </div>
        <div class="mt-8 rounded-lg grid grid-cols-1 gap-16 md:grid-cols-2 justify-items-center">
          <div><Link href="/full-nelson"><p className="font-bold text-indigo-700">Full Nelson</p></Link><p className="mt-4">Made from natural materials. Grain and color vary with each team.</p></div>
          <div><Link href="/my-way"><p className="font-bold text-indigo-700">My Way</p></Link><p className="mt-4">Solid walnut base with rare earth magnets and polycarbonate add-ons.</p></div>
          <div><Link href="/re-arranged"><p className="font-bold text-indigo-700">Re-Arranged</p></Link><p className="mt-4">Designed by My Way, Includes Small Tray, Large Tray, Pen Tray ,Inc.</p></div>
          <div><Link href="/counterfeit"><p className="font-bold text-indigo-700">Counterfeit</p></Link><p className="mt-4">Everything you need, nothing you don't, made real close need you are.</p></div>
        </div> 
        </>
    );

}
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import { getFirestore } from "firebase/firestore";
import Navigation from "@/components/Navigation";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useState, Fragment, useEffect, useRef } from "react";
import { Dialog, RadioGroup, Transition, Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useFormCheckout } from "../components/useFromCheckout";
import styles from "../components/Contact.module.css";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Checkout(props) {
    const [orders, setOrders] = useState(null);
    const [checkouts, setCheckouts] = useState(null);
    const date = new Date((new Date()).toJSON()).toDateString().slice(4, 10).concat(',').concat(new Date((new Date()).toJSON()).toDateString().slice(10, 15))
    const firstcharemail = props.user ? props.user.email.slice(0, 1) : null
    const regex = /[@]/g;
    const aftercharat = props.user ? props.user.email.slice(props.user.email.search(regex)) : null
    const firstcharphone = orders ? orders.Orders.find((item) => item.phone).phone.toString().slice(0, 1) : null
    const aftercharphone = orders ? orders.Orders.find((item) => item.phone).phone.toString().slice(-2) : null

    useEffect(() => {
        if(props.user){
          getDoc(doc(getFirestore(), "orders", props.user.displayName)).then(docSnap => {
            if (docSnap.exists()) {
              setOrders(docSnap.data())
            } else {
              // console.log("No such document!");
            }
            })
            getDoc(doc(getFirestore(), "checkouts", props.user.displayName)).then(docSnap => {
              if (docSnap.exists()) {
                setCheckouts(docSnap.data())
              } else {
                // console.log("No such document!");
              }
            })}  
        }, [props.user]);
      // console.log(orders.Orders.find((item) => item.phone).phone);
    return (
        <>
        {orders && checkouts && props.user ? 
        <div className="px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-800">Order Details</h2>
        {checkouts.Products.map((checkout) => (
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li key={checkout.id} className="flex pt-6 pb-24">
              <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="relative md:row-span-1">
                  <img
                    src={checkout.catimageSrc}
                    alt={checkout.imageAlt}
                    className="object-cover object-center w-full h-full rounded-lg md:w-4/5"
                  />
                </div>
                <div className="relative mt-16 md:mt-0 md:row-span-1">
                  <div>
                    <div className="text-xl font-bold text-gray-900">
                      <h3>{checkout.name}</h3>
                      <p className="text-lg font-semibold text-gray-900">${checkout.price}</p>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">{checkout.size}</p>
                    <p className="mt-1 text-sm text-gray-500">{checkout.color}</p>
                  </div>
                  {orders ?
                    <>
                      {orders.Orders.map((order) => (
                        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                          <div className="relative md:row-span-1">
                            <p className="mt-12 text-base font-bold text-gray-900">Delivery address</p>
                            <p className="mt-3 text-sm text-gray-500">{props.user.displayName}<br /> {order.postalcode} {order.apartment}<br /> {order.country}, ON {order.city} {order.province}</p>
                          </div>
                          <div className="relative md:row-span-1">
                            <p className="mt-12 text-base font-bold text-gray-900">Shipping updates</p>
                            <p className="mt-3 text-sm text-gray-500">{firstcharemail}...{aftercharat}<br /> {firstcharphone}.........{aftercharphone}<br /><span className="text-base font-bold text-indigo-500"><Link href="/Checkout"> Edit </Link></span></p>
                          </div>
                        </div>
                      ))}
                    </>
                    : ''}
                  <div className="mt-20">
                    <p className="mb-6 text-base font-extrabold text-gray-800">Preparing to ship on {date}</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-indigo-600 h-2.5 w-4/6 lg:w-96 rounded-full"></div>
                      <div className="grid grid-cols-4 mt-6 text-xs font-bold gap-14 md:gap-16 md:text-sm">
                        <p className="text-indigo-500">Order&nbsp;placed</p>
                        <p className="text-indigo-500">Processing</p>
                        <p className="text-indigo-500">Shipped</p>
                        <p className="text-gray-500 justify-self-end">Delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}
      <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
          {orders ?
            <>
              {orders.Orders.map((order) => (
                <>
                  <div className="relative grid grid-cols-1 gap-1 ml-0 mt-7 md:row-span-1 md:ml-6 md:grid-cols-2">
                    <div className="relative md:row-span-1">
                      <p className="mt-12 text-base font-bold text-gray-900">Billing address</p>
                      <p className="mt-3 text-sm text-gray-500">{props.user.displayName} <br /> {order.postalcode} {order.apartment}<br /> {order.country}, ON {order.city} {order.province}</p>
                    </div>
                    {/* <div className="relative md:row-span-1">
                      <p className="mt-12 text-base font-bold text-gray-900">Payment information</p>
                      <p className="mt-3 text-sm text-gray-500">Ending with {cardnumber}<br />Expires {firstexpiredate} / {lastexpiredate}</p>
                    </div> */}
                  </div>
                  <div className="relative md:row-span-1">
                    <div className="flex justify-between pb-4 mt-20 text-base font-medium border-b border-gray-300">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-bold">${order.subtotal}</p>
                    </div>
                    <div className="flex justify-between pb-4 mt-4 text-base font-medium border-b border-gray-300">
                      <p className="text-gray-600">Shipping</p>
                      <p className="font-bold">${order.shipping}</p>
                    </div>
                    <div className="flex justify-between pb-4 mt-4 text-base font-medium border-b border-gray-300">
                      <p className="text-gray-600">Tax</p>
                      <p className="font-bold">${order.taxes}</p>
                    </div>
                    <div className="flex justify-between pb-4 mt-4">
                      <p className="font-bold text-gray-600">Oreder total</p>
                      <p className="font-bold text-indigo-500">${order.totalamount}</p>
                    </div>
                  </div>
                </>
              ))}
            </>
            : ''}
      </div>  
      </div>
      :
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
      </div>
      }
        </>
    )

}
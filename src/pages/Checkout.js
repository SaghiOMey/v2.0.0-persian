/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import { getFirestore } from "firebase/firestore";
import Navigation from "@/components/Navigation";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useState, Fragment, useEffect } from "react";
import { Dialog, RadioGroup, Transition, Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Checkout(props) {
    const [checkouts, setCheckouts] = useState(null);
    const [exclass, setexclass] = useState("p-4 mt-1 h-32 border border-gray-300 block w-full shadow-sm sm:text-sm rounded-md");
    const [stclass, setstclass] = useState("p-4 mt-1 h-32 border-2 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md");
    const [stfill, setstfill] = useState("#2f2ff7");
    const [exfill, setexfill] = useState("gray");
    const [shipping, setshipping] = useState(5);
    const [quantity, setQuantity] = useState(0);
    const date = new Date((new Date()).toJSON()).toDateString().slice(4, 10).concat(',').concat(new Date((new Date()).toJSON()).toDateString().slice(10, 15))
    // const shipping = 5;
    const taxes = 5.25;
    let subtotal = 0;
    const reducer = (accumulator, curr) => accumulator + curr;
    const Sum = checkouts !== null ? checkouts.Products.map((checkout) => checkout.price * checkout.quantity) : null
    subtotal = Sum !== null ? Sum.reduce(reducer) : null
    const totalamount = subtotal + shipping + taxes;
    const fib = (n) => {
      let options = [];
      for (var i = 1; i <= n; i++) {
        options.push(i);
      }
      return options
    }

    useEffect(() => {
      // async function fetchData() {
      //   const db = getFirestore();
      //   const docId = [];
      //   const querySnapshot = await getDocs(collection(db, "products"));
      //   querySnapshot.forEach((doc) => {
      //   docId.push(doc.data())
      //   });
      //   setProduct(docId)
      // }
      //   fetchData();
      
          getDoc(doc(getFirestore(), "checkouts", props.user.displayName)).then(docSnap => {
            if (docSnap.exists()) {
              setCheckouts(docSnap.data())
            } else {
              // console.log("No such document!");
            }
            });
        }, []);

        function STClass() {
          setexclass("p-4 mt-1 h-32 border border-gray-300 block w-full shadow-sm sm:text-sm rounded-md")
          setstclass("p-4 mt-1 h-32 border-2 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md")
          setstfill("#2f2ff7")
          setexfill("gray")
          setshipping(5)
        }
      
        function EXClass() {
          setexclass("p-4 mt-1 h-32 border-2 border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md")
          setstclass("p-4 mt-1 h-32 border border-gray-300 block w-full shadow-sm sm:text-sm rounded-md")
          setstfill("gray")
          setexfill("#2f2ff7")
          setshipping(16)
        }      

        function settimeout(){
            setTimeout(() => {
              setNotify(false)
            },3000)
          }

          const onSubmitForm = (e) => {
            e.preventDefault();
          };

          const onUpdateField = (e) => {
            const field = e.target.name;
            const nextFormState = {
              ...form,
              [field]: e.target.value,
            };
            setForm(nextFormState);
          };
        
          async function deletecheckout(name, price, quantity, category, color, size, imageAlt, catimageSrc){
            const db = getFirestore();
            const checkouts = doc(db, "checkouts", props.user.displayName)
            await updateDoc(checkouts, {
              "Products" : arrayRemove(
                {
                  username: props.user.displayName,
                  useremail: props.user.email,
                  name: name,
                  price: price,
                  quantity: quantity,
                  category: category,
                  color: color,
                  size: size,
                  imageAlt: imageAlt,
                  catimageSrc: catimageSrc
                  }
              )
            }, { merge: true });
          }

          async function updatecheckout(name, price, quantity, category, color, size, imageAlt, catimageSrc, num){
            const db = getFirestore();
            const checkouts = doc(db, "checkouts", props.user.displayName)
            await updateDoc(checkouts, {
              "Products" : arrayUnion(
                {
                  username: props.user.displayName,
                  useremail: props.user.email,
                  name: name,
                  price: price,
                  quantity: num,
                  category: category,
                  color: color,
                  size: size,
                  imageAlt: imageAlt,
                  catimageSrc: catimageSrc
                  }
              )
            }, { merge: true });
            await updateDoc(checkouts, {
              "Products" : arrayRemove(
                {
                  username: props.user.displayName,
                  useremail: props.user.email,
                  name: name,
                  price: price,
                  quantity: quantity,
                  category: category,
                  color: color,
                  size: size,
                  imageAlt: imageAlt,
                  catimageSrc: catimageSrc
                  }
              )
            }, { merge: true });
          }

    // console.log(quantity);
    return (
        <>
        {checkouts && props.user ? 
        <div className="px-4 mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8">
        <>
          <p className="mb-6 text-base font-extrabold text-gray-800">Preparing to ship on {date}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={checkouts ? "bg-indigo-600 h-2.5 w-2/5 lg:w-2/6 rounded-full" : "h-2.5 w-2/5 lg:w-2/6 rounded-full"}></div>
            <div className="grid grid-cols-4 mt-6 text-xs font-bold gap-14 md:gap-60 md:text-sm">
              <p className={checkouts ? "text-indigo-500" : "text-gray-500"}>Order&nbsp;placed</p>
              <p className={checkouts ? "text-indigo-500" : "text-gray-500"}>Processing</p>
              <p className="text-gray-500">Shipped</p>
              <p className="text-gray-500 justify-self-end">Delivered</p>
            </div>
          </div>
        </>
        <form className="max-w-2xl mx-auto py-9 sm:py-16 lg:mt-50 lg:max-w-none">
          <div class="mt-16 rounded-lg grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="relative md:row-span-3">
              <h2 className="text-xl font-extrabold text-gray-800">Contact information</h2>
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block mt-6 text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  disabled
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  value={props.user.email}
                  className="block w-full mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm cursor-not-allowed sm:text-sm"
                />
                <hr className="mt-10" />
                <h2 className="mt-10 text-xl font-extrabold text-gray-800">Shipping information</h2>
                <div className="grid grid-cols-6 gap-6 mt-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      disabled
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      required
                      value={props.user.displayName}
                      className="block w-full mt-1 bg-gray-200 border-gray-300 rounded-md shadow-sm cursor-not-allowed sm:text-sm"
                    />
                  </div>

                </div>
                <label htmlFor="apartment" className="block mt-6 text-sm font-medium text-gray-700">
                  Apartment, suite, etc.
                </label>
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  autoComplete="apartment"
                //   onChange={this.handleChange}
                //   className={this.state.errorMessage.apartment || this.state.errorMessage.apartment ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-400 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
                />
                <div className="grid grid-cols-6 gap-6 mt-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                    //   onChange={this.handleChange}
                    //   className={this.state.errorMessage.city || this.state.errorMessage.city ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-400 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      autoComplete="country"
                    //   onChange={this.handleChange}
                    //   className={this.state.errorMessage.country || this.state.errorMessage.country ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-400 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6 mt-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="province"
                      id="province"
                      autoComplete="province"
                    //   onChange={this.handleChange}
                    //   className={this.state.errorMessage.province || this.state.errorMessage.province ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-400 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <input
                      type="text"
                      name="postalcode"
                      id="postalcode"
                      autoComplete="postalcode"
                    //   onChange={this.handleChange}
                    //   className={this.state.errorMessage.postalcode || this.state.errorMessage.postalcode ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-400 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
                    />
                  </div>
                </div>
                <label htmlFor="phone" className="block mt-6 text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                //   onChange={this.handleChange}
                //   className={this.state.errorMessage.phone || this.state.errorMessage.phone ? "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-red-400 rounded-md" : "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}
                />
                <hr className="mt-10" />
                <h2 className="mt-10 text-xl font-extrabold text-gray-800">Delivery method</h2>
                <div className="flex grid grid-cols-6 gap-6 mt-6">
                  <div className="col-span-6 cursor-pointer sm:col-span-3">
                    <div className={stclass} onClick={() => STClass()}>
                      <div className="flex justify-between">
                        <p className="font-bold text-gray-800">Standard</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={stfill} width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" /></svg>
                      </div>
                      <p className="mt-1 font-medium text-gray-500">4-10 business days</p>
                      <p className="mt-8 font-bold text-gray-800">$5</p>
                    </div>
                  </div>
                  <div className="col-span-6 cursor-pointer sm:col-span-3">
                    <div className={exclass} onClick={() => EXClass()}>
                      <div className="flex justify-between">
                        <p className="font-bold text-gray-800">Express</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={exfill} width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" /></svg>
                      </div>
                      <p className="mt-1 font-medium text-gray-500">2-5 business days</p>
                      <p className="mt-8 font-bold text-gray-800">$16</p>
                    </div>
                  </div>
                </div>
                <h2 className="mt-10 text-xl font-extrabold text-gray-800">Payment</h2>
                {checkouts ?
                  <div className="mt-6">
                    {/* <Link to="/order"> */}
                    <button
                      // onClick={() => order(this.props.user.currentUser.currentUser.id, this.state.shipping, this.props.user.currentUser.currentUser.email, this.props.user.currentUser.currentUser.name.slice(0, 5), this.props.user.currentUser.currentUser.name.slice(6, 14), this.state.apartment, this.state.city, this.state.country, this.state.province, this.state.postalcode, this.state.phone, this.state.cardnumber, this.state.namecard, this.state.expiredate, this.state.cvc) && this.minusSubmit(id, this.state.quantity ? this.state.quantity : quantity)}
                      className="flex items-center justify-center w-full px-6 py-3 mt-12 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      {`${'Pay $' + totalamount}`}
                    </button>
                    {/* </Link> */}
                  </div>
                  : ''}
              </div>
            </div>
            <div className="relative md:row-span-1">
              <h2 className="text-xl font-extrabold text-gray-800">Order summary</h2>
              {checkouts ?
                <div className="p-6 mt-4 border border-gray-300 rounded-md">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {checkouts ? 
                      <>
                      {checkouts.Products.map((checkout) => (
                        <li key={checkout.name} className="flex py-6">
                          <div className="flex-shrink-0 overflow-hidden border border-gray-200 rounded-md w-28 h-28">
                            <img
                              src={checkout.catimageSrc}
                              alt={checkout.imageAlt}
                              className="object-cover object-center w-full h-full"
                            />
                          </div>

                          <div className="flex flex-col flex-1 ml-4">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{checkout.name}</h3>
                                <button type="button" onClick={() => deletecheckout(checkout.name, checkout.price, checkout.quantity, checkout.category, checkout.color, checkout.size, checkout.imageAlt, checkout.catimageSrc)}>
                                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" /></svg>
                                </button>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{checkout.color}</p>
                              <p className="mt-1 text-sm text-gray-500">{checkout.size}</p>
                            </div>
                            <div className="flex items-end justify-between flex-1 text-sm">
                              <p className="text-gray-500">${checkout.price}</p>

                              <Menu as="div" className="relative inline-block text-left">
                                <div>
                                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                        {checkout.quantity}
                                    <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >

                                  <Menu.Items className="absolute right-0 w-24 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      {fib(3).map((num) =>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <div
                                              onClick={() => updatecheckout(checkout.name, checkout.price, checkout.quantity, checkout.category, checkout.color, checkout.size, checkout.imageAlt, checkout.catimageSrc, num)}
                                              className={classNames(
                                                active ? 'w-24 bg-gray-200 text-gray-900 cursor-pointer' : 'w-24 text-gray-700 cursor-pointer',
                                                'w-24 block px-4 py-2 text-sm cursor-pointer'
                                              )}
                                            >
                                              {num}
                                            </div>
                                          )}
                                        </Menu.Item>
                                      )}
                                    </div>
                                  </Menu.Items>

                                </Transition>
                              </Menu>
                            </div>
                          </div>
                        </li>
                      ))}
                      </>
                      : '' }
                    </ul>
                  </div>
                  <div className="px-4 py-6 mt-6 border-t border-gray-200 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${subtotal}</p>
                    </div>
                    <div className="flex justify-between mt-6 text-base font-medium text-gray-900">
                      <p>Shipping</p>
                      <p>${shipping}</p>
                    </div>
                    <div className="flex justify-between mt-6 text-base font-medium text-gray-900">
                      <p>Taxes</p>
                      <p>${taxes}</p>
                    </div>
                    <div className="flex justify-between mt-6 text-base font-medium text-gray-900 border-t border-gray-200">
                      <p>Total</p>
                      <p>${totalamount}</p>
                    </div>
                  </div>
                </div>
                :
                <Link className="text-lg font-extrabold text-indigo-500" href="/Shop">
                  Please add the product to your card
                </Link>
              }
            </div>
          </div>
        </form>
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
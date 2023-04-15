/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import { getFirestore } from "firebase/firestore";
import Navigation from "@/components/Navigation";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useState, Fragment, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Product(props) {
    const produc = {
        rating: 3.9,
        reviewCount: 117,
        colors: [
          { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
          { name: 'XXS', inStock: true },
          { name: 'XS', inStock: true },
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: true },
          { name: 'XXL', inStock: true },
          { name: 'XXXL', inStock: false },
        ],
      }
    const [product, setProduct] = useState(null);
    const [open, setOpen] = useState(false)
    const [notify, setNotify] = useState(false)
    const [selectedColor, setSelectedColor] = useState(produc.colors[0])
    const [selectedSize, setSelectedSize] = useState(produc.sizes[2])
    const router = useRouter();
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    const result = product !== null ? product.items.find((item) => item.name === router.asPath.replace("/Product/", "")) : 0
    useEffect(() => {
        const db = getFirestore();
        getDoc(doc(db, "products", "JwpkvxX8BDAXkzJDbheW")).then(docSnap => {
          if (docSnap.exists()) {
            setProduct(docSnap.data())
          } else {
            // console.log("No such document!");
          }
          });
        }, []);

        function settimeout(){
            setTimeout(() => {
              setNotify(false)
            },3000)
          }
        
          async function checkouts(){
            const db = getFirestore();
            const checkouts = doc(db, "checkouts", props.user.displayName)
            await setDoc(checkouts, {
              "ManTops" : arrayUnion(
                {
                  username: props.user.displayName,
                  useremail: props.user.email,
                  name: result.name,
                  price: result.price,
                  quantity: 1,
                  color: selectedColor.name,
                  size: selectedSize.name,
                  imageAlt: result.imageAlt,
                  catimageSrc: result.catimageSrc
                  }
              )
            }, { merge: true });
          }
          
          async function products(){
            const db = getFirestore();
            const pr = product.items.find(item => {return item.name === result.name})
            const products = doc(db, "products", "JwpkvxX8BDAXkzJDbheW")
            await updateDoc(products, {
              "items" : arrayUnion(
                {
                  brand: pr.brand,
                  catimageSrc: pr.catimageSrc,
                  color: pr.color,
                  describtion: pr.describtion,
                  detail: pr.detail,
                  imageAlt: pr.imageAlt,
                  imageSrc: pr.imageSrc,
                  inventory: pr.inventory - 1,
                  message: pr.message,
                  name: pr.name,
                  price: pr.price,
                  rating: pr.rating,
                  reviewCount: pr.reviewCount,
                  shipping: pr.shipping,
                  size: pr.size,
                  subject: pr.subject,
                  title: pr.title
                  }
              )
            }, { merge: true });
            await updateDoc(products, {
              "items" : arrayRemove(
                {
                  brand: pr.brand,
                  catimageSrc: pr.catimageSrc,
                  color: pr.color,
                  describtion: pr.describtion,
                  detail: pr.detail,
                  imageAlt: pr.imageAlt,
                  imageSrc: pr.imageSrc,
                  inventory: pr.inventory,
                  message: pr.message,
                  name: pr.name,
                  price: pr.price,
                  rating: pr.rating,
                  reviewCount: pr.reviewCount,
                  shipping: pr.shipping,
                  size: pr.size,
                  subject: pr.subject,
                  title: pr.title
                  }
              )
            }, { merge: true });
          }  
    // console.log(product);
    return (
        <>
        <Transition.Root show={notify} as={Fragment}>
         <div class="absolute pr-16 pt-4 w-full flex justify-end">
          <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
           <div class="flex flex-row">
            <div class="px-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
            </div>
            <div class="ml-2 mr-6">
             <span class="font-semibold">Successfully Saved To Bag!</span>
             <span class="block text-gray-500">Please check your's bag for continue shopping</span>
            </div>
           <div>
            <button
              type="button"
              className="top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              onClick={() => setNotify(false)}
             >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
            </button>
           </div>
          </div>
         </div>
        </div>
        </Transition.Root>
        <Navigation props={props} />
        {result === null ? "waiting" : 
        <>
        <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-3">
                  <div className="relative md:row-span-3">
                    <img
                      src={result.imageSrc}
                      alt={result.imageAlt}
                      className="object-cover object-center w-full h-screen rounded-lg"
                    />
                  </div>
                  <div className="relative md:row-span-1">
                    <img
                      src={result.imageSrc}
                      alt={result.imageAlt}
                      className="object-cover object-center w-full rounded-lg xl:h-80 lg:h-44 md:h-44"
                    />
                    <img
                      src={result.catimageSrc}
                      alt={result.imageAlt}
                      className="object-cover object-center w-full mt-3 rounded-lg xl:h-80 lg:h-44 md:h-44"
                    />
                  </div>
                  <div className="relative md:row-span-1">
                    <img
                      src={result.catimageSrc}
                      alt={result.imageAlt}
                      className="object-cover object-center w-full h-screen rounded-lg"
                    />
                  </div>
        </div>
        <div className="max-w-2xl py-4 mx-auto lg:max-w-none">
                  <h2 className="text-2xl font-black text-gray-900 lg:text-5xl md:text-4xl">{result.name}</h2>
                  <div class="mt-6 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-3">
                    <div className="relative col-span-2 border-r border-gray-200 w-fit">
                      <span className="text-base text-gray-800 md:text-lg">{result.title}</span>
                      <h2 className="col-span-2 mt-12 text-base font-black text-gray-900 lg:text-lg md:text-lg">Highlights</h2>
                      <div className="relative col-span-2 mt-8">
                        <ul className="ml-4 text-base text-gray-400 list-disc">
                          <li>Hand cut and sewn locally</li>
                          <li>Dyed with our proprietary colors</li>
                          <li>Pre-washed & pre-shrunk</li>
                          <li>Ultra-soft 100% cotton</li>
                        </ul>
                      </div>
                      <h2 className="col-span-2 mt-8 text-base font-black text-gray-900 lg:text-lg md:text-lg">Details</h2>
                      <div className="relative col-span-2 mt-8">
                        <span className="text-base text-gray-800 md:text-lg">{result.detail}</span>
                      </div>
                        <>
                          {/* {rv.map((review) => (
                            <div className="grid grid-cols-3 gap-1 mt-12 md:grid-cols-4">
                              {review.product_id === product.id ?
                                <div className="col-span-1 -space-x-1 overflow-hidden">
                                  <img
                                    className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
                                    src={user.currentUser === "undefined" ? user.currentUser.currentUser.image : userLogo}
                                    alt=""
                                  />
                                  <p className="mt-6 pl-0.5 text-sm lg:text-base md:text-base font-black text-gray-900">{review.name}</p>
                                  <div className="mt-2 pl-0.5 flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                      <StarIcon
                                        key={rating}
                                        className={classNames(
                                          review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                          'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                      />
                                    ))}
                                  </div>
                                </div>
                                : ''}
                              {review.product_id === product.id ?
                                <div class="col-span-3">
                                  <h2 className="text-sm font-black text-gray-700 lg:text-base md:text-base">{review.subject}</h2>
                                  <p className="mt-4 text-xs text-gray-500 lg:text-sm md:text-sm">
                                    {review.message}
                                  </p>
                                </div>
                                : ''}

                            </div>
                          ))} */}
                          <div className="col-span-3">
                                <h2 className="col-span-2 mt-8 text-base font-black text-gray-900 lg:text-lg md:text-lg">Share your thoughts</h2>
                                <p className="mt-2 text-sm text-gray-500 lg:text-base md:text-base">
                                  if you've used this poducts, share your thoughts with other customers
                                </p>
                                <button
                                  type="submit"
                                  className="flex items-center justify-center w-3/4 h-10 px-8 py-3 mt-6 text-base font-medium border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                  onClick={() => setOpen(true)}
                                >
                                  Write a review
                                </button>
                          </div>
                        </>
                    </div>
                    <Transition.Root show={open} as={Fragment}>
                      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setOpen}>
                        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Dialog.Overlay className="fixed inset-0 hidden transition-opacity bg-gray-500 bg-opacity-75 md:block" />
                          </Transition.Child>

                          {/* This element is to trick the browser into centering the modal contents. */}
                          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
                            &#8203;
                          </span>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                          >
                            <div className="flex w-full text-base text-left transition transform md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                              <div className="relative flex items-center w-full px-4 pb-8 overflow-hidden bg-white shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button
                                  type="button"
                                  className="absolute text-gray-400 top-4 right-4 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close</span>
                                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                </button>

                                <div className="grid items-start w-full grid-cols-1 cursor-pointer gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                  <form className="sm:col-span-full lg:col-span-full" >
                                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{result.name}</h2>
                                    <div className="mt-2 pl-0.5 flex items-center">
                                      {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                          key={rating}
                                          className={classNames(
                                            // this.state.star.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                          )}
                                          aria-hidden="true"
                                        //   onClick={() => this.setproductId(product.id) || this.setStar()}
                                        />
                                      ))}
                                    </div>
                                    <label htmlFor="street-address" className="block mt-4 text-sm font-medium text-gray-700">
                                      Subject
                                    </label>
                                    {/* {this.state.errorMessage.subject ? <p className="text-red-500">{this.state.errorMessage.subject[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>} */}
                                    <input
                                      type="text"
                                      name="subject"
                                      id="subject"
                                      autoComplete="subject"
                                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    //   onChange={this.handleChange}
                                    />
                                    <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">
                                      Message
                                    </label>
                                    {/* {this.state.errorMessage.message ? <p className="text-red-500">{this.state.errorMessage.message[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>} */}
                                    <textarea
                                      type="text"
                                      name="message"
                                      id="message"
                                      autoComplete="address-level2"
                                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    //   onChange={this.handleChange}
                                    />
                                    <div className="mt-8">
                                      <button
                                        type="submit"
                                        // disabled={this.state.message.length <= 0 || this.state.subject.length <= 0 || this.state.star.length <= 0 ? 'disabled' : ''}
                                        // className={this.state.message.length <= 0 || this.state.subject.length <= 0 || this.state.star.length <= 0 ? "inline-flex cursor-not-allowed justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" : "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                                        // onClick={this.state.message.length <= 0 || this.state.subject.length <= 0 || this.state.star.length <= 0 || this.state.errorMessage.length >= 0 ? '' : () => recieveReview(product.id, user.currentUser.currentUser.name, this.state.star.rating, this.state.star.reviewCount, this.state.message, this.state.subject) && this.setClose()}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition.Root>
                    <div className="items-start w-full mt-8 md:mt-0">
                      <h2 className="text-xl font-black text-gray-900 lg:text-4xl md:text-2xl">${result.price}</h2>
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    produc.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{produc.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {produc.reviewCount} reviews
                            </a>
                          </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-900">Color</h4>

                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                          <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                          <div className="flex items-center space-x-3">
                            {produc.colors.map((color) => (
                              <RadioGroup.Option
                                key={color.name}
                                value={color}
                                className={({ active, checked }) =>
                                  classNames(
                                    color.selectedClass,
                                    active && !checked ? 'ring ring-offset-1' : '',
                                    !active && checked ? 'ring-2' : '',
                                    '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                  )
                                }
                              >
                                <RadioGroup.Label as="p" className="sr-only">
                                  {color.name}
                                </RadioGroup.Label>
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    color.class,
                                    'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                  )}
                                />
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900">Size</h4>
                        </div>

                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                          <div className="grid grid-cols-4 gap-4">
                            {produc.sizes.map((size) => (
                              <RadioGroup.Option
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={({ active }) =>
                                  classNames(
                                    size.inStock
                                      ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                      : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                    active ? 'ring-2 ring-indigo-500' : '',
                                    'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                                    {size.inStock ? (
                                      <div
                                        className={classNames(
                                          active ? 'border' : 'border-2',
                                          checked ? 'border-indigo-500' : 'border-transparent',
                                          'absolute -inset-px rounded-md pointer-events-none'
                                        )}
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <div
                                        aria-hidden="true"
                                        className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                                      >
                                        <svg
                                          className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                          viewBox="0 0 100 100"
                                          preserveAspectRatio="none"
                                          stroke="currentColor"
                                        >
                                          <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                        </svg>
                                      </div>
                                    )}
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                      <button
                        type="submit"
                        className= "mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setNotify(true) || settimeout() || scrollToTop() || setOpen(false) || products() && checkouts()}
                      >
                        Add to bag
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white">
                  <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg font-extrabold tracking-tight text-gray-900 md:text-2xl">Customers also purchased</h2>
                    {product === null ? "waiting" : 
                    <>
                    <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {product.items.map((suggest) => (
                        <>
                        {suggest.name === result.name ? "" :
                        <div key={suggest.name} className="relative group">
                          <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                              src={suggest.imageSrc}
                              alt={suggest.imageAlt}
                              className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                            />
                          </div>
                          <div className="flex justify-between mt-4">
                            <div>
                              <h3 className="text-sm text-gray-700">
                                <Link href={`/Product/${suggest.name}`} onClick={() => scrollToTop()}>
                                  <span aria-hidden="true" className="absolute inset-0" />
                                  {suggest.name}
                                </Link>
                              </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${suggest.price}</p>
                          </div>
                        </div>
                        }
                        </>
                      ))}
                    </div>
                    </>
                    }
                  </div>
                </div>        
        </>
        }
        </>
    )

}
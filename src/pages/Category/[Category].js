/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useState, Fragment, useEffect } from "react";
import { useRouter } from 'next/router';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function WomanTops(props) {
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
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [imageAlt, setImageAlt] = useState()
  const [catimageSrc, setCatimageSrc] = useState()
  const [notify, setNotify] = useState(false)
  const [selectedColor, setSelectedColor] = useState(produc.colors[0])
  const [selectedSize, setSelectedSize] = useState(produc.sizes[2])
  const router = useRouter();
        useEffect(() => {
            async function fetchData() {
            const db = getFirestore();
            const docId = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
            //   console.log(doc.id, " => ", doc.data());
            // setProduct(doc.id)
            docId.push({docId : doc.id, items: doc.data()})
            });
            setProduct(docId)
          }
            fetchData();
      }, []);

      const result = product !== null ? product.find((item) => item.items.title === router.asPath.replace("/Category/", "")) : 0

      function settimeout(){
        setTimeout(() => {
          setNotify(false)
        },3000)
      }

      async function checkouts(){
        const db = getFirestore();
        const checkouts = doc(db, "checkouts", props.user.displayName)
        await updateDoc(checkouts, {
          "Products" : arrayUnion(
            {
              username: props.user.displayName,
              useremail: props.user.email,
              name: name,
              price: price,
              quantity: 1,
              category: result.items.title,
              color: selectedColor.name,
              size: selectedSize.name,
              imageAlt: imageAlt,
              catimageSrc: catimageSrc
              }
          )
        }, { merge: true });
      }
      async function products(){
        const db = getFirestore();
        const pr = result.items.items.find(item => {return item.name === name})
        const docs = result.docId
        const products = doc(db, "products", docs)
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
        // console.log(result.items.title);
    return(
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
      {product === null ? 
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
      <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
      <span className="sr-only">Loading...</span>
      </div>
      :
      <>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex gap-2 text-base font-extrabold tracking-tight text-gray-900 sm:gap-5">
          <Link href="/">Men</Link><span className="text-gray-400">\</span>
          <Link href="/men">Clothing</Link><span className="text-gray-400">\</span>
          <Link href={`/Category/${result.items.title}`} className="text-gray-400">{result.items.title}</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product === null ? "waiting" : result.items.items.map((top) => (
              <div key={top.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                  <img
                    src={top.imageSrc}
                    alt={top.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                <div className="flex items-end p-4">
                <button onClick={() => setOpen(true) || setName(top.name) || setPrice(top.price) || setImageAlt(top.imageAlt) || setCatimageSrc(top.catimageSrc)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/Product/${result.docId}/${top.name}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {top.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{top.describtion}</p>
                  </div>
                  <div>
                  <p className="text-sm font-medium text-gray-500">${top.price}</p>
                  <p className="mt-1 text-sm text-gray-500">X{top.inventory ? top.inventory : <span className="text-red-600">Has Ended</span>}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
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
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
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
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {product === null ? "waiting" : result.items.items.map((top) => (
                  <>
                  {top.name === name ?
                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src={top.catimageSrc} alt={top.imageAlt} className="object-center object-cover" />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{top.name}</h2>
                    
                    <section aria-labelledby="information-heading" className="mt-2">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">${top.price}</p>

                      {/* Reviews */}
                      <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    Math.ceil(top.rating / top.reviewCount) > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{top.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {top.reviewCount} reviews
                            </a>
                          </div>
                        </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-10">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                        {/* Colors */}
                        <div>
                          <h4 className="text-sm text-gray-900 font-medium">Color</h4>

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

                        {/* Sizes */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm text-gray-900 font-medium">Size</h4>
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
                                          className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
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
                          className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          // eslint-disable-next-line no-mixed-operators
                          onClick={() => setNotify(true) || settimeout() || setOpen(false) || products() && checkouts()}             
                        >
                          Add to bag
                        </button>

                    </section>
                  </div>
                </div>
                 : null }
                </>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    
    </>
    }
        </>
    );

}
/* eslint-disable @next/next/no-img-element */
import { Popover } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, Fragment, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, deleteField, doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";



export default function Navigation(props) {
    const products = [
        {
          id: "women",
          name: "Women",
          featured: [
            {
              name: "New Arrivals",
              href: "#",
              imageSrc: "https://media.istockphoto.com/photos/she-is-my-best-friend-picture-id1194741547?b=1&k=20&m=1194741547&s=170667a&w=0&h=nTF9xCL4Bzfz3V9xueJhcZ8svIWjg79UHeXt0KKJ_gc=",
              imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone."
            },
            {
              name: "Basic Tees",
              href: "#",
              imageSrc: "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMTI2NDQxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              imageAlt: "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
            }
          ],
          sections: [
            {
              id: "clothing",
              name: "Clothing",
              items: [
                { name: "Tops", "href": "#" },
                { name: "Dresses", "href": "#" },
                { name: "Pants", "href": "#" },
                { name: "Denim", "href": "#" },
                { name: "Sweaters", "href": "#" },
                { name: "T-Shirts", "href": "#" },
                { name: "Jackets", "href": "#" },
                { name: "Activewear", "href": "#" },
                { name: "Browse All", "href": "#" }
              ]
            },
            {
              id: "accessories",
              name: "Accessories",
              items: [
                { name: "Watches", "href": "#" },
                { name: "Wallets", "href": "#" },
                { name: "Bags", "href": "#" },
                { name: "Sunglasses", "href": "#" },
                { name: "Hats", "href": "#" },
                { name: "Belts", "href": "#" }
              ]
            },
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Full Nelson", "href": "#" },
                { name: "My Way", "href": "#" },
                { name: "Re-Arranged", "href": "#" },
                { name: "Counterfeit", "href": "#" },
                { name: "Significant Other", "href": "#" }
              ]
            }
         ]
        },
        {
          id: "men",
          name: "Men",
          featured: [
            {
              name: "New Arrivals",
              href: "#",
              imageSrc: "https://images.unsplash.com/photo-1555441842-7cbc8f6a7171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NDU4ODAzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              imageAlt: "Drawstring top with elastic loop closure and textured interior padding."
            },
            {
              name: "Artwork Tees",
              href: "#",
              imageSrc: "https://images.unsplash.com/photo-1592516195984-44d68247d57e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8Mjk1NjYyODh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              imageAlt:
                "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
            }
          ],
          sections: [
            {
              id: "clothing",
              name: "Clothing",
              items: [
                { name: "Tops", "href": "#" },
                { name: "Pants", "href": "#" },
                { name: "Sweaters", "href": "#" },
                { name: "T-Shirts", "href": "#" },
                { name: "Jackets", "href": "#" },
                { name: "Activewear", "href": "#" },
                { name: "Browse All", "href": "#" }
              ]
            },
            {
              id: "accessories",
              name: "Accessories",
              items: [
                { name: "Watches", "href": "#" },
                { name: "Wallets", "href": "#" },
                { name: "Bags", "href": "#" },
                { name: "Sunglasses", "href": "#" },
                { name: "Hats", "href": "#" },
                { name: "Belts", "href": "#" }
              ]
            },
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Re-Arranged", "href": "#" },
                { name: "Counterfeit", "href": "#" },
                { name: "Full Nelson", "href": "#" },
                { name: "My Way", "href": "#" }
              ]
            }
          ]
        }
      ]
     
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const navigation = {
        pages: [
          { name: 'Company', href: '/company' },
          { name: 'Store', href: '/store' },
        ],
      }
      const router = useRouter();
      const [open, setOpen] = useState(false);
      const [name, setName] = useState()
      const [pricee, setPrice] = useState()
      const [imageAlt, setImageAlt] = useState()
      const [catimageSrc, setCatimageSrc] = useState()
      const [quantiity, setqQuantity] = useState()
      const [selectedColor, setSelectedColor] = useState()
      const [selectedSize, setSelectedSize] = useState()
      const [checkout, setCheckout] = useState(null);

      async function remove(){
        const db = getFirestore();
        const checkouts = doc(db, "checkouts", props.props.user.displayName)
        await updateDoc(checkouts, {
          "Products" : arrayRemove(
            {
              username: props.props.user.displayName,
              useremail: props.props.user.email,
              name: name,
              price: pricee,
              quantity: quantiity,
              color: selectedColor,
              size: selectedSize,
              imageAlt: imageAlt,
              catimageSrc: catimageSrc
              }
          )
        }, { merge: true });
      }
        useEffect(() => {
          const db = getFirestore();
          getDoc(doc(db, "checkouts", props.props.user.displayName)).then(docSnap => {
            if (docSnap.exists()) {
              setCheckout(docSnap.data())
            } else {
              // console.log("No such document!");
            }
          })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
      const quantity = checkout !== null ? checkout.Products.map(checkout => checkout.quantity) : 0
      const count = quantity !== 0 ? quantity.reduce((accumulator, currentValue) => accumulator + currentValue, 0) : 0
      const price = checkout !== null ? checkout.Products.map(checkout => checkout.price) : 0 
      const total = price !== 0 ? price.reduce((accumulator, currentValue) => accumulator + currentValue, 0) : 0
      // console.log(total);
    return(
        <>
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              {/* Flyout menus */}
              <Popover.Group className="-ml-3 block self-stretch">
                <div className="h-full flex space-x-4 md:space-x-8">
                  {products.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                  <>
                  {category.id === 'men' ? 
                  <Link href="/Men" 
                  className={classNames(
                    router.asPath.slice(1) === 'Men'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800',
                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                  )}
                  >
                  {category.name}
                  </Link>
                : '' }
                {category.id === 'women' ? 
                <Link href="/Women" 
                className={classNames(
                    router.asPath.slice(1) === 'Women'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-700 hover:text-gray-800',
                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                )}
                >
                {category.name}
                </Link>
                : '' }
                </>
                 )}
                 </Popover>
                 ))}
  
                  {navigation.pages.map((page) => (
                    <>
                    {page.name === 'Store' ?
                    <Link href="/Store"
                    key={page.name}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                    {page.name}
                    </Link>
                    :
                    <Link href="/Company"
                    key={page.name}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                    {page.name}
                    </Link>
                    }
                    </>
                  ))}
                </div>
              </Popover.Group>
  
              <div className="ml-auto flex items-center">
                <div className="ml-4 flow-root lg:ml-6">
                  <button onClick={() => setOpen(true)} className="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                   <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{count}</span>
                   <span className="sr-only">items in cart, view bag</span>
                  </button>
                  <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                      {checkout === null ? <h3>Please add to the Shopping bag</h3> :
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {checkout.Products.map((checkout) => (
                        <div key={checkout.id} className="mt-8">
        <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li className="py-6 flex">
              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                  src={checkout.catimageSrc}
                  alt={checkout.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{checkout.name}</h3>
                    <p className="ml-4">${checkout.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{checkout.color}</p>
                  <p className="mt-1 text-sm text-gray-500">{checkout.size}</p>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <p className="text-gray-500">Qty x {checkout.quantity}</p>

                  <div className="flex ml-px md:ml-32">
                    <button type="button" onClick={() => remove() && setqQuantity(checkout.quantity) || setSelectedSize(checkout.size) || setSelectedColor(checkout.color) || setName(checkout.name) || setPrice(checkout.price) || setImageAlt(checkout.imageAlt) || setCatimageSrc(checkout.catimageSrc) || setOpen(false)} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul> 
        </div>
                        </div>
                        ))}
                        </Dialog.Title>
                        }
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">                   
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${checkout ? total : null}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                      <Link href={checkout ? "/checkout" : "/Shop"}>
                        <button
                          className="flex justify-center items-center w-full mt-12 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          onClick={() => setOpen(false)}
                        >
                          {checkout ? "Checkout" : "Shop"}
                        </button>
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                            onClick={() => setOpen(false)} 
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
                  </Transition.Root>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </>
    );

}
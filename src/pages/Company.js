/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import phoneLogo from "../assests/icons8-phone-32.png";
import mailLogo from "../assests/icons8-mail-50.png";
import Image from "next/image";


export default function Company() {

    return(
        <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-9 sm:py-16 lg:py-20 lg:max-w-none">
            <h2 className="text-2xl lg:text-5xl md:text-4xl font-black text-gray-900">Contact us</h2>
              <div class="mt-6 space-y-12 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className="relative md:row-span-3">
                  <span className="text-lg text-gray-600">
                    Making the world a better place through constructing elegant hierarchies.
                  </span>  
                </div>
              </div>
          </div>
          <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="bg-indigo-400 h-5/6 md:col-span-1">
            <div className="px-4 lg:px-12 pt-12 md:px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-white">Contact information</h3>
              <p className="mt-4 text-sm text-white">Use a permanent address where you can receive mail the ways to contact us are as follows.</p>
              <div className="flex">
              <Image className="pt-8 w-5" src={phoneLogo} />
              <span className="pt-8 pl-3 text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex pb-12">
              <Image className="pt-6 w-5" src={mailLogo} />
              <span className="pt-6 pl-3 text-white">support@workcation.com</span>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
              <h3 className="ml-4 md:ml-6 text-lg font-medium leading-6 text-gray-900">Send us a message</h3>
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        autoComplete="subject"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
    );

}
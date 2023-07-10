/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../../assests/nightsky.jpg";
import done from "../../assests/done.svg";
import Index from "../index";
import Image from "next/image";
import Footer from "../../components/Footer";
import styles from "../../components/Contact.module.css";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useFormContact } from "../../components/useFromContact";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import Link from "next/link";


//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCX0QCbi91uyfR-FFoq6B6Ld955eknirfo",
  authDomain: "saghiomey-f6203.firebaseapp.com",
  projectId: "saghiomey-f6203",
  storageBucket: "saghiomey-f6203.appspot.com",
  messagingSenderId: "838247378490",
  appId: "1:838247378490:web:a8bc732e73e69f42b14f03",
  measurementId: "G-B3DNY6FW6W"
};
// Initialize firebase and google 
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export default function Guest(props) {
  const form1 = useRef();
  const lastepisode = props.episodes.slice(-5).reverse();
  const [open, setOpen] = useState(false);
  const [policy, setPolicy] = useState(true);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const { errors, validateForm, onBlurField } = useFormContact(form);
  const router = useRouter();
  // const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  // console.log(imgUrl)

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log('start of upload')
    if(imageAsFile === '' ) {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    let rand = (Math.random() + 1).toString(36).substring(7);
    let file = new File([imageAsFile], `file${rand}`);
    const storage = getStorage();
    let metadata = {
      type: 'image/jpeg' || 'image/png'
    };
    if(imageAsFile !== '' ) {
    const storageRef = ref(storage, `/Images/${imageAsFile.name}(${props.user.displayName})`)
    uploadBytes(storageRef, file, metadata).then((snapshot) => {
      // console.log(rand);
      getDownloadURL(ref(storage, `/Images/${imageAsFile.name}(${props.user.displayName})`))
       .then((url) => {
        setimgUrl(url)
       })
    });
    }
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
    emailjs
      .sendForm(
        "service_042vorh",
        "template_w340yso",
        form1.current,
        "ZmTSurbMfBR4GpUVC"
      )
      .then(
        (result) => {
          setOpen(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function settimeout() {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  function setptimeout() {
    setTimeout(() => {
      setPolicy(false);
    }, 3000);
  }

  async function guests(){
    const db = getFirestore();
    const guests = doc(db, "guests", props.user.displayName)
    await setDoc(guests, {
          Gname:props.user.displayName, 
          fullname: form.name,
          email: props.user.email,
          acceptpolicy: !policy,
          subject: form.subject,
          message: form.message,
          img: `/Images/${imageAsFile.name}(${props.user.displayName})`
    });
  }

  return (
    <>
      {props.user ? (
        router.asPath.replace("/Guest/", "") === props.user.uid ? (
          <>
            <Index />
            <Head>
              <title>Guest</title>
              <link rel="shortcut icon" href="/saghiomey.ico" />
            </Head>
            <div className="relative">
              <Image
                className="bg-cover xl:w-full"
                src={nightsky}
                alt="nightsky"
              />
              <div className="absolute grid justify-items-center top-4 md:top-16 w-full text-white">
                <span className="text-lg md:text-5xl font-sans font-bold">
                  SaghiOMey(SM) invitation from {props.user.displayName}
                </span>
              </div>
              <div className="absolute text-center -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
                <div className="grid justify-items-center lg:mb-56 mt-12 lg:ml-20 lg:mr-20 leading-8 text-gray-200">
                  <span className="text-2xl md:text-4xl font-sans font-bold">
                    Please fill in the form below Dear {props.user.displayName},
                    then we review & let you know
                  </span>
                  {open ? (
                    <div
                      show={open}
                      class="flex w-72 mt-5 md:w-96 shadow-lg rounded-lg"
                    >
                      <div class="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-white fill-current"
                          viewBox="0 0 16 16"
                          width="20"
                          height="20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                          ></path>
                        </svg>
                      </div>
                      <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                        <div className="text-lg md:text-xl font-bold text-black">
                          Submitted successfully
                        </div>
                        <button onClick={() => setOpen(false) || settimeout()}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="fill-current text-gray-700"
                            viewBox="0 0 16 16"
                            width="20"
                            height="20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {policy ? (
                    <div
                      show={policy}
                      class="flex w-72 mt-5 md:w-96 shadow-lg rounded-lg"
                    >
                      <div
                        class="relative z-10"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                      >
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 z-10 overflow-y-auto">
                          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg
                                      class="h-6 w-6 text-red-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                      />
                                    </svg>
                                  </div>
                                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3
                                      class="text-base font-bold leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      SaghiOMey Policy
                                    </h3>
                                    <h3
                                      class="text-base font-semibold leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      Human beings are members of a whole, In
                                      creation of one essence and soul. If one
                                      member is afflicted with pain, Other
                                      members uneasy will remain. If you've no
                                      sympathy for human pain, The name of human
                                      you cannot retain!
                                    </h3>
                                    <div class="mt-2">
                                      <p class="text-sm text-gray-500">....</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  onClick={() =>
                                    setPolicy(false) || setptimeout()
                                  }
                                  type="button"
                                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                >
                                  Accept Policy
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => setPolicy(false) || setptimeout()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="fill-current text-gray-700"
                          viewBox="0 0 16 16"
                          width="20"
                          height="20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                  <form ref={form1} onSubmit={onSubmitForm}>
                    <div className="mt-8">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={onUpdateField}
                        autoComplete="family-name"
                        placeholder=" Your FullName(FirstName & LastName)"
                        onBlur={onBlurField}
                        className="mt-1 h-12 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                      />
                      {errors.name.dirty && errors.name.error ? (
                        <p className={styles.formFieldErrorMessage}>
                          {errors.name.message}
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-4">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={form.subject}
                        onChange={onUpdateField}
                        autoComplete="subject"
                        placeholder=" Your Subject(Title)"
                        onBlur={onBlurField}
                        className="mt-1 h-12 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                      />
                      {errors.subject.dirty && errors.subject.error ? (
                        <p className={styles.formFieldErrorMessage}>
                          {errors.subject.message}
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-4">
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        value={form.message}
                        onChange={onUpdateField}
                        autoComplete="message"
                        placeholder=" Your summary of subject"
                        onBlur={onBlurField}
                        className="mt-1 h-32 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                      />
                      {errors.message.dirty && errors.message.error ? (
                        <p className={styles.formFieldErrorMessage}>
                          {errors.message.message}
                        </p>
                      ) : null}
                    </div>
                    <br />
                    <div class="col-span-full">
                      <label
                        for="cover-photo"
                        class="block text-sm font-medium leading-6 text-gray-200"
                      >
                        Cover photo
                      </label>
                      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div class="text-center">
                          {imgUrl === "" ?
                          <>
                          {imageAsFile === "" ? 
                          <svg
                            class="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          : <Image class="mx-auto h-16 w-16" src={done} />}
                          </>
                          : <img class="mx-auto h-16 w-16" src={imgUrl} />}
                          <div class="mt-4 flex text-sm leading-6 text-gray-200">
                            <label
                              for="file-upload"
                              class="relative cursor-pointer rounded-md bg-yellow-500 font-semibold text-white hover:bg-white hover:text-black"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                class="sr-only"
                                onChange={handleImageAsFile}
                              />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs leading-5 text-gray-200">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                      </div>
                      {imageAsFile === '' && errors.message.dirty ? (
                        <p className={styles.formFieldErrorMessage}>
                          Cover photo is required
                        </p>
                      ) : null}
                    </div>
                    <div className="flex justify-center mt-5">
                      <button
                        type="submit"
                        onClick={() => guests()} 
                        className="bg-yellow-500 text-white w-32 h-16 rounded-full hover:bg-white hover:text-black"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <Footer lastepisode={lastepisode} />
              </div>
            </div>
          </>
        ) : (
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-yellow-500">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
              >
                Go back home
              </Link>
              <Link href="/Contact" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
        )
      ) : (
        <h1 className="mt-44 bg-black text-yellow-500 text-center font-bold text-2xl">
          Please First Signin
        </h1>
      )}
    </>
  );
}
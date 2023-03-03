/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../assests/nightsky.jpg";
import Index from "./index";
import Image from 'next/image'
import Footer from "../components/Footer";
import styles from "../components/Contact.module.css";
import { useState, useRef } from "react";
import { useFormContact } from "../components/useFromContact";
import emailjs from "@emailjs/browser";
import Head from "next/head";

export default function Contact(props) {
  const form1 = useRef();
  const lastepisode = props.episodes.slice(-5).reverse();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { errors, validateForm, onBlurField } = useFormContact(form);

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
  const onSubmitForm = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    // alert(JSON.stringify(form, null, 2));
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

  return (
    <>
    <Index />
    <Head>
        <title>Contact</title>
        <link rel="shortcut icon" href="/saghiomey.ico" />
      </Head>
      <div className="relative">
        <Image className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">
            Contact Us
          </span>
        </div>
        <div className="absolute text-center -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="grid justify-items-center lg:mb-56 mt-12 lg:ml-20 lg:mr-20 leading-8 text-gray-200">
            <span className="text-2xl md:text-4xl font-sans font-bold">
              Drop us a line!
            </span>
            <br />
            <br />
            <span className="text-xl md:text-2xl text-gray-400 font-sans font-bold">
              If you want to get in touch or leave us a message with questions,
              feedback, suggestions or anything else, please don't hesitate to
              fill in the form below and we'll get back to you as soon as we
              can!
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
                  <button onClick={() => setOpen(false)}>
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
            <form ref={form1} onSubmit={onSubmitForm}>
              <div className="mt-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={onUpdateField}
                  autoComplete="family-name"
                  placeholder=" Your Name"
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
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={onUpdateField}
                  autoComplete="email"
                  placeholder=" Your Email"
                  onBlur={onBlurField}
                  className="mt-1 h-12 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                />
                {errors.email.dirty && errors.email.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.email.message}
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
                  placeholder=" Your Message"
                  onBlur={onBlurField}
                  className="mt-1 h-32 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                />
                {errors.message.dirty && errors.message.error ? (
                  <p className={styles.formFieldErrorMessage}>
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
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
  );
}

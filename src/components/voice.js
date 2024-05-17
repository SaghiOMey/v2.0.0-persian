/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
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

const signIn = () => auth.signInWithPopup(provider);

export default function Voice() {
  const form1 = useRef();
  const [audio, setAudio] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setOpen(true);
    setAudio(url);
  };

  return (
    <div className="flex justify-end fixed top-3/4 mt-24 right-4">
      <AudioRecorder
        className="bg-yellow-500	"
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      {audio.length ? (
        <form ref={form1}>
          {user ?
          <input className="hidden" name="audio" value={user.email} />
          : null }
          <div
            className={`relative z-10 ${open === true ? "block" : "hidden"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            {user ?
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                        <h3
                          className="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Send voice message
                        </h3>
                        <audio
                          className="inline-flex justify-center w-60 mt-2"
                          name="audio"
                          src={audio}
                          controls
                        ></audio>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to send your voice message?
                            Thanks for your voice message.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setOpen(false)}
                      type="submit"
                      disabled
                      value="Send"
                      className="inline-flex w-full justify-center cursor-not-allowed rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Send voice message
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            : 
            <div
            className={`relative z-10 ${open === true ? "block" : "hidden"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                          <div className="text-center">
                            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                              Please First Signin
                            </h1>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                              Sorry, To send Voice Please
                              Signin.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                              <button
                                onClick={signIn}
                                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                              >
                                Go to Signin
                              </button>
                              <Link
                                href="/Contact"
                                className="text-sm font-semibold text-gray-900"
                              >
                                Contact support{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </Link>
                            </div>
                          </div>
                        </main>
                        <button type="button" onClick={() => setOpen(false)} class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
                      </div>
                    </div>
                  </div>
            </div>
            }
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
// import axios from "axios";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_75ytjo7",
        "template_7ek1l64",
        form1.current,
        "Lp5sE4yuq_l5oKBod"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      async function createFile(){
        let response = await fetch(audio);
        let data = await response.blob();
        let metadata = {
          type: 'audio/mpeg'
        };
        let rand = (Math.random() + 1).toString(36).substring(7);
        let file = new File([data], `file${rand}.mp3`, metadata);
            const storage = getStorage();
            const storageRef = ref(storage, `Voice/file${rand}.mp3`);
            uploadBytes(storageRef, file, metadata).then((snapshot) => {
            // console.log(rand);
            });
      }
      createFile()
  };
  return (
    <div className="flex justify-end fixed top-3/4 mt-24 right-4">
      <AudioRecorder
        className="bg-yellow-500	"
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      {audio.length ? (
        <form ref={form1} onSubmit={sendEmail}>
          <input className="hidden" name="audio" value={user.email} />
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
                      value="Send"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
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
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                        <h3
                          className="text-lg font-medium leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Please First Signin
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                          To access the Interviews, Please Signin in the NavBar section
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      OK
                    </button>
                  </div>
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

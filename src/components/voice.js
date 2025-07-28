/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import Link from "next/link";


export default function Voice() {
  const form1 = useRef();
  const [audio, setAudio] = useState("");
  const [open, setOpen] = useState(false);

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
          <div
            className={`relative z-10 ${open === true ? "block" : "hidden"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
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
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

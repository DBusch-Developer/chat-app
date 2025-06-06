import { useState } from "react";

const Settings = () => {
  const [heading, setHeading] = useState(null);
  const [showModalRange, setShowModalRange] = useState(false);
  const [showModalRadio, setShowModalRadio] = useState(false);

  const handleHeadingClick = (index) => {
    if (index === heading) {
      setHeading(null);
    } else {
      setHeading(index);
    }
  };

  return (
    <>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2
          onClick={() => handleHeadingClick(0)}
          id="accordion-collapse-heading-1"
        >
          <button
            type="button"
            className="m-5 flex items-center justify-between w-9/10 p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded focus:ring-4 focus:ring-gray-200 bg-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>

              <span className="text-green-300">Display</span>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${heading === 0 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="bg-white w-9/10 m-5 rounded p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p
              onClick={() => {
                setShowModalRange(true);
              }}
              className=" text-black dark:text-gray-400 cursor-pointer"
            >
              Brightness level
            </p>
            {showModalRange && (
              <div
                onClick={(e) => {
                  setShowModalRange(false);
                }}
                // id="default-modal"
                //   id="crud-modal"
                //   tabIndex="-1"
                className=" "
              >
                <div className="m-5 w-1/2 rounded shadow-2xl p-5">
                  <input
                    id="minmax-range"
                    type="range"
                    min="0"
                    max="10"
                    value="5"
                    class="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            )}
            <p className="mb-5 text-gray-500 text-black text-xs">100%</p>
            <p
              onClick={() => {
                setShowModalRadio(true);
              }}
              className="text-black dark:text-gray-400 cursor-pointer"
            >
              Sleep
            </p>
            {showModalRadio && (
              <div
                onClick={(e) => {
                  setShowModalRadio(false);
                }}
                // id="default-modal"
                //   id="crud-modal"
                //   tabIndex="-1"
                className="modal-overlay overflow-y-auto overflow-x-hidden absolute z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                {/* // <!-- Main modal --> */}
                <div
                  id="crud-modal"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="modal-container overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                      {/* <!-- Modal header --> */}
                      <div className="modal-content flex flex-col justify-between md:p-5 rounded-t dark:border-gray-600">
                        <div className="flex mb-5">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Sleep
                          </h3>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            id="disabled-radio-1"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="disabled-radio-1"
                            class="ms-4 text-sm font-medium text-gray-400 dark:text-gray-500"
                          >
                            15 seconds
                          </label>
                        </div>
                        <div class="flex items-center  mb-4">
                          <input
                            checked
                            id="disabled-radio-2"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="disabled-radio-2"
                            class="ms-4 text-sm font-medium text-gray-400 dark:text-gray-500"
                          >
                            30 seconds
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            id="disabled-radio-1"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="disabled-radio-1"
                            class="ms-4 text-sm font-medium text-gray-400 dark:text-gray-500"
                          >
                            1 minute
                          </label>
                        </div>
                        <div class="flex items-center  mb-4">
                          <input
                            checked
                            id="disabled-radio-2"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="disabled-radio-2"
                            class="ms-4 text-sm font-medium text-gray-400 dark:text-gray-500"
                          >
                            2 minutes
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            id="disabled-radio-1"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="disabled-radio-1"
                            class="ms-4 text-sm font-medium text-gray-400 dark:text-gray-500"
                          >
                            5 minutes
                          </label>
                        </div>
                        <div class="flex items-center  mb-4">
                          <input
                            checked
                            id="disabled-radio-2"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="disabled-radio-2"
                            class="ms-4 text-sm font-medium text-gray-400 dark:text-gray-500"
                          >
                            10 minutes
                          </label>
                        </div>
                        <div class="flex items-center mb-4">
                          <input
                            id="disabled-radio-1"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="disabled-radio-1"
                            class="ms-4 text-sm font-medium text-gray-400 dark:text-gray-500"
                          >
                            30 minutes
                          </label>
                        </div>
                      </div>
                      {/* <!-- Modal body --> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <p className="mb-5 text-gray-500 text-black text-xs">
              After 30 minutes of inactivity
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-black dark:text-gray-400">
                Auto-rotate screen
              </p>

              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </div>
          </div>
        </div>
        <h2
          onClick={() => handleHeadingClick(1)}
          id="accordion-collapse-heading-2"
        >
          <button
            type="button"
            className="m-5 bg-white flex items-center justify-between w-9/10 p-5 font-medium rtl:text-right text-black border rounded border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>

              <span className="text-green-300">Sound</span>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`${heading === 1 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="bg-white w-9/10 m-5 rounded p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <div className="flex flex-row items-center mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-music-note mr-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
                  <path fill-rule="evenodd" d="M9 3v10H8V3z" />
                  <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
                </svg>
              </div>
              <div className="flex flex-col w-full">
                <div>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Media volume
                  </p>
                </div>
                <div>
                  <input
                    id="minmax-range"
                    type="range"
                    min="0"
                    max="10"
                    value="8"
                    class="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mb-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center mb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-alarm mr-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                </svg>
              </div>
              <div className="flex flex-col w-full">
                <p className="mb-2 mt-3 text-gray-500 dark:text-gray-400">
                  Alarm volume
                </p>
                <input
                  id="minmax-range"
                  type="range"
                  min="0"
                  max="10"
                  value=""
                  class="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mb-2"
                />
              </div>
            </div>
            <div className="flex flex-row items-center mb-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-bell-fill mr-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
              </div>
              <div className="flex flex-col w-full">
                <p className="mb-2 mt-3 text-gray-500 dark:text-gray-400">
                  Notification volume
                </p>
                <input
                  id="minmax-range"
                  type="range"
                  min="0"
                  max="10"
                  value="5"
                  class="w-full h-2 bg-gray-200 rounded-lg cursor-pointer mb-2"
                />
              </div>
            </div>
          </div>
        </div>
        <h2
          onClick={() => handleHeadingClick(2)}
          id="accordion-collapse-heading-3"
        >
          <button
            type="button"
            className="m-5 bg-white rounded flex items-center justify-between w-9/10 p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                />
              </svg>

              <span className="text-green-300">Storage</span>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${heading === 2 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="bg-white w-9/10 m-5 rounded p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2
          onClick={() => handleHeadingClick(3)}
          id="accordion-collapse-heading-3"
        >
          <button
            type="button"
            className="m-5 bg-white rounded flex items-center justify-between w-9/10 p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3 cursor-pointer"
          >
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-fill-gear mr-5"
                viewBox="0 0 16 16"
              >
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
              </svg>

              <span className="text-green-300 ">Accessibility</span>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${heading === 3 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="bg-white w-9/10 m-5 rounded p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;

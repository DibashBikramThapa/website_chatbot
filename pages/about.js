import React, { useState } from "react";

import { Button } from "@material-tailwind/react";

import Head from "next/head";
import Layout from "../components/layout";
import {
  Bars3Icon,
  XMarkIcon,
  MapIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function ChatAl() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section class="relative pt-16 bg-blueGray-50">
          <div className="mb-10 text-5xl font-bold flex items-center justify-center">
            Who are we?
          </div>
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                  <img
                    alt="..."
                    src="https://media.istockphoto.com/id/1461586589/photo/hand-of-a-business-woman-giving-an-explanation-at-a-meeting.jpg?s=1024x1024&w=is&k=20&c=7tHlRv3uhqX7K2Sbw7dX8nV91fh3RBtSCTlRXuj2sC4="
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    {/* <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block h-95-px -top-94-px z-10"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="text-pink-500 fill-current"
                      ></polygon>
                    </svg> */}
                    <h4 class="text-xl font-bold text-black z-20">
                      Great for your awesome project
                    </h4>
                    <p class="text-md font-light mt-2 text-black z-20">
                      Arnifi is the leading AI-powered business setup advisor
                      and support service provider in Saudi Arabia and the UAE.
                      We offer a wide range of services to help entrepreneurs
                      and businesses of all sizes start, operate, and grow in
                      the region. What sets Arnifi apart from other business
                      setup companies is our use of cutting-edge AI technology.
                      Our ChatGPT-powered chatbot can answer your questions
                      about business setup in Saudi Arabia and the UAE, provide
                      guidance on trade license processing and visa and permit
                      requirements, and assist with accounting and tax
                      compliance.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div class="w-full md:w-6/12 px-4">
                <div class="flex flex-wrap">
                  <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col mt-4">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          {/* <i class="fas fa-sitemap"></i> */}
                          <MapIcon />
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">
                          Personalized support
                        </h6>
                        <p class="mb-4 text-blueGray-500">
                          Our ChatGPT-powered chatbot can provide you with
                          personalized support 24/7.
                        </p>
                      </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <Bars3Icon />
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">Efficiency</h6>
                        <p class="mb-4 text-blueGray-500">
                          Our AI-powered tools can automate many of the tasks
                          involved in business setup, making the process faster
                          and more efficient.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-6/12 px-4">
                    <div class="relative flex flex-col min-w-0 mt-4">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <XMarkIcon />{" "}
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">Accuracy</h6>
                        <p class="mb-4 text-blueGray-500">
                          Our AI-powered tools can help you to avoid errors and
                          ensure that your business setup documents are complete
                          and accurate.
                        </p>
                      </div>
                    </div>
                    <div class="relative flex flex-col min-w-0">
                      <div class="px-4 py-5 flex-auto">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <CurrencyDollarIcon />
                        </div>
                        <h6 class="text-xl mb-1 font-semibold">
                          Affordability
                        </h6>
                        <p class="mb-4 text-blueGray-500">
                          We offer competitive rates for our services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <footer class="relative bg-blueGray-50 pt-8 pb-6 mt-2">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div class="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      class="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      Notus JS
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      class="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      Creative Tim
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
        </section>

        <section class="max-w-6xl my-20 mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div class="text-center pb-12">
            <h2 class="text-base font-bold text-indigo-600">
              We have the best equipment in the market
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Check our awesome team members
            </h1>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
          </div>
        </section>

        <div class="py-16 bg-white">
          <div className="mb-10 text-3xl text-gray-800 font-bold flex items-center justify-center">
            GET STARTED NOW !!!
          </div>
          <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
            <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
              <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 class="text-4xl text-gray-700 font-bold md:text-5xl">
                  Get started now with the{" "}
                  <span class="text-blue-500">Cutting Edge AI</span>
                </h1>
                <p class="text-lg">
                  Be part of millions people around the world using Arfini AI
                  consultant in modern User Interfaces.
                </p>
                <div class="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                  <button
                    type="button"
                    title="Get Started"
                    class="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                  >
                    <span class="block text-white font-semibold">
                      Get Started
                    </span>
                  </button>
                  <button
                    type="button"
                    title="more about"
                    class="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
                  >
                    <span class="block text-gray-600 font-semibold">
                      More about
                    </span>
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                <div class="col-span-2 row-span-4">
                  <img
                    src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg"
                    class="rounded-full"
                    width="640"
                    height="960"
                    alt="shoes"
                    loading="lazy"
                  />
                </div>
                <div class="col-span-2 row-span-2">
                  <img
                    src="https://img.freepik.com/free-photo/successful-entrepreneurs-analyzing-perspectives_1163-5270.jpg"
                    class="w-full h-full object-cover object-top rounded-xl"
                    width="640"
                    height="640"
                    alt="shoe"
                    loading="lazy"
                  />
                </div>
                <div class="col-span-3 row-span-3">
                  <img
                    src="https://img.freepik.com/free-photo/businessman-monitors-financial-indicators-online_1163-5479.jpg"
                    class="w-full h-full object-cover object-top rounded-xl"
                    width="640"
                    height="427"
                    alt="shoes"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

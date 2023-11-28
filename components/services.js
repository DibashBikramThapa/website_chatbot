import React from "react";
import Link from "next/link";
import { ListItem } from "@material-tailwind/react";
const servicesData = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    title: "Business Setup Consultancy and Advice",
    description: "Team of experts to help you get started with your business",
    color: "red",
    link: "/services/Business-setup-consultancy-advice",
  },
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </>
    ),
    title: "Trade License Processing Service for All",
    description: "Know the how-to of the trading grounds and everything",
    color: "orange",
    link: '/services/Trade-license-processing',
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </>
    ),
    title: "Visa and Permit Processing",
    description: "What is the legal entry process? Know it better with our experts",
    color: "yellow",
    link: '/services/Visa-and-permit-processing',

  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </>
    ),
    title: "Corporate Secretarial Services",
    description:
      "Arnifi's corporate secretarial services, know what's best for you",
    color: "lime",
    link: '/services/Corporate-secretarial-services',
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </>
    ),
    title: "Accounting and Tax Services",
    description: "Forget about the accounts department, We are here for you.",
    color: "teal",
    link: '/services/Accounting-and-tax-services',
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </>
    ),
    title: "Legal Services",
    description: "We help you stay protected from everything that comes your way",
    color: "indigo",
    link: '/services/Legal-services',
  },
  {
    icon: (
      <>
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </>
    ),
    title: "Business Support Services",
    description: "Office space, IT solutions, and marketing support",
    color: "purple",
    link: '/services/Business-support-services',
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </>
    ),
    title: "ChatGPT-Powered Chat",
    description: "AI Powered Consultant for all your business needs",
    color: "pink",
    link: '/ai-consultancy',
  },
];

export default function Services() {
  return (
    <div className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10">
      <header className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
          What We Excel at
        </h2>
        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
          Save time managing advertising &amp; Content for your business.
        </p>
      </header>

      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
        {servicesData.map((service, index) => (
          <Link
            href={service.link}
            className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-medium"
            key={index}
          >
            <div
              className={`p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer`}
            >
              <span
                className={`p-5 rounded-full bg-${service.color}-500 text-white shadow-lg shadow-${service.color}-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {service.icon}
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                {service.title}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
        <p className="text-white">
          {" "}
          <span className="text-4xl font-medium">
            Still Confused ?
          </span> <br />{" "}
          <span className="text-lg">
            Book For Free Career Consultation Today !{" "}
          </span>
        </p>
        <button className="px-5 py-3 font-medium text-slate-700 shadow-xl hover:bg-white duration-150 bg-yellow-400">
          BOOK AN APPOINTMENT{" "}
        </button>
      </div>
    </div>
  );
}

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NavListMenu from "./NavbarMenu/view";

const navListMenuServices = [
    {'Essentail Services':
        [{
            title: "Business Setup Consultancy and Advice",
            link: '/services/Business-setup-consultancy-advice',
        },
        {
            title: "Trade License Processing:",
            link: '/services/Trade-license-processing',
        },
        {
            title: "Legal Services",
            link: '/services/Legal-services',
        },
        ]
    },
    {'Operational Services':
        [{
            title: "Corporate Secretarial Services",
            link: '/services/Corporate-secretarial-services',
        },
        {
            title: "Accounting and Tax Services",
            link: '/services/Accounting-and-tax-services',
        },
        {
            title: "ChatGPT-Powered Chatbot",
            link: '/ai-consultancy',
        },
        ]
    },
    {'Support Services':
        [{
            title: "Visa and Permit Processing",
            link: '/services/Visa-and-permit-processing',
        },
        {
            title: "Business Support Servicess",
            link: '/services/Business-support-services',
        },
        ]
    },

];

const navListMenuBusiness = [
  {
    "FREE ZONES": [
      {
        title: "Overview",
      },
      {
        title: "Business Activities",
      },
      {
        title: "Free Zone License Locations and Pricing",
      },
      {
        title: "UAE Residence Visa",
      },
      {
        title: "Registration Process",
      },
      {
        title: "Our Solution",
      },
    ],
  },
  {
    MAINLAND: [
      {
        title: "Overview",
      },
      {
        title: "Sponsorship",
      },
      {
        title: "Dubai Mainland Licence",
      },
      {
        title: "Business Activities",
      },
      {
        title: "Mainland Visas",
      },
      {
        title: "VirtuFit",
      },
    ],
  },
];

const navListMenuTax = [
  {
    "Hide Key": [
      {
        title: "Accounting Services",
      },
      {
        title: "VAT & Tax Consultancy",
      },
      {
        title: "Corporate Tax",
      },
    ],
  },
];

const navListMenuResources = [
    {'Hide Key':[
        {
            title: "About",
            link: '/'
        },
        {
            title: "Blog",
            link: '/'
        },
        {
            title: "Setup Guides",
            link: '/'
        },
        {
            title: "Press",
            link: '/'
        },
        {
            title: "Infographics",
            link: '/'
        },
        {
            title: "Get a Trade License",
            link: '/'
        },
        {
            title: "Infographics",
            link: '/'
        },
        {
            title: "E-commerce licence",
            link: '/'
        },
        {
            title: "How to start a business in Dubai",
            link: '/'
        },
        {
            title: "Our Partners",
            link: '/'
        },
        {
            title: "Stand Together UAE",
            link: '/'
        },
        {
            title: "Citizenship & Residency",
            link: '/'
        },
        {
            title: "FAQs",
            link: '/'
        },
        {
            title: "Support Services",
            link: '/'
        },
    ]},
]

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {/* <NavListMenu services='Business Setup' navListMenuItems={navListMenuBusiness}/> */}
      {/* <NavListMenu services='Accouting & Tax' navListMenuItems={navListMenuTax}/> */}
      <NavListMenu services='Resources' navListMenuItems={navListMenuResources}/>
      <NavListMenu services='Services' navListMenuItems={navListMenuServices}/>

      <Link href="/contact-us" className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Link>

      <Link href="/about" className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
        </Link>
      {/* <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link href="/about">About Us</Link>
        </ListItem>
      </Typography> */}
    </List>
  );
}

export default function NavbarWithMegaMenu({for_chat=false}) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className={for_chat? 'mx-auto max-w-screen-3xl fixed bg-white z-50 bg-opacity-100 shadow-hero': 'mx-auto mt-[3rem] max-w-screen-3xl fixed bg-white z-50 bg-opacity-100 shadow-hero'}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/" className="text-xl font-bold">
          Arnifi labs
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button
            variant="text"
            size="lg"
            className="bg-blue-700 text-white hover:bg-white hover:border-blue-700 border-2 hover:text-blue-700"
          >
            Cost Calculator
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

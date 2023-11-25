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
  {
    "Essentail Services": [
      {
        title: "Bank Account Opening in UAE",
      },
      {
        title: "Accounting Services",
      },
      {
        title: "Compliance Services",
      },
      {
        title: "Health Insurance",
      },
    ],
  },
  {
    "Operational Services": [
      {
        title: "IT Services",
      },
      {
        title: "Legal Services",
      },
      {
        title: "Mail Management",
      },
      {
        title: "Virtual Receptionist",
      },
    ],
  },
  {
    "Support Services": [
      {
        title: "Tourist Visa",
      },
      {
        title: "Golden Visa UAE",
      },
      {
        title: "PRO Services",
      },
      {
        title: "Will Preparation Service",
      },
    ],
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
  {
    "Hide Key": [
      {
        title: "About",
      },
      {
        title: "Blog",
      },
      {
        title: "Setup Guides",
      },
      {
        title: "Press",
      },
      {
        title: "Infographics",
      },
      {
        title: "Get a Trade License",
      },
      {
        title: "Infographics",
      },
      {
        title: "E-commerce licence",
      },
      {
        title: "How to start a business in Dubai",
      },
      {
        title: "Our Partners",
      },
      {
        title: "Stand Together UAE",
      },
      {
        title: "Citizenship & Residency",
      },
      {
        title: "FAQs",
      },
      {
        title: "Support Services",
      },
    ],
  },
];

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu
        services="Business Setup"
        navListMenuItems={navListMenuBusiness}
      />
      <NavListMenu
        services="Accouting & Tax"
        navListMenuItems={navListMenuTax}
      />
      <NavListMenu services="Services" navListMenuItems={navListMenuServices} />
      <NavListMenu
        services="Resources"
        navListMenuItems={navListMenuResources}
      />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link href="/about">About Us</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-3xl">
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
            className="bg-red-600 text-white hover:bg-white hover:border-red-600 border-2 hover:text-red-600"
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

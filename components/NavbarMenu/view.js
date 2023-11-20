import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
import navbar_dropdown1 from "./navbar_dropdown1";


export default function NavListMenu({services, navListMenuItems}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                {services}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden rounded-xl lg:block">
            {   navListMenuItems.map(e=> Object.keys(e)[0]).includes('Hide Key')?
                <ul className="grid gap-y-2 gap-x-[10rem] outline-none outline-0">
                    {navbar_dropdown1(navListMenuItems)}
                </ul>
                    :
                <ul className="grid grid-cols-3 gap-y-2 gap-x-[10rem] outline-none outline-0">
                    {navbar_dropdown1(navListMenuItems)}
                </ul>
            }
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{navbar_dropdown1(navListMenuItems)}</Collapse>
        </div>
      </React.Fragment>
    );
  }
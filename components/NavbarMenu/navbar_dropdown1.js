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

export default function navbar_dropdown1(navListMenuItems) {
    const renderItems = navListMenuItems.map(
        (each, key) => (
            <div key={key} className="flex gap-3 rounded-lg flex-col">
                {Object.keys(each)[0] !='Hide Key' &&
                    (
                    <a href="#" >
                        <MenuItem className="">
                            <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                            >
                            {Object.keys(each)}
                            </Typography>
                        </MenuItem>
                    </a>
                )}
                {Object.values(each).map(
                        (each) =>(
                            each.map((e,index)=> (
                                <a href="#" key={key+index}>
                                    <MenuItem className="">
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="flex items-center text-sm font-normal"
                                        >
                                            {e.title}
                                    </Typography>
                                    </MenuItem>
                                </a>
                            ))))
                }
            </div>
        ),
      );
      return renderItems
}

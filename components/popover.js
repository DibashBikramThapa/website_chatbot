import React, {useEffect} from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
  } from "@material-tailwind/react";

  export default function PopoverWithImage({children, setResetChat}) {

    const [openPopover, setOpenPopover] = React.useState(false);

    const handlePopOver = ()=>{
      setResetChat(openPopover)
    };

    useEffect(() => {
      handlePopOver()
    }, [openPopover]);

    return (
        <div className="absolute flex flex justify-end mt-4 w-full">
        <Popover open={openPopover} handler={setOpenPopover}>
            <PopoverHandler>
                  <Button>Chat with us?</Button>
            </PopoverHandler>
            <PopoverContent className="z-[999] overflow-hidden p-0">
                {children}
            </PopoverContent>
      </Popover>
        </div>
    );
  }
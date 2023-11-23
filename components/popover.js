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
        <Popover open={openPopover} handler={setOpenPopover}>
        <div className="flex flex justify-end mt-4">
          <PopoverHandler>
                <Button>Chat with us?</Button>
          </PopoverHandler>
          <PopoverContent className="z-[999] overflow-hidden p-0">
              {children}
          </PopoverContent>
        </div>
      </Popover>
    );
  }
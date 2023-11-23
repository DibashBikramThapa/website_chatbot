import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
  } from "@material-tailwind/react";

  export default function PopoverWithImage({children}) {
    return (
        <Popover>
        <PopoverHandler >
            <div className="flex flex justify-end mt-4">
              <Button>Chat with us?</Button>
            </div>
        </PopoverHandler>
        <PopoverContent className="z-[999] overflow-hidden p-0">
            {children}
        </PopoverContent>
      </Popover>
    );
  }
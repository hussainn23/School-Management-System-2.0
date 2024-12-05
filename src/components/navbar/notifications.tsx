import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Link } from 'react-router-dom';

export const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="ghost"
          className="h-10 w-10 relative hover:bg-transparent dark:hover:bg-transparent"
        >
          <Bell size={27} className="font-extrabold dark:text-gray-300" />
          <div className="absolute -top-1 -right-1 bg-red-400 rounded-full w-5 h-5 text-[11px] text-white">
            49
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="flex flex-col bg-white dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="flex justify-between items-center w-full pb-2 shadow-sm">
          <h3 className="text-gray-700 dark:text-gray-300 font-semibold text-center">
            Notifications
          </h3>
          <span className="text-xs p-1 bg-orange-100 text-orange-600 rounded-md font-medium">
            15 unread
          </span>
        </div>
        <div className='flex flex-col gap-1 mt-5'>
            <div className="flex flex-row  gap-2 items-center py-2 border-b cursor-pointer">
            <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 overflow-hidden">
                <span className="font-semibold text-sm text-gray-900 dark:text-gray-300">
                First notification
                </span>
                <p className="text-xs font-normal text-muted-foreground dark:text-gray-400 leading-3 truncate overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                quasi!
                </p>
            </div>
            </div>
            <div className="flex flex-row  gap-2 items-center py-2 border-b cursor-pointer">
            <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 overflow-hidden">
                <span className="font-semibold text-sm text-gray-900 dark:text-gray-300">
                First notification
                </span>
                <p className="text-xs font-normal text-muted-foreground dark:text-gray-400 leading-3 truncate overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                quasi!
                </p>
            </div>
            </div>
        </div> 
        <Link to={'#'} className='text-center mt-5 underline text-theme'>
            View All
        </Link>
      </PopoverContent>
    </Popover>
  );
};

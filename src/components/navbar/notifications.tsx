import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Bell } from 'lucide-react';

export const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="ghost"
          className="h-10 w-10 relative bg-gray-100 dark:bg-gray-800"
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
        <h3 className="text-gray-700 dark:text-gray-300 font-semibold text-center">
          Notifications
        </h3>
        <div className="flex flex-col gap-2 p-2 mt-3 shadow-sm border-b dark:border-gray-800">
          <span className="font-medium text-sm text-gray-900 dark:text-gray-300">
            🌝 First notification
          </span>
          <p className="text-xs font-normal text-muted-foreground dark:text-gray-400 leading-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quasi!
          </p>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            JAN 13, 2022
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
};

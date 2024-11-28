import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { LanguagesIcon, Flag } from 'lucide-react';

export function LanguageDropdown() {
  return (
    <Popover>
      <PopoverTrigger>
        <span className="text-muted-foreground text-sm hidden md:flex dark:text-gray-400">
          <LanguagesIcon />
        </span>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex flex-col bg-white dark:bg-gray-900 dark:border-gray-700 mt-5"
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in rounded-sm shadow-sm">
            <div className='flex justify-center items-center gap-1'>
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-300">
                <Flag size={20} />
              </span>
              <p className="font-medium text-muted-foreground dark:text-gray-400 leading-3">
                English  
              </p>
            </div>
            <span>
                (US)
            </span>
          </div>
          <div className="flex justify-between p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in rounded-sm shadow-sm">
            <div className='flex justify-center items-center gap-1'>
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-300">
                <Flag size={20} />
              </span>
              <p className="font-medium text-muted-foreground dark:text-gray-400 leading-3">
                URDU   
              </p>
            </div>
            <span>
                (UK)
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

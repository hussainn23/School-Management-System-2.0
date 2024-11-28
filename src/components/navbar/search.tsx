import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Search } from 'lucide-react';

export function SearchDropdown() {
  return (
    <Popover>
      <PopoverTrigger>
        <span className="text-muted-foreground text-sm hidden md:flex dark:text-gray-400">
          <Search />
        </span>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex flex-col bg-white dark:bg-gray-900 dark:border-gray-700 mt-5 min-w-[400px] py-4 px-3"
      >
        <div className="relative w-full">
          <Search
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
            size={20}
          />
          <Input
            type="search"
            placeholder="Search for Results"
            className="pr-3 py-2 w-full text-lg dark:bg-gray-800"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

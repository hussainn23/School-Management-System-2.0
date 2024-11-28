import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent border-none"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[200px] p-0 dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-2 p-2">
          <Button
            variant="ghost"
            onClick={() => setTheme('light')}
            className="justify-start"
          >
            Light
          </Button>
          <Button
            variant="ghost"
            onClick={() => setTheme('dark')}
            className="justify-start"
          >
            Dark
          </Button>
          <Button
            variant="ghost"
            onClick={() => setTheme('system')}
            className="justify-start"
          >
            System
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

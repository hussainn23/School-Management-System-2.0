import { ReactNode } from 'react'
import { Input } from '@/components/ui/input'
import { Search, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

interface TableHeaderProps {
  title: string
  onSearch: (query: string) => void
  onSort: () => void
  rightContent?: ReactNode
}

export function TableHeader({ title, onSearch, onSort, rightContent }: TableHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            size={7}
            placeholder="Search here ..."
            className="pl-8"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <DropdownMenu onOpenChange={onSort}>
          <DropdownMenuTrigger>
            <Button variant={'theme'} size={'sm'}>
                Sort By <ChevronDown size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-gray-800">
            <DropdownMenuItem className="dark:text-gray-200">
              Ascending
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:text-gray-200">
              Descending
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {rightContent}
      </div>
    </div>
  );
}


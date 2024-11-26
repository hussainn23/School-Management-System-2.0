import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { ChevronDown, Calendar, Eye, Edit } from 'lucide-react';

const events = [
  {
    name: 'Quaid e Azam Day',
    date: '2024-05-18',
    status: 'Upcoming',
    description: 'Lorem ipsum dummy text and filler',
  },
  {
    name: '23rd March Holiday',
    date: '2024-05-19',
    status: 'Done',
    description: 'Lorem ipsum dummy text and filler',
  },
  {
    name: 'Pakistan Day',
    date: '2024-05-20',
    status: 'Missed',
    description: 'Lorem ipsum dummy text and filler',
  },
];

export function UpcomingEvents() {
  return (
    <Card className="shadow-md rounded-sm bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row justify-between items-center p-4 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-gray-800 dark:text-gray-100 text-lg">
          Upcoming Events
        </CardTitle>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search Here"
            className="w-48 h-8 bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1 text-sm text-muted-foreground dark:text-gray-300">
              Sort By <ChevronDown size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-gray-800 p-2">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuItem className="dark:text-gray-200 px-2">
                Newly added
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:text-gray-200 px-2">
                Last 3 months
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:text-gray-200 px-2">
                Last 6 months
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:text-gray-200 px-2">
                Last 1 year
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-3 py-2 border-b text-sm font-medium text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700">
          <span className="col-span-4">Name</span>
          <span className="col-span-2">Status</span>
          <span className="col-span-3">Date</span>
          <span className="col-span-3">Action</span>
        </div>
        {/* Table Rows */}
        <div className="space-y-1">
          {events.map((event, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-3 py-2 border-b border-gray-200 dark:border-gray-700"
            >
              {/* Name and description column */}
              <div className="flex items-center gap-4 col-span-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                  <Calendar className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-100">
                    {event.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Status column */}
              <div className="flex items-center gap-4 col-span-2">
                <span
                  className={`p-1 w-20 text-center rounded-sm text-xs font-medium ${
                    event.status === 'Upcoming'
                      ? 'bg-purple-100 text-purple-500 dark:bg-purple-800 dark:text-purple-300'
                      : event.status === 'Done'
                        ? 'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-300'
                        : 'bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-300'
                  }`}
                >
                  {event.status}
                </span>
              </div>

              {/* Date column */}
              <span className="text-sm col-span-3 flex items-center text-gray-800 dark:text-gray-100">
                {event.date}
              </span>

              {/* Action buttons column */}
              <div className="flex gap-2 col-span-3">
                <button className="bg-purple-100 dark:bg-purple-800 p-2 rounded-full h-10 w-10 flex justify-center items-center">
                  <Eye
                    className="text-purple-500 dark:text-purple-300"
                    size={15}
                  />
                </button>
                <button className="bg-orange-100 dark:bg-orange-800 p-2 rounded-full h-10 w-10 flex justify-center items-center">
                  <Edit
                    className="text-orange-500 dark:text-orange-300"
                    size={15}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

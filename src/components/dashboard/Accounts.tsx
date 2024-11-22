import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CombinedChart from '@/charts/AccountChart';

import { ChevronDown, ChevronUp } from 'lucide-react';

export function Accounts() {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const barData = [3000, 4000, 3200, 5000, 2800, 4500, 3900];
  const lineData = [3500, 4200, 3400, 4700, 3000, 4800, 3700];

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-sm shadow-md gap-3">
      <div className="flex justify-between items-center w-full shadow-sm p-4 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-lg">
          Accounts
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 text-sm text-gray-500 dark:text-gray-300">
            Sort By <ChevronDown size={20} />
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
      </div>
      <div className="flex justify-between items-center w-full p-4 gap-3">
        <div className="flex flex-col gap-3 w-full bg-gray-50 dark:bg-gray-700 rounded-sm shadow-sm p-3">
          <div className="flex justify-between items-center">
            <h4 className="text-gray-800 dark:text-gray-100 font-light text-[15px]">
              Pending Amount
            </h4>
            <span className="flex justify-center items-center gap-1 text-green-500 dark:text-green-400 text-sm">
              <span>0.54%</span>
              <ChevronUp
                className="text-green-500 dark:text-green-400"
                size={16}
              />
            </span>
          </div>
          <h5 className="font-light text-xl text-gray-800 dark:text-gray-100">
            Pkr, 120
          </h5>
        </div>
        <div className="flex flex-col gap-3 w-full bg-gray-50 dark:bg-gray-700 rounded-sm shadow-sm p-3">
          <div className="flex justify-between items-center">
            <h4 className="text-gray-800 dark:text-gray-100 font-light text-[15px]">
              Received Amount
            </h4>
            <span className="flex justify-center items-center gap-1 text-red-500 dark:text-red-400 text-sm">
              <span>0.54%</span>
              <ChevronDown
                className="text-red-500 dark:text-red-400"
                size={16}
              />
            </span>
          </div>
          <h5 className="font-light text-xl text-gray-800 dark:text-gray-100">
            12,326
          </h5>
        </div>
      </div>

      <CombinedChart
        labels={labels}
        barData={barData}
        lineData={lineData}
        barColor="#735DFF"
        lineColor="#FF5733"
      />
    </div>
  );
}

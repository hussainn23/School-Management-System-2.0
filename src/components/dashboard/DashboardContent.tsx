import { Calendar } from 'lucide-react';
import { Button } from '../ui/button';

import { ExamsPercentage } from './ExamPercentage';
import { HeaderCards } from './HeaderCards';
import { Attendance } from './Attendance';
import { Accounts } from './Accounts';
import { UpcomingEvents } from './UpcomingEvents';

export function DashboardContent() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-full mb-20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Welcome Back, Jack Miller
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs">
            Let's dive in and get things done.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 shadow-sm p-2 rounded-sm flex justify-center items-center gap-2 font-semibold">
            <Calendar />
            May, 01 2024 to May, 30 2024
          </span>
          <Button variant="theme">Export report</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 min-h-full">
        <div className="col-span-3 flex flex-col gap-3">
          <HeaderCards />
          <div className="grid grid-cols-3 gap-3 w-full">
            <Attendance />
            <div className="col-span-2 flex flex-col gap-3">
              <Accounts />
              <UpcomingEvents />
            </div>
          </div>
        </div>
        <div>
          <ExamsPercentage />
        </div>
      </div>
    </div>
  );
}

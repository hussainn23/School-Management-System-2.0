import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExamsPercentage } from './ExamPercentage';
import { HeaderCards } from './HeaderCards';
import { Attendance } from './Attendance';
import { Accounts } from './Accounts';
import { UpcomingEvents } from './UpcomingEvents';
import { PageHeader } from '@/components/PageHeader';

export function DashboardContent() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 min-h-full mb-20">
      <PageHeader
        title="Welcome Back, Jack Miller"
        subtitle="Let's dive in and get things done."
        rightButtons={
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
            <span className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 shadow-sm p-2 rounded-sm flex justify-center items-center gap-2 font-semibold">
              <Calendar className="shrink-0" />
              <span className="whitespace-nowrap">
                May, 01 2024 to May, 30 2024
              </span>
            </span>
            <Button variant="theme" className="w-full sm:w-auto">
              Export report
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 min-h-full mt-6">
        <div className="lg:col-span-3 flex flex-col gap-3">
          <HeaderCards />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            <Attendance />
            <div className="md:col-span-2 flex flex-col gap-3">
              <Accounts />
              <UpcomingEvents />
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last mb-6 lg:mb-0">
          <ExamsPercentage />
        </div>
      </div>
    </div>
  );
}

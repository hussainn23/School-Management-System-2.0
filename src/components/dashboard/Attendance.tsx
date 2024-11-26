import { lazy } from 'react';
const DoughnutChart = lazy(() => import("../../charts/Doughnut"))
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const attendanceData = [
  { name: 'Present', value: 1754, color: '#4CAF50' },
  { name: 'Absent', value: 1254, color: '#F44336' },
  { name: 'On Leave', value: 878, color: '#2196F3' },
];

export function Attendance() {
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      cutout: '75%',
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-sm shadow-md min-h-full">
      <div className="flex justify-between items-center w-full shadow-sm p-4 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-lg">
          Attendance
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
      <div className="p-5">
        <DoughnutChart
          data={chartData}
          options={chartOptions}
          width="300px"
          height="300px"
          centerText="Total Present"
          total={7595}
        />
      </div>

      <div className="flex flex-col gap-2 mt-3 p-4">
        {attendanceData.map((attendance, i) => (
          <div
            className="flex flex-col shadow-sm border border-gray-200 dark:border-gray-700 rounded-md p-3"
            key={i}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm flex items-center gap-2 text-gray-800 dark:text-gray-100">
                {attendance.name}
              </span>
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {attendance.value}
              </span>
            </div>
            <div className="flex text-xs gap-2 ml-3">
              <span className="text-gray-500 dark:text-gray-400">
                Increased By
              </span>
              <span className="text-[#735DFF]">0.54%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { lazy, useMemo } from 'react';
const DoughnutChart = lazy(() => import('../../charts/Doughnut'));
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const attendanceData = [
	{ name: 'Present', value: 1754, color: '#4CAF50' },
	{ name: 'Absent', value: 1254, color: '#F44336' },
	{ name: 'On Leave', value: 878, color: '#2196F3' },
];

export function Attendance() {
	const chartData = useMemo(
		() => [
			{ name: 'Present', value: 1754, color: '#4CAF50' },
			{ name: 'Absent', value: 1254, color: '#F44336' },
			{ name: 'On Leave', value: 878, color: '#2196F3' },
		],
		[]
	);

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
			<div className="p-5">
				<DoughnutChart
					data={chartData}
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

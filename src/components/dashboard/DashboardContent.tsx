import { Calendar, ChevronDown, ChevronUp, DollarSign, Edit, Eye, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DoughnutChart from '@/charts/Doughnut';
import CombinedChart from '@/charts/AccountChart';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { ExamsPercentage } from './ExamPercentage';

const attendanceData = [
  { name: 'Present', value: 1754, color: '#4CAF50' },
  { name: 'Absent', value: 1254, color: '#F44336' },
  { name: 'On Leave', value: 878, color: '#2196F3' },
];




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

export function DashboardContent() {
  return (
    <div className="p-6 bg-gray-50 min-h-full mb-20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Welcome Back, Jack Miller</h2>
          <p className="text-gray-600 text-xs">Let's dive in and get things done.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 bg-white shadow-sm p-2 rounded-sm flex justify-center items-center gap-2 font-semibold">
            <Calendar />
            May, 01 2024 to May, 30 2024
          </span>
          <Button variant="theme">Export report</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 min-h-full">
        <div className="col-span-3 flex flex-col gap-3">
          <HeaderCards />
          <div className="grid grid-cols-3 gap-3 w-full ">
            <AttendanceData />
            <div className="col-span-2 flex flex-col gap-3">
                <Accounts />
                <UpcomingEvents />
            </div>
          </div>
        </div>
        <div className="">
            <ExamsPercentage />
        </div>
      </div>
    </div>
  );
}

function HeaderCards() {
  return (
    <div className="flex justify-between items-center w-full gap-4">
      <div className="flex flex-col gap-2 w-full p-4 bg-white rounded-sm shadow-md">
        <div className="flex justify-between items-center ">
          <h4 className="text-gray-800 font-semibold text-lg">
            Total Students
          </h4>
          <MessageSquare
            size={35}
            className={`bg-theme p-2 rounded-full text-white`}
          />
        </div>
        <h5 className="font-light text-3xl">1,290</h5>
        <div className="flex justify-between items-center mt-2">
          <Link to={'#'} className="text-sm text-muted-foreground underline">
            {' '}
            View all students
          </Link>
          <p className="text-green-500 text-sm">0.29%</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full p-4 bg-white rounded-sm shadow-md">
        <div className="flex justify-between items-center ">
          <h4 className="text-gray-800 font-semibold text-lg">
            Total Teachers
          </h4>
          <DollarSign
            size={35}
            className={`bg-orange-400 p-2 rounded-full text-white`}
          />
        </div>
        <h5 className="font-light text-3xl">120</h5>
        <div className="flex justify-between items-center mt-2">
          <Link to={'#'} className="text-sm text-muted-foreground underline">
            {' '}
            View all teachers
          </Link>
          <p className="text-red-500 text-sm">3.45%</p>
        </div>
      </div>
    </div>
  );
}

function AttendanceData() {
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
    <div className="flex flex-col bg-white rounded-sm shadow-md min-h-full">
      <div className="flex justify-between items-center w-full shadow-sm p-4">
        <h4 className="text-gray-800 font-semibold text-lg">Attendace</h4>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 text-sm text-muted-foreground">
            Sort By <ChevronDown size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Ascending</DropdownMenuItem>
            <DropdownMenuItem>Descending</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="p-5">
        <DoughnutChart
          data={chartData}
          options={chartOptions}
          width="300px"
          height="300px"
          backgroundColor="#ffffff"
          centerText="Total Present"
          total={7595}
        />
      </div>

      <div className="flex flex-col gap-2 mt-3 p-4">
        {attendanceData.map((attendance, i) => (
          <div className="flex flex-col shadow-sm" key={i}>
            <div className="flex justify-between items-center">
              <span
                className="text-sm flex items-center gap-2"
                id="attendanceLabel"
              >
                {attendance.name}
              </span>
              <span className="text-sm">{attendance.value}</span>
            </div>
            <div className="flex text-xs gap-2 ml-3">
              <span className="text-muted-foreground">Increased By</span>
              <span className={`text-[#735DFF]`}>0.54%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Accounts() {

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const barData = [3000, 4000, 3200, 5000, 2800, 4500, 3900];
    const lineData = [3500, 4200, 3400, 4700, 3000, 4800, 3700];

  return (
    <div className="flex flex-col bg-white rounded-sm shadow-md gap-3">
      <div className="flex justify-between items-center w-full shadow-sm p-4">
        <h4 className="text-gray-800 font-semibold text-lg">Accounts</h4>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 text-sm text-muted-foreground">
            Sort By <ChevronDown size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Ascending</DropdownMenuItem>
            <DropdownMenuItem>Descending</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex justify-between items-center w-full p-4 gap-3">
        <div className="flex flex-col gap-3 w-full bg-gray-50 rounded-sm shadow-sm p-3">
          <div className="flex justify-between items-center ">
            <h4 className="text-gray-800 font-light text-[15px]">
              Pending Amount
            </h4>
            <span className="flex justify-center items-center gap-1 text-green-500 text-sm">
              <span> 0.54%</span>
              <ChevronUp className="text-green-500" size={16} />
            </span>
          </div>
          <h5 className="font-light text-xl">Pkr, 120</h5>
        </div>
        <div className="flex flex-col gap-3 w-full bg-gray-50 rounded-sm shadow-sm p-3">
          <div className="flex justify-between items-center ">
            <h4 className="text-gray-800 font-light text-[15px]">
              Received Amount
            </h4>
            <span className="flex justify-center items-center gap-1 text-red-500 text-sm">
              <span> 0.54%</span>
              <ChevronDown className="text-red-500" size={16} />
            </span>
          </div>
          <h5 className="font-light text-xl">12,326</h5>
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


function UpcomingEvents(){
    return (
      <Card className="shadow-md rounded-sm">
        <CardHeader className="flex flex-row justify-between items-center p-4 shadow-sm">
          <CardTitle className="text-gray-800 text-lg">
            Upcoming Events
          </CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search Here" className="w-48 h-8" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1 text-sm text-muted-foreground">
                Sort By <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Ascending</DropdownMenuItem>
                <DropdownMenuItem>Descending</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="grid grid-cols-12 gap-3 py-2 border-b text-sm font-medium">
            <span className="col-span-4">Name</span>
            <span className="col-span-2">Status</span>
            <span className="col-span-3">Date</span>
            <span className="col-span-3">Action</span>
          </div>
          {/* Table Rows */}
          <div className="space-y-1">
            {events.map((event, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 py-2 border-b">
                {/* Name and description column */}
                <div className="flex items-center gap-4 col-span-4">
                  <div className="bg-gray-100 p-2 rounded-md">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{event.name}</p>
                    <p className="text-gray-500 text-xs">{event.description}</p>
                  </div>
                </div>

                {/* Status column */}
                <div className="flex items-center gap-4 col-span-2">
                  <span
                    className={`p-1 w-20 text-center rounded-sm text-xs font-medium ${
                      event.status === 'Upcoming'
                        ? 'bg-purple-100 text-purple-500'
                        : event.status === 'Done'
                          ? 'bg-green-100 text-green-500'
                          : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                {/* Date column */}
                <span className="text-sm col-span-3 flex items-center">{event.date}</span>

                {/* Action buttons column */}
                <div className="flex gap-2 col-span-3">
                  <button className="bg-purple-100 p-2 rounded-full h-10 w-10 flex justify-center items-center">
                    <Eye className="text-purple-500" size={15} />
                  </button>
                  <button className="bg-orange-100 p-2 rounded-full h-10 w-10 flex justify-center items-center">
                    <Edit className="text-orange-500" size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
}
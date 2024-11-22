import { MessageSquare, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeaderCards() {
  return (
    <div className="flex justify-between items-center w-full gap-4">
      {/* Total Students Card */}
      <div className="flex flex-col gap-2 w-full p-4 bg-white dark:bg-gray-800 rounded-sm shadow-md">
        <div className="flex justify-between items-center">
          <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-lg">
            Total Students
          </h4>
          <MessageSquare
            size={35}
            className="bg-theme dark:bg-blue-600 p-2 rounded-full text-white"
          />
        </div>
        <h5 className="font-light text-3xl text-gray-900 dark:text-gray-100">
          1,290
        </h5>
        <div className="flex justify-between items-center mt-2">
          <Link
            to="#"
            className="text-sm text-gray-600 dark:text-gray-400 underline"
          >
            View all students
          </Link>
          <p className="text-green-500 text-sm">0.29%</p>
        </div>
      </div>

      {/* Total Teachers Card */}
      <div className="flex flex-col gap-2 w-full p-4 bg-white dark:bg-gray-800 rounded-sm shadow-md">
        <div className="flex justify-between items-center">
          <h4 className="text-gray-800 dark:text-gray-100 font-semibold text-lg">
            Total Teachers
          </h4>
          <DollarSign
            size={35}
            className="bg-orange-400 dark:bg-orange-500 p-2 rounded-full text-white"
          />
        </div>
        <h5 className="font-light text-3xl text-gray-900 dark:text-gray-100">
          120
        </h5>
        <div className="flex justify-between items-center mt-2">
          <Link
            to="#"
            className="text-sm text-gray-600 dark:text-gray-400 underline"
          >
            View all teachers
          </Link>
          <p className="text-red-500 text-sm">3.45%</p>
        </div>
      </div>
    </div>
  );
}

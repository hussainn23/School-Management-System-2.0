import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const grades = [
  { name: '10th', value: 80, color: '#7C4DFF' },
  { name: '9th', value: 80, color: '#FF5722' },
  { name: '8th', value: 80, color: '#4CAF50' },
  { name: '7th', value: 80, color: '#2196F3' },
  { name: '6th', value: 80, color: '#00BCD4' },
  { name: '5th', value: 80, color: '#FF9800' },
  { name: '4th', value: 80, color: '#9C27B0' },
  { name: '3rd', value: 80, color: '#3F51B5' },
  { name: '2nd', value: 80, color: '#673AB7' },
  { name: '1st', value: 80, color: '#E91E63' },
];

const chartData = {
  datasets: [
    {
      data: [30, 20, 40, 10],
      backgroundColor: ['#4CAF50', '#9C27B0', '#FF5722', '#3F51B5'],
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
    },
  ],
};

const chartOptions = {
  responsive: true,
  cutout: '75%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export function ExamsPercentage() {
  return (
    <Card className="shadow-md rounded-sm min-h-full bg-white dark:bg-gray-800">
      <CardHeader className="p-4">
        <CardTitle className="text-lg text-gray-800 dark:text-gray-100">
          Exams Percentage
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="w-60 h-48 relative">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute top-24 left-10 flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Percentage
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                80%
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 border rounded-sm border-gray-300 dark:border-gray-700">
          {grades.map((grade) => (
            <div
              key={grade.name}
              className="flex items-center justify-between border-b p-5 border-gray-300 dark:border-gray-700"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: grade.color }}
                ></span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  {grade.name}
                </span>
              </div>
              <Progress
                value={grade.value}
                className="flex-1 mx-2"
                indicatorColor={grade.color}
              />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {grade.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

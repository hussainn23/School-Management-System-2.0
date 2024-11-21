import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type CombinedChartProps = {
  labels: string[]; 
  barData: number[]; 
  lineData: number[];
  barColor?: string; 
  lineColor?: string;
};

const CombinedChart: React.FC<CombinedChartProps> = ({
  labels,
  barData,
  lineData,
  barColor = '#735DFF', 
  lineColor = '#FF5733',
}) => {

  const data: ChartData<'bar' | 'line'> = {
    labels,
    datasets: [
      {
        type: 'bar' as const, 
        label: 'Bar Dataset',
        data: barData,
        backgroundColor: barColor,
        borderRadius: 4, 
        barPercentage: 0.5, 
      },
      {
        type: 'line' as const, 
        label: 'Line Dataset',
        data: lineData,
        borderColor: lineColor,
        borderWidth: 2,
        fill: false,
        tension: 0.4, 
        pointRadius: 0, 
      },
    ],
  };

  // Define chart options
  const options: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: '#A8A8A8', 
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#F0F0F0', 
        },
        ticks: {
          color: '#A8A8A8', 
          font: {
            size: 12,
          },
          stepSize: 1000, 
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        titleColor: '#FFFFFF', 
        bodyColor: '#FFFFFF', 
      },
    },
  };

  return (
    <div className="w-[600px] h-[170px] mx-auto my-5">
      {' '}
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default CombinedChart;

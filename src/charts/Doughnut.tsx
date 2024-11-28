import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor?: string[];
      borderWidth?: number;
      hoverBackgroundColor?: string[];
    }[];
  };
  options?: ChartOptions<'doughnut'>;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  total?: number;
  centerText?: string;
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  total,
  centerText,
  data,
  options,
  width = '50%',
  height = '400px',
}) => {
  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        borderRadius: '8px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <Doughnut data={data} options={options} />

      <div
        style={{
          position: 'absolute',
          textAlign: 'center',
        }}
      >
        <p>{centerText}</p>
        <p className='text-2xl'>{total}</p>
      </div>
    </div>
  );
};

export default DoughnutChart;

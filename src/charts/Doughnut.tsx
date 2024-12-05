import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

type DoughnutChartProps = {
	data: Array<{ name: string; value: number; color: string }>;
	width?: string | number;
	height?: string | number;
	total?: number | string;
	centerText?: string;
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({
	data,
	width = '50%',
	height = 400,
	total,
	centerText,
}) => {
	const validData = Array.isArray(data) && data.length > 0;

	return (
		<div style={{ width, height, position: 'relative' }}>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					{validData && (
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={80}
							paddingAngle={5}
							dataKey="value"
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.color}
								/>
							))}
						</Pie>
					)}
				</PieChart>
			</ResponsiveContainer>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					textAlign: 'center',
				}}
			>
				<p>{centerText}</p>
				<p className="text-2xl">{total}</p>
			</div>
		</div>
	);
};

export default DoughnutChart;

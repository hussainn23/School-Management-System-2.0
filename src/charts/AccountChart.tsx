import React from 'react';
import {
	ComposedChart,
	Bar,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

type CombinedChartProps = {
	data: Array<{ name: string; bar: number; line: number }>;
	barColor?: string;
	lineColor?: string;
};

const CombinedChart: React.FC<CombinedChartProps> = ({
	data,
	barColor = '#735DFF',
	lineColor = '#FF5733',
}) => {
	return (
		<ResponsiveContainer width="100%" height={170}>
			<ComposedChart data={data}>
				<CartesianGrid strokeDasharray="3 3" vertical={false} />
				<XAxis
					dataKey="name"
					tick={{ fill: '#A8A8A8', fontSize: 12 }}
				/>
				<YAxis tick={{ fill: '#A8A8A8', fontSize: 12 }} />
				<Tooltip
					contentStyle={{
						backgroundColor: 'rgba(0, 0, 0, 0.7)',
						color: '#FFFFFF',
					}}
				/>
				<Bar
					dataKey="bar"
					fill={barColor}
					radius={[4, 4, 0, 0]}
					barSize={20}
				/>
				<Line
					type="monotone"
					dataKey="line"
					stroke={lineColor}
					strokeWidth={2}
					dot={false}
				/>
			</ComposedChart>
		</ResponsiveContainer>
	);
};

export default CombinedChart;

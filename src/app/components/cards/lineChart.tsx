'use client';

import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip, TooltipProps } from "recharts";
import { ChartDataProps } from "../interface";
import Image from "next/image";

const CustomTooltip = ({ 
    active, 
    payload, 
    label 
}: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">{label}</p>
                <p className="text-sm text-purple-600">
                    numberOfStudent: {payload[0].value === 0 ? payload[1].value : payload[0].value}
                </p>
            </div>
        );
    }
    return null;
};

export const Chart = ({data, percentile}: ChartDataProps) => {
    // Transform data to have consistent structure
    console.log(data);
    const formattedData = [
        { x: 0, value: 0 },
        { x: 25, value: 25 },
        { x: 50, value: 50 },
        { x: 75, value: 25 },
        { x: 100, value: 10 }
    ];

    return (
        <div className="border rounded-xl px-7 py-10" suppressHydrationWarning>
            <div className="flex justify-between">
                <div className="space-y-6">
                    <h2 className="text-xl font-bold" suppressHydrationWarning>Comparison Graph</h2>
                    <p className="text-gray-500 text-xl" suppressHydrationWarning>
                        <strong>You scored {percentile}% percentile</strong> which is {percentile < 72 ? 'lower' : 'higher' } than the <br /> average percentile 72% of all the engineers who took this assessment
                    </p>
                </div>
                <Image 
                    src="/assets/chartt.png" 
                    className="w-14 h-14 rounded-full p-2 bg-gray-100 border border-b-gray-500" 
                    alt="Line Chart" 
                    width={40} 
                    height={40}
                    suppressHydrationWarning 
                />
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                    <XAxis 
                        dataKey="x" 
                        type="number" 
                        domain={[0, 100]}
                        tickCount={5}
                    />
                    {/* <YAxis /> */}
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#8b5cf6" 
                        strokeWidth={1}
                        dot={{ r: 7, fill: '#ffffff', stroke: "#8b5cf6" }}
                        
                    />
                    <Line 
                        type="monotone"
                        data={[{ x: percentile, value: 4 }, { x: percentile, value: 100 }]}
                        dataKey="value"
                        stroke="#848a97fa"
                        strokeWidth={1}
                        dot={{r: 7, fill: '#ffffff', stroke: "#848a97fa"}}
                    />
                    <Line 
                        type="monotone"
                        // label={{ value: 'average percentile', position: 'bottom' }}
                        data={[{ x: percentile, value: 4 }, { x: 100, value: 4 }]}
                        dataKey="value"
                        stroke="#848a97fa"
                        strokeWidth={1}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}; 
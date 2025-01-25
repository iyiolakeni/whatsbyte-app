'use client';

import { Line, LineChart, ResponsiveContainer } from "recharts";
import { ChartDataProps } from "../interface";

export const Chart = ({data, percentile}: ChartDataProps) => {
    return (
        <div className="border rounded-xl px-7 py-10">
            <div className="flex">
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Comparison Graph</h2>
                    <p className="text-gray-500 text-md"><strong>You score {percentile}% percentile</strong> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={300} height={100} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}; 
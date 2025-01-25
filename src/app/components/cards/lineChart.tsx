'use client';

import { Line, LineChart, ResponsiveContainer } from "recharts";
import { ChartDataProps } from "../interface";

export const Chart = ({data}: ChartDataProps) => {
    return (
        <div className="border rounded-xl px-7 py-10">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={300} height={100} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="pv" stroke="#ff84d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}; 
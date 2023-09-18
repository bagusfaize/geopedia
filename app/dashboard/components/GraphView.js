import { useChartDataFormatter } from '@/app/hooks/useChartDataFormatter';
import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default function GraphView({data, isLoading}) {
    const { result: chartData } = useChartDataFormatter({data})
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <BarChart
                width={1000}
                height={300}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{background:'red'}} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2014" fill="#071952" />
                <Bar dataKey="2015" fill="#088395" />
                <Bar dataKey="2016" fill="#793FDF" />
                <Bar dataKey="2017" fill="#F39F5A" />
            </BarChart>
        </div>
    )
}

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Fallacy, CategoryType } from '../types';

interface StatsChartProps {
  data: Fallacy[];
}

const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  const counts = data.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = [
    { name: 'İtibar Yönetimi', value: counts[CategoryType.REPUTATION] || 0, color: '#f59e0b' }, // amber-500
    { name: 'İletişim Hataları', value: counts[CategoryType.COMMUNICATION] || 0, color: '#06b6d4' }, // cyan-500
    { name: 'Bilişsel Eğilimler', value: counts[CategoryType.COGNITIVE] || 0, color: '#f43f5e' }, // rose-500
  ];

  return (
    <div className="h-[300px] w-full bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700">
      <h3 className="text-center text-slate-300 font-semibold mb-4">Kategori Dağılımı</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0)" />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
            itemStyle={{ color: '#f8fafc' }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

const StatusPieChart = ({ data }) => {
  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-6
      h-[400px]
      "
    >
      <h2 className="font-bold text-xl mb-4">Status Distribution</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={120}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusPieChart;

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ApplicationsBarChart = ({ data }) => {
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
      <h2 className="text-xl font-bold mb-4">Application Funnel</h2>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationsBarChart;

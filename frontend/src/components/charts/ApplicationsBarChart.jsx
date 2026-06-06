// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// const ApplicationsBarChart = ({ data }) => {
//   return (
//     <div
//       className="
//       bg-slate-900
//       border
//       border-slate-800
//       rounded-3xl
//       p-6
//       h-[400px]
//       "
//     >
//       <h2 className="text-xl font-bold mb-4">Application Funnel</h2>

//       <ResponsiveContainer>
//         <BarChart data={data}>
//           <XAxis dataKey="name" />

//           <YAxis />

//           <Tooltip />

//           <Bar dataKey="value" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ApplicationsBarChart;

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = ["#6366f1", "#f59e0b", "#22c55e", "#ef4444"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="
        bg-[#0f172a]
        border
        border-slate-700
        rounded-xl
        px-4
        py-3
        shadow-xl
        "
      >
        <p className="text-white font-medium">{payload[0].payload.name}</p>

        <p className="text-[#818cf8]">{payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const ApplicationsBarChart = ({ data }) => {
  return (
    <div className="h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{
              fill: "#94a3b8",
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "#94a3b8",
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="value" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationsBarChart;
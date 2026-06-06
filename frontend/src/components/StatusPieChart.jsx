// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

// const StatusPieChart = ({ data }) => {
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
//       <h2 className="font-bold text-xl mb-4">Status Distribution</h2>

//       <ResponsiveContainer>
//         <PieChart>
//           <Pie data={data} dataKey="value" outerRadius={120}>
//             {data.map((entry, index) => (
//               <Cell key={index} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>

//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default StatusPieChart;

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#6366f1", "#f59e0b" ,"#22c55e", "#ef4444"];

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
        <p className="text-white font-medium">{payload[0].name}</p>

        <p className="text-[#818cf8]">{payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const StatusPieChart = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />

          <Legend verticalAlign="bottom" iconType="circle" />
        </PieChart>
      </ResponsiveContainer>

      <div
        className="
        absolute
        pointer-events-none
        "
      />
    </div>
  );
};

export default StatusPieChart;
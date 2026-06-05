import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/StatCard";
import { useEffect } from "react";

import useStatsStore from "../store/stateStore";

import { Briefcase, Calendar, Trophy, XCircle } from "lucide-react";

const Dashboard = () => {

const stats = useStatsStore((state) => state.stats);

const fetchStats = useStatsStore((state) => state.fetchStats);

useEffect(() => {
  fetchStats();
}, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

        <p className="text-slate-400 mt-2">
          Track your job applications efficiently.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >
        <StatCard
          title="Applications"
          value={stats.totalApplications}
          icon={<Briefcase />}
        />

        <StatCard
          title="Interviews"
          value={stats.interviews}
          icon={<Calendar />}
        />

        <StatCard title="Offers" value={stats.offers} icon={<Trophy />} />

        <StatCard title="Rejected" value={stats.rejected} icon={<XCircle />} />
      </div>

      <div
        className="
        mt-8
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
        "
      >
        <div
          className="
          xl:col-span-2
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          h-[400px]
          p-6
          "
        >
          Chart Area
        </div>

        <div
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-6
          "
        >
          Recent Activity
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

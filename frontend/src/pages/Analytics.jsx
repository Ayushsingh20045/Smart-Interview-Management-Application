import { useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import useJobStore from "../store/jobStore";

import AnalyticsCard from "../components/AnalyticsCard";

import StatusPieChart from "../components/StatusPieChart";

import ApplicationsBarChart from "../components/charts/ApplicationsBarChart";

import FunnelStats from "../components/charts/FunnelStats";

const Analytics = () => {
  const jobs = useJobStore((state) => state.jobs);

  const fetchJobs = useJobStore((state) => state.fetchJobs);

  useEffect(() => {
    fetchJobs();
  }, []);

  const applied = jobs.filter((job) => job.status === "Applied").length;

  const interview = jobs.filter((job) => job.status === "Interview").length;

  const offers = jobs.filter((job) => job.status === "Offer").length;

  const rejected = jobs.filter((job) => job.status === "Rejected").length;

  const successRate =
    jobs.length === 0 ? 0 : ((offers / jobs.length) * 100).toFixed(1);

  const pieData = [
    {
      name: "Applied",
      value: applied,
    },
    {
      name: "Interview",
      value: interview,
    },
    {
      name: "Offer",
      value: offers,
    },
    {
      name: "Rejected",
      value: rejected,
    },
  ];

  const chartData = [
    {
      name: "Applied",
      value: applied,
    },
    {
      name: "Interview",
      value: interview,
    },
    {
      name: "Offer",
      value: offers,
    },
    {
      name: "Rejected",
      value: rejected,
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Analytics</h1>

        <p className="text-slate-400 mt-2">Track your job search performance</p>
      </div>

      {/* KPI Cards */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >
        <AnalyticsCard title="Applications" value={jobs.length} />

        <AnalyticsCard title="Interviews" value={interview} />

        <AnalyticsCard title="Offers" value={offers} />

        <AnalyticsCard title="Success Rate" value={`${successRate}%`} />
      </div>

      {/* Charts */}

      <div
        className="
        mt-8
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
        "
      >
        <StatusPieChart data={pieData} />

        <ApplicationsBarChart data={chartData} />
      </div>

      {/* Funnel */}

      <div className="mt-8">
        <FunnelStats jobs={jobs} />
      </div>
    </DashboardLayout>
  );
};

export default Analytics;

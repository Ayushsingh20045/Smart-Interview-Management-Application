// import { useEffect } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";

// import useJobStore from "../store/jobStore";

// import AnalyticsCard from "../components/AnalyticsCard";

// import StatusPieChart from "../components/StatusPieChart";

// import ApplicationsBarChart from "../components/charts/ApplicationsBarChart";

// import FunnelStats from "../components/charts/FunnelStats";

// const Analytics = () => {
//   const jobs = useJobStore((state) => state.jobs);

//   const fetchJobs = useJobStore((state) => state.fetchJobs);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const applied = jobs.filter((job) => job.status === "Applied").length;

//   const interview = jobs.filter((job) => job.status === "Interview").length;

//   const offers = jobs.filter((job) => job.status === "Offer").length;

//   const rejected = jobs.filter((job) => job.status === "Rejected").length;

//   const successRate =
//     jobs.length === 0 ? 0 : ((offers / jobs.length) * 100).toFixed(1);

//   const pieData = [
//     {
//       name: "Applied",
//       value: applied,
//     },
//     {
//       name: "Interview",
//       value: interview,
//     },
//     {
//       name: "Offer",
//       value: offers,
//     },
//     {
//       name: "Rejected",
//       value: rejected,
//     },
//   ];

//   const chartData = [
//     {
//       name: "Applied",
//       value: applied,
//     },
//     {
//       name: "Interview",
//       value: interview,
//     },
//     {
//       name: "Offer",
//       value: offers,
//     },
//     {
//       name: "Rejected",
//       value: rejected,
//     },
//   ];

//   return (
//     <DashboardLayout>
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold">Analytics</h1>

//         <p className="text-slate-400 mt-2">Track your job search performance</p>
//       </div>

//       {/* KPI Cards */}

//       <div
//         className="
//         grid
//         grid-cols-1
//         md:grid-cols-2
//         xl:grid-cols-4
//         gap-6
//         "
//       >
//         <AnalyticsCard title="Applications" value={jobs.length} />

//         <AnalyticsCard title="Interviews" value={interview} />

//         <AnalyticsCard title="Offers" value={offers} />

//         <AnalyticsCard title="Success Rate" value={`${successRate}%`} />
//       </div>

//       {/* Charts */}

//       <div
//         className="
//         mt-8
//         grid
//         grid-cols-1
//         xl:grid-cols-2
//         gap-6
//         "
//       >
//         <StatusPieChart data={pieData} />

//         <ApplicationsBarChart data={chartData} />
//       </div>

//       {/* Funnel */}

//       <div className="mt-8">
//         <FunnelStats jobs={jobs} />
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Analytics;

import { useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import useJobStore from "../store/jobStore";

import AnalyticsCard from "../components/AnalyticsCard";

import StatusPieChart from "../components/StatusPieChart";

import ApplicationsBarChart from "../components/charts/ApplicationsBarChart";

import FunnelStats from "../components/charts/FunnelStats";

import { TrendingUp, Target, Briefcase, Trophy } from "lucide-react";

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
      {/* Hero */}

      <div
        className="
        relative
        overflow-hidden
        bg-[#1e293b]
        border
        border-slate-700/50
        rounded-3xl
        p-8
        mb-8
        "
      >
        <div
          className="
          absolute
          right-0
          top-0
          h-52
          w-52
          bg-[#6366f1]
          opacity-10
          blur-3xl
          rounded-full
          "
        />

        <div className="relative">
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[#6366f1]/15
            text-[#818cf8]
            text-sm
            "
          >
            <TrendingUp size={16} />
            Analytics Dashboard
          </div>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            mt-4
            "
          >
            Performance Analytics
          </h1>

          <p
            className="
            text-slate-400
            mt-3
            max-w-2xl
            "
          >
            Analyze your job search, track conversion rates, and identify
            opportunities for improvement.
          </p>
        </div>
      </div>

      {/* Summary Cards */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >
        <AnalyticsCard
          title="Applications"
          value={jobs.length}
          icon={<Briefcase />}
        />

        <AnalyticsCard title="Interviews" value={interview} icon={<Target />} />

        <AnalyticsCard title="Offers" value={offers} icon={<Trophy />} />

        <AnalyticsCard
          title="Success Rate"
          value={`${successRate}%`}
          icon={<TrendingUp />}
        />
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
        <div
          className="
          bg-[#1e293b]
          border
          border-slate-700/50
          rounded-3xl
          p-6
          "
        >
          <h2
            className="
            text-xl
            font-semibold
            mb-6
            "
          >
            Application Status
          </h2>

          <StatusPieChart data={pieData} />
        </div>

        <div
          className="
          bg-[#1e293b]
          border
          border-slate-700/50
          rounded-3xl
          p-6
          "
        >
          <h2
            className="
            text-xl
            font-semibold
            mb-6
            "
          >
            Stage Distribution
          </h2>

          <ApplicationsBarChart data={chartData} />
        </div>
      </div>

      {/* Funnel */}

      <div
        className="
        mt-8
        bg-[#1e293b]
        border
        border-slate-700/50
        rounded-3xl
        p-6
        "
      >
        <div className="mb-6">
          <h2
            className="
            text-2xl
            font-semibold
            "
          >
            Conversion Funnel
          </h2>

          <p
            className="
            text-slate-400
            mt-2
            "
          >
            Track progression from application to offer.
          </p>
        </div>

        <FunnelStats jobs={jobs} />
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
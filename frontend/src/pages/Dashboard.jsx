// import { useEffect } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";

// import StatCard from "../components/StatCard";

// import useStatsStore from "../store/stateStore";

// import { Briefcase, Calendar, Trophy, XCircle, TrendingUp } from "lucide-react";

// const Dashboard = () => {
//   const stats = useStatsStore((state) => state.stats);

//   const fetchStats = useStatsStore((state) => state.fetchStats);

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   return (
//     <DashboardLayout>
//       {/* Hero Section */}

//       <div
//         className="
//         relative
//         overflow-hidden
//         rounded-3xl
//         border
//         border-slate-700/50
//         bg-[#1e293b]
//         p-8
//         mb-8
//         "
//       >
//         <div
//           className="
//           absolute
//           right-0
//           top-0
//           h-64
//           w-64
//           bg-[#6366f1]
//           opacity-10
//           blur-3xl
//           rounded-full
//           "
//         />

//         <div className="relative z-10">
//           <div
//             className="
//             inline-flex
//             items-center
//             gap-2
//             px-4
//             py-2
//             rounded-full
//             bg-[#6366f1]/20
//             text-[#818cf8]
//             text-sm
//             font-medium
//             "
//           >
//             <TrendingUp size={16} />
//             Job Search Analytics
//           </div>

//           <h1
//             className="
//             text-3xl
//             md:text-5xl
//             font-bold
//             text-white
//             mt-4
//             "
//           >
//             Welcome Back 👋
//           </h1>

//           <p
//             className="
//             text-slate-400
//             mt-3
//             text-lg
//             max-w-2xl
//             "
//           >
//             Track applications, manage interviews, and accelerate your career
//             journey.
//           </p>
//         </div>
//       </div>

//       {/* Stats */}

//       <div
//         className="
//         grid
//         grid-cols-1
//         sm:grid-cols-2
//         xl:grid-cols-4
//         gap-6
//         "
//       >
//         <StatCard
//           title="Applications"
//           value={stats.totalApplications}
//           icon={<Briefcase />}
//         />

//         <StatCard
//           title="Interviews"
//           value={stats.interviews}
//           icon={<Calendar />}
//         />

//         <StatCard title="Offers" value={stats.offers} icon={<Trophy />} />

//         <StatCard title="Rejected" value={stats.rejected} icon={<XCircle />} />
//       </div>

//       {/* Dashboard Grid */}

//       <div
//         className="
//         mt-8
//         grid
//         grid-cols-1
//         xl:grid-cols-3
//         gap-6
//         "
//       >
//         {/* Analytics */}

//         <div
//           className="
//           xl:col-span-2
//           bg-[#1e293b]
//           border
//           border-slate-700/50
//           rounded-3xl
//           p-6
//           shadow-xl
//           shadow-black/10
//           "
//         >
//           <div
//             className="
//             flex
//             items-center
//             justify-between
//             mb-6
//             "
//           >
//             <div>
//               <h2
//                 className="
//                 text-xl
//                 font-bold
//                 text-white
//                 "
//               >
//                 Performance Overview
//               </h2>

//               <p
//                 className="
//                 text-slate-400
//                 mt-1
//                 "
//               >
//                 Application performance insights
//               </p>
//             </div>

//             <div
//               className="
//               px-4
//               py-2
//               rounded-xl
//               bg-[#6366f1]/20
//               text-[#818cf8]
//               "
//             >
//               This Month
//             </div>
//           </div>

//           <div
//             className="
//             h-[350px]
//             rounded-2xl
//             border
//             border-dashed
//             border-slate-700
//             flex
//             items-center
//             justify-center
//             text-slate-500
//             "
//           >
//             Analytics Chart
//           </div>
//         </div>

//         {/* Activity */}

//         <div
//           className="
//           bg-[#1e293b]
//           border
//           border-slate-700/50
//           rounded-3xl
//           p-6
//           shadow-xl
//           shadow-black/10
//           "
//         >
//           <h2
//             className="
//             text-xl
//             font-bold
//             text-white
//             "
//           >
//             Recent Activity
//           </h2>

//           <p
//             className="
//             text-slate-400
//             mt-1
//             mb-6
//             "
//           >
//             Latest updates
//           </p>

//           <div className="space-y-4">
//             <div
//               className="
//               flex
//               gap-4
//               items-start
//               "
//             >
//               <div
//                 className="
//                 h-3
//                 w-3
//                 rounded-full
//                 bg-green-500
//                 mt-2
//                 "
//               />

//               <div>
//                 <p className="text-white">Interview scheduled</p>

//                 <p
//                   className="
//                   text-slate-500
//                   text-sm
//                   "
//                 >
//                   2 hours ago
//                 </p>
//               </div>
//             </div>

//             <div
//               className="
//               flex
//               gap-4
//               items-start
//               "
//             >
//               <div
//                 className="
//                 h-3
//                 w-3
//                 rounded-full
//                 bg-[#6366f1]
//                 mt-2
//                 "
//               />

//               <div>
//                 <p className="text-white">New application added</p>

//                 <p
//                   className="
//                   text-slate-500
//                   text-sm
//                   "
//                 >
//                   Today
//                 </p>
//               </div>
//             </div>

//             <div
//               className="
//               flex
//               gap-4
//               items-start
//               "
//             >
//               <div
//                 className="
//                 h-3
//                 w-3
//                 rounded-full
//                 bg-red-500
//                 mt-2
//                 "
//               />

//               <div>
//                 <p className="text-white">Application closed</p>

//                 <p
//                   className="
//                   text-slate-500
//                   text-sm
//                   "
//                 >
//                   Yesterday
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;

import { useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/StatCard";

import useStatsStore from "../store/stateStore";

import { Briefcase, Calendar, Trophy, XCircle, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = useStatsStore((state) => state.stats);

  const fetchStats = useStatsStore((state) => state.fetchStats);

  useEffect(() => {
    fetchStats();
  }, []);

  const interviewRate = stats.totalApplications
    ? ((stats.interviews / stats.totalApplications) * 100).toFixed(0)
    : 0;

  const offerRate = stats.totalApplications
    ? ((stats.offers / stats.totalApplications) * 100).toFixed(0)
    : 0;

  return (
    <DashboardLayout>
      {/* Hero Section */}

      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-700/50
        bg-[#1e293b]/80
        backdrop-blur-xl
        p-8
        mb-8
        "
      >
        <div
          className="
          absolute
          right-0
          top-0
          h-64
          w-64
          bg-[#6366f1]
          opacity-10
          blur-3xl
          rounded-full
          "
        />

        <div className="relative z-10">
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[#6366f1]/20
            text-[#818cf8]
            text-sm
            font-medium
            "
          >
            <TrendingUp size={16} />
            Job Search Analytics
          </div>

          <h1
            className="
            text-3xl
            md:text-5xl
            font-bold
            text-white
            mt-4
            "
          >
            Welcome Back 👋
          </h1>

          <p
            className="
            text-slate-400
            mt-3
            text-lg
            max-w-2xl
            "
          >
            Track applications, manage interviews, and accelerate your career
            journey.
          </p>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
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

      {/* Main Grid */}

      <div
        className="
        mt-8
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
        "
      >
        {/* Career Progress */}
        {/* Career Progress */}

        <div
          className="
  xl:col-span-2
  bg-[#1e293b]/80
  backdrop-blur-xl
  border
  border-slate-700/50
  rounded-3xl
  p-6
  relative
  overflow-hidden
  "
        >
          <div
            className="
    absolute
    right-0
    top-0
    h-40
    w-40
    bg-[#6366f1]
    opacity-10
    blur-3xl
    rounded-full
    "
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Career Progress</h2>

                <p className="text-slate-400 mt-1">Track your hiring journey</p>
              </div>

              <div
                className="
        px-4
        py-2
        rounded-xl
        bg-green-500/10
        text-green-400
        border
        border-green-500/20
        "
              >
                Active
              </div>
            </div>

            {/* Stats */}

            <div
              className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-5
      "
            >
              <div
                className="
        bg-[#0f172a]
        border
        border-slate-700/50
        rounded-2xl
        p-5
        "
              >
                <div className="flex justify-between items-center">
                  <p className="text-slate-400">Applications</p>

                  <Briefcase size={20} className="text-[#6366f1]" />
                </div>

                <h3 className="text-4xl font-bold mt-4">
                  {stats.totalApplications}
                </h3>

                <p className="text-xs text-slate-500 mt-2">Total submitted</p>
              </div>

              <div
                className="
        bg-[#0f172a]
        border
        border-slate-700/50
        rounded-2xl
        p-5
        "
              >
                <div className="flex justify-between items-center">
                  <p className="text-slate-400">Interviews</p>

                  <Calendar size={20} className="text-yellow-400" />
                </div>

                <h3 className="text-4xl font-bold mt-4">{stats.interviews}</h3>

                <p className="text-yellow-400 text-sm mt-2">
                  {interviewRate}% conversion
                </p>
              </div>

              <div
                className="
        bg-[#0f172a]
        border
        border-slate-700/50
        rounded-2xl
        p-5
        "
              >
                <div className="flex justify-between items-center">
                  <p className="text-slate-400">Offers</p>

                  <Trophy size={20} className="text-green-400" />
                </div>

                <h3 className="text-4xl font-bold mt-4">{stats.offers}</h3>

                <p className="text-green-400 text-sm mt-2">
                  {offerRate}% success
                </p>
              </div>
            </div>

            {/* Journey Progress */}

            <div className="mt-10">
              <div className="flex justify-between mb-3">
                <span className="text-slate-400">Hiring Journey Progress</span>

                <span className="font-semibold text-[#818cf8]">
                  {offerRate}%
                </span>
              </div>

              <div className="h-3 bg-[#0f172a] rounded-full overflow-hidden">
                <div
                  className="
          h-full
          bg-gradient-to-r
          from-indigo-500
          via-purple-500
          to-green-500
          rounded-full
          transition-all
          duration-700
          "
                  style={{
                    width: `${Math.min(offerRate, 100)}%`,
                  }}
                />
              </div>
            </div>

            {/* Milestones */}

            <div
              className="
      mt-10
      flex
      flex-wrap
      gap-3
      "
            >
              <div
                className="
        px-4
        py-2
        rounded-xl
        bg-indigo-500/10
        border
        border-indigo-500/20
        text-indigo-400
        "
              >
                🎯 First Application
              </div>

              {stats.interviews > 0 && (
                <div
                  className="
          px-4
          py-2
          rounded-xl
          bg-yellow-500/10
          border
          border-yellow-500/20
          text-yellow-400
          "
                >
                  🎤 Interview Unlocked
                </div>
              )}

              {stats.offers > 0 && (
                <div
                  className="
          px-4
          py-2
          rounded-xl
          bg-green-500/10
          border
          border-green-500/20
          text-green-400
          "
                >
                  🏆 First Offer
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress Card */}

        <div
          className="
          bg-[#1e293b]/80
          backdrop-blur-xl
          border
          border-slate-700/50
          rounded-3xl
          p-6
          "
        >
          <h2
            className="
            text-xl
            font-bold
            "
          >
            Job Hunt Progress
          </h2>

          <p
            className="
            text-slate-400
            mt-1
            mb-6
            "
          >
            Your current pipeline
          </p>

          <div className="space-y-5">
            <div>
              <div
                className="
                flex
                justify-between
                mb-2
                "
              >
                <span>Applications</span>

                <span>{stats.totalApplications}</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full">
                <div
                  className="
                  h-2
                  rounded-full
                  bg-[#6366f1]
                  "
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>

            <div>
              <div
                className="
                flex
                justify-between
                mb-2
                "
              >
                <span>Interviews</span>

                <span>{stats.interviews}</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full">
                <div
                  className="
                  h-2
                  rounded-full
                  bg-yellow-500
                  "
                  style={{
                    width: `${interviewRate}%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div
                className="
                flex
                justify-between
                mb-2
                "
              >
                <span>Offers</span>

                <span>{stats.offers}</span>
              </div>

              <div className="h-2 bg-slate-800 rounded-full">
                <div
                  className="
                  h-2
                  rounded-full
                  bg-green-500
                  "
                  style={{
                    width: `${offerRate}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="
            mt-8
            p-4
            rounded-2xl
            bg-[#6366f1]/10
            border
            border-[#6366f1]/20
            "
          >
            <p className="text-slate-400 text-sm">
              Keep applying consistently.
            </p>

            <h3
              className="
              font-semibold
              mt-1
              "
            >
              Every application increases your chances 🚀
            </h3>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
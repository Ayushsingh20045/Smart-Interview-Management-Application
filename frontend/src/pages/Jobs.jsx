// // import { useEffect } from "react";

// // import DashboardLayout from "../layouts/DashboardLayout";

// // import JobForm from "../components/JobForm";

// // import useJobStore from "../store/jobStore";

// // const Jobs = () => {
// //   const jobs = useJobStore((state) => state.jobs);

// //   const fetchJobs = useJobStore((state) => state.fetchJobs);

// //   useEffect(() => {
// //     fetchJobs();
// //   }, []);

// //   return (
// //     <DashboardLayout>
// //       <h1 className="text-4xl font-bold mb-8">Jobs</h1>

// //       <JobForm />

// //       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
// //         {jobs.map((job) => (
// //           <div
// //             key={job._id}
// //             className="
// //             bg-slate-900
// //             p-6
// //             rounded-2xl
// //             "
// //           >
// //             <h2 className="font-bold text-xl">{job.company}</h2>

// //             <p className="text-slate-400">{job.role}</p>

// //             <span
// //               className="
// //               inline-block
// //               mt-4
// //               px-3
// //               py-1
// //               rounded-full
// //               bg-indigo-600
// //               "
// //             >
// //               {job.status}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </DashboardLayout>
// //   );
// // };

// // export default Jobs;

// import { useEffect, useState } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";

// import useJobStore from "../store/jobStore";

// import JobCard from "../components/JobCard";
// import JobForm from "../components/JobForm";

// const Jobs = () => {
//   const jobs = useJobStore((state) => state.jobs);

//   const fetchJobs = useJobStore((state) => state.fetchJobs);

//   const deleteJob = useJobStore((state) => state.deleteJob);

//   const [search, setSearch] = useState("");

//   const [statusFilter, setStatusFilter] = useState("All");

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch =
//       job.company.toLowerCase().includes(search.toLowerCase()) ||
//       job.role.toLowerCase().includes(search.toLowerCase());

//     const matchesStatus =
//       statusFilter === "All" ? true : job.status === statusFilter;

//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <DashboardLayout>
//       {/* Header */}

//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//         <div>
//           <h1 className="text-4xl font-bold">Jobs</h1>

//           <p className="text-slate-400 mt-2">Track all your job applications</p>
//         </div>
//       </div>

//       {/* Add Job */}

//       <div
//         className="
//         bg-slate-900
//         border
//         border-slate-800
//         rounded-3xl
//         p-6
//         "
//       >
//         <h2 className="text-xl font-semibold mb-4">Add New Job</h2>

//         <JobForm />
//       </div>

//       {/* Search & Filter */}

//       <div className="flex flex-col md:flex-row gap-4 mt-8">
//         <input
//           type="text"
//           placeholder="Search jobs..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="
//           flex-1
//           bg-slate-900
//           border
//           border-slate-800
//           rounded-2xl
//           px-4
//           py-3
//           outline-none
//           "
//         />

//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="
//           bg-slate-900
//           border
//           border-slate-800
//           rounded-2xl
//           px-4
//           py-3
//           "
//         >
//           <option>All</option>

//           <option>Applied</option>

//           <option>Interview</option>

//           <option>Offer</option>

//           <option>Rejected</option>
//         </select>
//       </div>

//       {/* Jobs Grid */}

//       <div
//         className="
//         mt-8
//         grid
//         grid-cols-1
//         md:grid-cols-2
//         xl:grid-cols-3
//         gap-6
//         "
//       >
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job) => (
//             <JobCard key={job._id} job={job} onDelete={deleteJob} />
//           ))
//         ) : (
//           <div
//             className="
//             col-span-full
//             bg-slate-900
//             border
//             border-slate-800
//             rounded-3xl
//             p-12
//             text-center
//             "
//           >
//             <h2 className="text-2xl font-bold">No Jobs Found</h2>

//             <p className="text-slate-400 mt-2">
//               Add your first job application.
//             </p>
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Jobs;

import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import useJobStore from "../store/jobStore";

import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";

import { Briefcase, Search, Filter, Plus } from "lucide-react";

const Jobs = () => {
  const jobs = useJobStore((state) => state.jobs);

  const fetchJobs = useJobStore((state) => state.fetchJobs);

  const deleteJob = useJobStore((state) => state.deleteJob);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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
          h-48
          w-48
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
            <Briefcase size={16} />
            Job Management
          </div>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            mt-4
            "
          >
            Job Applications
          </h1>

          <p
            className="
            text-slate-400
            mt-3
            "
          >
            Manage, search and track all your opportunities.
          </p>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        mb-8
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
          <p className="text-slate-400">Total Jobs</p>

          <h2 className="text-4xl font-bold mt-2">{jobs.length}</h2>
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
          <p className="text-slate-400">Showing</p>

          <h2 className="text-4xl font-bold mt-2">{filteredJobs.length}</h2>
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
          <p className="text-slate-400">Active Filter</p>

          <h2 className="text-2xl font-bold mt-2">{statusFilter}</h2>
        </div>
      </div>

      {/* Add Job */}

      <div
        className="
        bg-[#1e293b]
        border
        border-slate-700/50
        rounded-3xl
        p-6
        mb-8
        "
      >
        <div
          className="
          flex
          items-center
          gap-3
          mb-6
          "
        >
          <div
            className="
            h-10
            w-10
            rounded-xl
            bg-[#6366f1]/20
            flex
            items-center
            justify-center
            "
          >
            <Plus size={18} />
          </div>

          <h2 className="text-xl font-semibold">Add New Application</h2>
        </div>

        <JobForm />
      </div>

      {/* Filters */}

      <div
        className="
        bg-[#1e293b]
        border
        border-slate-700/50
        rounded-3xl
        p-5
        flex
        flex-col
        md:flex-row
        gap-4
        mb-8
        "
      >
        <div className="relative flex-1">
          <Search
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-500
            "
          />

          <input
            type="text"
            placeholder="Search company or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            pl-11
            pr-4
            py-3
            bg-[#0f172a]
            border
            border-slate-700
            rounded-2xl
            outline-none
            "
          />
        </div>

        <div className="relative">
          <Filter
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-500
            "
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="
            pl-11
            pr-6
            py-3
            bg-[#0f172a]
            border
            border-slate-700
            rounded-2xl
            outline-none
            "
          >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Jobs */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} onDelete={deleteJob} />
          ))
        ) : (
          <div
            className="
            col-span-full
            bg-[#1e293b]
            border
            border-slate-700/50
            rounded-3xl
            p-16
            text-center
            "
          >
            <h2 className="text-3xl font-bold">No Jobs Found</h2>

            <p
              className="
              text-slate-400
              mt-3
              "
            >
              Try adjusting your filters or add a new application.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Jobs;
// import { useEffect } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";

// import JobForm from "../components/JobForm";

// import useJobStore from "../store/jobStore";

// const Jobs = () => {
//   const jobs = useJobStore((state) => state.jobs);

//   const fetchJobs = useJobStore((state) => state.fetchJobs);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <DashboardLayout>
//       <h1 className="text-4xl font-bold mb-8">Jobs</h1>

//       <JobForm />

//       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
//         {jobs.map((job) => (
//           <div
//             key={job._id}
//             className="
//             bg-slate-900
//             p-6
//             rounded-2xl
//             "
//           >
//             <h2 className="font-bold text-xl">{job.company}</h2>

//             <p className="text-slate-400">{job.role}</p>

//             <span
//               className="
//               inline-block
//               mt-4
//               px-3
//               py-1
//               rounded-full
//               bg-indigo-600
//               "
//             >
//               {job.status}
//             </span>
//           </div>
//         ))}
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
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold">Jobs</h1>

          <p className="text-slate-400 mt-2">Track all your job applications</p>
        </div>
      </div>

      {/* Add Job */}

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
        "
      >
        <h2 className="text-xl font-semibold mb-4">Add New Job</h2>

        <JobForm />
      </div>

      {/* Search & Filter */}

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          flex-1
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          px-4
          py-3
          outline-none
          "
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          px-4
          py-3
          "
        >
          <option>All</option>

          <option>Applied</option>

          <option>Interview</option>

          <option>Offer</option>

          <option>Rejected</option>
        </select>
      </div>

      {/* Jobs Grid */}

      <div
        className="
        mt-8
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
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-12
            text-center
            "
          >
            <h2 className="text-2xl font-bold">No Jobs Found</h2>

            <p className="text-slate-400 mt-2">
              Add your first job application.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Jobs;
import { Building2, MapPin, Trash2 } from "lucide-react";

const JobCard = ({ job, onDelete }) => {
  const statusColor = {
    Applied: "bg-blue-500/20 text-blue-400",

    Interview: "bg-yellow-500/20 text-yellow-400",

    Offer: "bg-green-500/20 text-green-400",

    Rejected: "bg-red-500/20 text-red-400",
  };

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-6
      hover:border-indigo-500
      transition
      "
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{job.role}</h2>

          <div className="flex items-center gap-2 mt-2 text-slate-400">
            <Building2 size={16} />
            {job.company}
          </div>

          <div className="flex items-center gap-2 mt-2 text-slate-400">
            <MapPin size={16} />
            {job.location}
          </div>
        </div>

        <button onClick={() => onDelete(job._id)}>
          <Trash2 />
        </button>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span
          className={`px-4 py-2 rounded-full text-sm ${statusColor[job.status]}`}
        >
          {job.status}
        </span>

        <span className="text-slate-400">{job.salary}</span>
      </div>
    </div>
  );
};

export default JobCard;

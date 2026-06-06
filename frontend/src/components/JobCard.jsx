// import { Building2, MapPin, Trash2 } from "lucide-react";

// const JobCard = ({ job, onDelete }) => {
//   const statusColor = {
//     Applied: "bg-blue-500/20 text-blue-400",

//     Interview: "bg-yellow-500/20 text-yellow-400",

//     Offer: "bg-green-500/20 text-green-400",

//     Rejected: "bg-red-500/20 text-red-400",
//   };

//   return (
//     <div
//       className="
//       bg-slate-900
//       border
//       border-slate-800
//       rounded-3xl
//       p-6
//       hover:border-indigo-500
//       transition
//       "
//     >
//       <div className="flex justify-between">
//         <div>
//           <h2 className="text-xl font-bold">{job.role}</h2>

//           <div className="flex items-center gap-2 mt-2 text-slate-400">
//             <Building2 size={16} />
//             {job.company}
//           </div>

//           <div className="flex items-center gap-2 mt-2 text-slate-400">
//             <MapPin size={16} />
//             {job.location}
//           </div>
//         </div>

//         <button onClick={() => onDelete(job._id)}>
//           <Trash2 />
//         </button>
//       </div>

//       <div className="mt-6 flex justify-between items-center">
//         <span
//           className={`px-4 py-2 rounded-full text-sm ${statusColor[job.status]}`}
//         >
//           {job.status}
//         </span>

//         <span className="text-slate-400">{job.salary}</span>
//       </div>
//     </div>
//   );
// };

// export default JobCard;

import {
  Building2,
  MapPin,
  Trash2,
  IndianRupee,
  Briefcase,
} from "lucide-react";

const JobCard = ({ job, onDelete }) => {
  const statusStyles = {
    Applied: "bg-blue-500/15 text-blue-400 border border-blue-500/20",

    Interview: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",

    Offer: "bg-green-500/15 text-green-400 border border-green-500/20",

    Rejected: "bg-red-500/15 text-red-400 border border-red-500/20",
  };

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      bg-[#1e293b]
      border
      border-slate-700/50
      rounded-3xl
      p-6
      hover:border-[#6366f1]/50
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg
      shadow-black/10
      "
    >
      {/* Accent Glow */}

      <div
        className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        bg-[#6366f1]
        opacity-0
        blur-3xl
        group-hover:opacity-10
        transition-all
        duration-500
        rounded-full
        "
      />

      {/* Top */}

      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div
            className="
            h-14
            w-14
            rounded-2xl
            bg-[#6366f1]/15
            border
            border-[#6366f1]/20
            flex
            items-center
            justify-center
            "
          >
            <Briefcase size={24} className="text-[#818cf8]" />
          </div>

          <div>
            <h2
              className="
              text-xl
              font-bold
              text-white
              "
            >
              {job.role}
            </h2>

            <div
              className="
              flex
              items-center
              gap-2
              mt-2
              text-slate-400
              "
            >
              <Building2 size={16} />
              <span>{job.company}</span>
            </div>

            <div
              className="
              flex
              items-center
              gap-2
              mt-2
              text-slate-500
              "
            >
              <MapPin size={16} />
              <span>{job.location || "Remote"}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onDelete(job._id)}
          className="
          h-10
          w-10
          rounded-xl
          bg-red-500/10
          border
          border-red-500/20
          flex
          items-center
          justify-center
          text-red-400
          hover:bg-red-500/20
          transition-all
          "
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Divider */}

      <div
        className="
        h-px
        bg-slate-700/50
        my-5
        "
      />

      {/* Bottom */}

      <div
        className="
        flex
        items-center
        justify-between
        "
      >
        <span
          className={`
          px-4
          py-2
          rounded-full
          text-sm
          font-medium
          ${statusStyles[job.status]}
        `}
        >
          {job.status}
        </span>

        <div
          className="
          flex
          items-center
          gap-2
          text-white
          font-semibold
          "
        >
          <IndianRupee size={16} />

          <span>{job.salary || "Not specified"}</span>
        </div>
      </div>

      {/* Notes */}

      {job.notes && (
        <div
          className="
          mt-5
          p-4
          rounded-2xl
          bg-[#0f172a]
          border
          border-slate-700/50
          "
        >
          <p
            className="
            text-sm
            text-slate-400
            line-clamp-2
            "
          >
            {job.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobCard;

// import { useSortable } from "@dnd-kit/sortable";

// import { CSS } from "@dnd-kit/utilities";

// const KanbanCard = ({ job }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({
//       id: job._id,
//     });
// const style = {
//   transform: CSS.Transform.toString(transform),

//   transition: transition || "transform 150ms ease",
// };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="
//      bg-slate-800
// p-4
// rounded-2xl
// mb-3
// cursor-grab
// border
// border-slate-700
// hover:border-indigo-500
// hover:scale-[1.02]
// transition-all
//       "
//     >
//       <h3 className="font-semibold">{job.company}</h3>

//       <p className="text-slate-400 text-sm mt-1">{job.role}</p>
//     </div>
//   );
// };

// export default KanbanCard;

import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { Building2, MapPin, IndianRupee, GripVertical } from "lucide-react";

const KanbanCard = ({ job }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: job._id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),

    transition: transition || "transform 200ms ease",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
      relative
      bg-[#0f172a]
      border
      rounded-2xl
      p-4
      cursor-grab
      transition-all
      duration-200
      select-none

      ${
        isDragging
          ? `
          border-[#6366f1]
          shadow-xl
          shadow-indigo-500/20
          rotate-1
          scale-105
          z-50
          `
          : `
          border-slate-700/50
          hover:border-[#6366f1]/50
          hover:-translate-y-1
          `
      }
    `}
    >
      {/* Drag Handle */}

      <div
        className="
        absolute
        top-3
        right-3
        text-slate-500
        "
      >
        <GripVertical size={16} />
      </div>

      {/* Company */}

      <div className="mb-3">
        <h3
          className="
          text-white
          font-semibold
          text-lg
          pr-6
          "
        >
          {job.company}
        </h3>

        <p
          className="
          text-slate-400
          text-sm
          mt-1
          "
        >
          {job.role}
        </p>
      </div>

      {/* Meta */}

      <div
        className="
        space-y-2
        "
      >
        {job.location && (
          <div
            className="
            flex
            items-center
            gap-2
            text-slate-400
            text-sm
            "
          >
            <MapPin size={14} />

            <span>{job.location}</span>
          </div>
        )}

        {job.salary && (
          <div
            className="
            flex
            items-center
            gap-2
            text-slate-400
            text-sm
            "
          >
            <IndianRupee size={14} />

            <span>{job.salary}</span>
          </div>
        )}
      </div>

      {/* Footer */}

      <div
        className="
        mt-4
        pt-3
        border-t
        border-slate-700/50
        flex
        items-center
        gap-2
        "
      >
        <Building2
          size={14}
          className="
          text-[#818cf8]
          "
        />

        <span
          className="
          text-xs
          text-slate-500
          "
        >
          Application
        </span>
      </div>
    </div>
  );
};

export default KanbanCard;
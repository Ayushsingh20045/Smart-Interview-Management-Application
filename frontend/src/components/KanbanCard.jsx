

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Building2, MapPin, IndianRupee } from "lucide-react";

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
    transition: transition || "transform 150ms ease",
    opacity: isDragging ? 0.5 : 1,
  };

  const statusColors = {
    Applied: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    Interview: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    Offer: "bg-green-500/15 text-green-400 border-green-500/20",
    Rejected: "bg-red-500/15 text-red-400 border-red-500/20",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="
      touch-none
      select-none
      cursor-grab
      active:cursor-grabbing

      bg-[#1e293b]
      border
      border-slate-700/70
      rounded-3xl
      p-4

      hover:border-[#6366f1]
      hover:shadow-lg
      hover:shadow-indigo-500/10

      transition-all
      duration-300
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-bold text-white text-base leading-tight">
            {job.role}
          </h3>

          <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
            <Building2 size={14} />
            <span>{job.company}</span>
          </div>
        </div>

        <div
          className="
          h-10
          w-10
          rounded-xl
          bg-[#6366f1]/15
          flex
          items-center
          justify-center
          text-lg
          "
        >
          💼
        </div>
      </div>

      {/* Location */}

      {job.location && (
        <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
          <MapPin size={14} />
          <span>{job.location}</span>
        </div>
      )}

      {/* Salary */}

      {job.salary && (
        <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
          <IndianRupee size={14} />
          <span>{job.salary}</span>
        </div>
      )}

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between">
        <span
          className={`
          px-3
          py-1.5
          rounded-full
          text-xs
          font-medium
          border
          ${statusColors[job.status]}
          `}
        >
          {job.status}
        </span>

        <span className="text-xs text-slate-500">Drag to move →</span>
      </div>
    </div>
  );
};

export default KanbanCard;
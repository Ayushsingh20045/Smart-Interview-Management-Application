// import { useDroppable } from "@dnd-kit/core";

// import {
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";

// import KanbanCard from "./KanbanCard";

// const KanbanColumn = ({ title, jobs }) => {
//   const { setNodeRef } = useDroppable({
//     id: title,
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       className="
//       bg-slate-900
//       rounded-3xl
//       p-4
//       min-h-[70vh]
//       "
//     >
//       <h2 className="font-bold text-lg mb-4">{title}</h2>

//       <SortableContext
//         items={jobs.map((job) => job._id)}
//         strategy={verticalListSortingStrategy}
//       >
//         {jobs.map((job) => (
//           <KanbanCard key={job._id} job={job} />
//         ))}
//       </SortableContext>
//     </div>
//   );
// };

// export default KanbanColumn;

import { useDroppable } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ title, jobs }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  const statusConfig = {
    Applied: {
      color: "bg-blue-500",
      badge: "bg-blue-500/15 text-blue-400 border border-blue-500/20",
    },

    Interview: {
      color: "bg-yellow-500",
      badge: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",
    },

    Offer: {
      color: "bg-green-500",
      badge: "bg-green-500/15 text-green-400 border border-green-500/20",
    },

    Rejected: {
      color: "bg-red-500",
      badge: "bg-red-500/15 text-red-400 border border-red-500/20",
    },
  };

  const config = statusConfig[title] || statusConfig.Applied;

  return (
    <div
      ref={setNodeRef}
      className="
      bg-[#1e293b]
      border
      border-slate-700/50
      rounded-3xl
      overflow-hidden
      min-h-[550px]
      flex
      flex-col
      "
    >
      {/* Header */}

      <div
        className="
        px-5
        py-4
        border-b
        border-slate-700/50
        bg-[#1e293b]
        "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`
              w-3
              h-3
              rounded-full
              ${config.color}
            `}
            />

            <h2
              className="
              text-white
              font-semibold
              text-lg
              "
            >
              {title}
            </h2>
          </div>

          <span
            className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            ${config.badge}
          `}
          >
            {jobs.length}
          </span>
        </div>
      </div>

      {/* Cards */}

      <div
        className="
        flex-1
        p-4
        space-y-3
        "
      >
        <SortableContext
          items={jobs.map((job) => job._id)}
          strategy={verticalListSortingStrategy}
        >
          {jobs.length === 0 ? (
            <div
              className="
              border-2
              border-dashed
              border-slate-700
              rounded-2xl
              h-28
              flex
              items-center
              justify-center
              text-slate-500
              text-sm
              "
            >
              Drop jobs here
            </div>
          ) : (
            jobs.map((job) => <KanbanCard key={job._id} job={job} />)
          )}
        </SortableContext>
      </div>
    </div>
  );
};

export default KanbanColumn;
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

  return (
    <div
      ref={setNodeRef}
      className="
      bg-slate-900
      rounded-3xl
      p-4
      min-h-[70vh]
      "
    >
      <h2 className="font-bold text-lg mb-4">{title}</h2>

      <SortableContext
        items={jobs.map((job) => job._id)}
        strategy={verticalListSortingStrategy}
      >
        {jobs.map((job) => (
          <KanbanCard key={job._id} job={job} />
        ))}
      </SortableContext>
    </div>
  );
};

export default KanbanColumn;

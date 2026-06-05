import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

const KanbanCard = ({ job }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: job._id,
    });
const style = {
  transform: CSS.Transform.toString(transform),

  transition: transition || "transform 150ms ease",
};

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="
     bg-slate-800
p-4
rounded-2xl
mb-3
cursor-grab
border
border-slate-700
hover:border-indigo-500
hover:scale-[1.02]
transition-all
      "
    >
      <h3 className="font-semibold">{job.company}</h3>

      <p className="text-slate-400 text-sm mt-1">{job.role}</p>
    </div>
  );
};

export default KanbanCard;

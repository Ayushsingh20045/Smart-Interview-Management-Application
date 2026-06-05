import { useEffect, useState } from "react";

import {
  DndContext,
  closestCorners,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import DashboardLayout from "../layouts/DashboardLayout";

import useJobStore from "../store/jobStore";

import KanbanColumn from "../components/KanbanColumn";

const statuses = ["Applied", "Interview", "Offer", "Rejected"];

const Kanban = () => {
  const jobs = useJobStore((state) => state.jobs);

  const fetchJobs = useJobStore((state) => state.fetchJobs);

  const updateJob = useJobStore((state) => state.updateJob);

  const [activeJob, setActiveJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDragStart = (event) => {
    const job = jobs.find((j) => j._id === event.active.id);

    setActiveJob(job);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    setActiveJob(null);

    if (!over) return;

    const job = jobs.find((j) => j._id === active.id);

    if (!job) return;

    const targetStatus = statuses.includes(over.id) ? over.id : null;

    if (!targetStatus) return;

    if (job.status === targetStatus) return;

    await updateJob(job._id, {
      status: targetStatus,
    });
  };
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Kanban Board</h1>

        <p className="text-slate-400 mt-2">Drag jobs between stages</p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          "
        >
          {statuses.map((status) => (
            <KanbanColumn
              key={status}
              title={status}
              jobs={jobs.filter((job) => job.status === status)}
            />
          ))}
        </div>

        <DragOverlay>
          {activeJob ? (
            <div
              className="
              bg-slate-800
              border
              border-indigo-500
              shadow-2xl
              rounded-2xl
              p-4
              w-64
              rotate-2
              "
            >
              <h3 className="font-semibold">{activeJob.company}</h3>

              <p className="text-slate-400 text-sm mt-1">{activeJob.role}</p>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </DashboardLayout>
  );
};

export default Kanban;

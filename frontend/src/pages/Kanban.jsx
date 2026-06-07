// import { useEffect, useState } from "react";

// import {
//   DndContext,
//   closestCorners,
//   DragOverlay,
//   PointerSensor,
//   TouchSensor,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";

// import DashboardLayout from "../layouts/DashboardLayout";
// import useJobStore from "../store/jobStore";
// import KanbanColumn from "../components/KanbanColumn";

// const statuses = ["Applied", "Interview", "Offer", "Rejected"];

// const Kanban = () => {
//   const jobs = useJobStore((state) => state.jobs);
//   const fetchJobs = useJobStore((state) => state.fetchJobs);
//   const updateJob = useJobStore((state) => state.updateJob);

//   const [activeJob, setActiveJob] = useState(null);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 8,
//       },
//     }),

//     useSensor(TouchSensor, {
//       activationConstraint: {
//         delay: 200,
//         tolerance: 5,
//       },
//     }),
//   );

//   const handleDragStart = (event) => {
//     const job = jobs.find((j) => j._id === event.active.id);

//     if (job) {
//       setActiveJob(job);

//       // Mobile vibration feedback
//       if (navigator.vibrate) {
//         navigator.vibrate(50);
//       }
//     }
//   };

//   const handleDragEnd = async (event) => {
//     const { active, over } = event;

//     setActiveJob(null);

//     if (!over) return;

//     const job = jobs.find((j) => j._id === active.id);

//     if (!job) return;

//     const targetStatus = statuses.includes(over.id) ? over.id : null;

//     if (!targetStatus) return;

//     if (job.status === targetStatus) return;

//     await updateJob(job._id, {
//       status: targetStatus,
//     });
//   };

//   return (
//     <DashboardLayout>
//       {/* Header */}

//       <div className="mb-8">
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-sm font-medium mb-4">
//           Drag & Drop Workflow
//         </div>

//         <h1 className="text-3xl md:text-5xl font-bold text-white">
//           Kanban Board
//         </h1>

//         <p className="text-slate-400 mt-3 text-lg">
//           Manage your applications through every stage
//         </p>
//       </div>

//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCorners}
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//       >
//         {/* Mobile + Desktop Responsive */}

//         <div
//           className="
//           flex
//           xl:grid
//           xl:grid-cols-4
//           gap-5
//           overflow-x-auto
//           pb-4
//           scrollbar-thin
//           scrollbar-thumb-slate-700
//           "
//         >
//           {statuses.map((status) => (
//             <div
//               key={status}
//               className="
//               min-w-[320px]
//               xl:min-w-0
//               flex-shrink-0
//               "
//             >
//               <KanbanColumn
//                 title={status}
//                 jobs={jobs.filter((job) => job.status === status)}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Drag Preview */}

//         <DragOverlay>
//           {activeJob ? (
//             <div
//               className="
//               w-72
//               rounded-3xl
//               bg-[#1e293b]
//               border
//               border-[#6366f1]
//               p-5
//               shadow-2xl
//               shadow-indigo-500/20
//               rotate-2
//               "
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-bold text-white text-lg">
//                     {activeJob.company}
//                   </h3>

//                   <p className="text-slate-400 mt-1">{activeJob.role}</p>
//                 </div>

//                 <div
//                   className="
//                   h-10
//                   w-10
//                   rounded-xl
//                   bg-[#6366f1]/20
//                   flex
//                   items-center
//                   justify-center
//                   "
//                 >
//                   🚀
//                 </div>
//               </div>
//             </div>
//           ) : null}
//         </DragOverlay>
//       </DndContext>
//     </DashboardLayout>
//   );
// };

// export default Kanban;

import { useEffect, useState } from "react";

import {
  DndContext,
  closestCorners,
  DragOverlay,
  MouseSensor,
  TouchSensor,
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
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),

    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),
  );

  const handleDragStart = (event) => {
    const job = jobs.find((j) => j._id === event.active.id);

    if (job) {
      setActiveJob(job);

      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }
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
      {/* Header */}

      <div className="mb-8">
        <div
          className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-[#6366f1]/10
          border
          border-[#6366f1]/20
          text-[#818cf8]
          text-sm
          font-medium
          mb-4
          "
        >
          Drag & Drop Workflow
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Kanban Board
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Manage your applications through every stage
        </p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {/* Responsive Layout */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-5
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

        {/* Drag Overlay */}

        <DragOverlay>
          {activeJob ? (
            <div
              className="
              w-[300px]
              rounded-3xl
              bg-[#1e293b]
              border
              border-[#6366f1]
              p-5
              shadow-2xl
              shadow-indigo-500/20
              rotate-2
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-lg">
                    {activeJob.role}
                  </h3>

                  <p className="text-slate-400 mt-1">{activeJob.company}</p>
                </div>

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
                  🚀
                </div>
              </div>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </DashboardLayout>
  );
};

export default Kanban;
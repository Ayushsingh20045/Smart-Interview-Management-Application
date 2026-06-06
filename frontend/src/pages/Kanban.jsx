// // import { useEffect, useState } from "react";

// // import {
// //   DndContext,
// //   closestCorners,
// //   DragOverlay,
// //   PointerSensor,
// //   useSensor,
// //   useSensors,
// // } from "@dnd-kit/core";

// // import DashboardLayout from "../layouts/DashboardLayout";

// // import useJobStore from "../store/jobStore";

// // import KanbanColumn from "../components/KanbanColumn";

// // const statuses = ["Applied", "Interview", "Offer", "Rejected"];

// // const Kanban = () => {
// //   const jobs = useJobStore((state) => state.jobs);

// //   const fetchJobs = useJobStore((state) => state.fetchJobs);

// //   const updateJob = useJobStore((state) => state.updateJob);

// //   const [activeJob, setActiveJob] = useState(null);

// //   useEffect(() => {
// //     fetchJobs();
// //   }, []);

// //   const sensors = useSensors(
// //     useSensor(PointerSensor, {
// //       activationConstraint: {
// //         distance: 8,
// //       },
// //     }),
// //   );

// //   const handleDragStart = (event) => {
// //     const job = jobs.find((j) => j._id === event.active.id);

// //     setActiveJob(job);
// //   };

// //   const handleDragEnd = async (event) => {
// //     const { active, over } = event;

// //     setActiveJob(null);

// //     if (!over) return;

// //     const job = jobs.find((j) => j._id === active.id);

// //     if (!job) return;

// //     const targetStatus = statuses.includes(over.id) ? over.id : null;

// //     if (!targetStatus) return;

// //     if (job.status === targetStatus) return;

// //     await updateJob(job._id, {
// //       status: targetStatus,
// //     });
// //   };
// //   return (
// //     <DashboardLayout>
// //       <div className="mb-8">
// //         <h1 className="text-4xl font-bold">Kanban Board</h1>

// //         <p className="text-slate-400 mt-2">Drag jobs between stages</p>
// //       </div>

// //       <DndContext
// //         sensors={sensors}
// //         collisionDetection={closestCorners}
// //         onDragStart={handleDragStart}
// //         onDragEnd={handleDragEnd}
// //       >
// //         <div
// //           className="
// //           grid
// //           grid-cols-1
// //           md:grid-cols-2
// //           xl:grid-cols-4
// //           gap-6
// //           "
// //         >
// //           {statuses.map((status) => (
// //             <KanbanColumn
// //               key={status}
// //               title={status}
// //               jobs={jobs.filter((job) => job.status === status)}
// //             />
// //           ))}
// //         </div>

// //         <DragOverlay>
// //           {activeJob ? (
// //             <div
// //               className="
// //               bg-slate-800
// //               border
// //               border-indigo-500
// //               shadow-2xl
// //               rounded-2xl
// //               p-4
// //               w-64
// //               rotate-2
// //               "
// //             >
// //               <h3 className="font-semibold">{activeJob.company}</h3>

// //               <p className="text-slate-400 text-sm mt-1">{activeJob.role}</p>
// //             </div>
// //           ) : null}
// //         </DragOverlay>
// //       </DndContext>
// //     </DashboardLayout>
// //   );
// // };

// // export default Kanban;

// import { useEffect, useState } from "react";

// import {
//   DndContext,
//   closestCorners,
//   DragOverlay,
//   PointerSensor,
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
//   );

//   const handleDragStart = (event) => {
//     const job = jobs.find((j) => j._id === event.active.id);

//     setActiveJob(job);
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

//       <div
//         className="
//         flex
//         flex-col
//         md:flex-row
//         md:items-center
//         md:justify-between
//         gap-4
//         mb-8
//         "
//       >
//         <div>
//           <h1
//             className="
//             text-3xl
//             md:text-4xl
//             font-bold
//             text-white
//             "
//           >
//             Job Pipeline
//           </h1>

//           <p
//             className="
//             text-slate-400
//             mt-2
//             "
//           >
//             Move applications through each hiring stage
//           </p>
//         </div>

//         <div
//           className="
//           px-4
//           py-3
//           rounded-2xl
//           bg-[#1e293b]
//           border
//           border-slate-700
//           text-white
//           font-medium
//           "
//         >
//           {jobs.length} Applications
//         </div>
//       </div>

//       {/* Board */}

//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCorners}
//         onDragStart={handleDragStart}
//         onDragEnd={handleDragEnd}
//       >
//         <div
//           className="
//           flex
//           gap-6
//           overflow-x-auto
//           pb-6
//           scrollbar-thin
//           "
//         >
//           {statuses.map((status) => (
//             <div
//               key={status}
//               className="
//                 min-w-[340px]
//                 w-[340px]
//                 flex-shrink-0
//                 "
//             >
//               <KanbanColumn
//                 title={status}
//                 jobs={jobs.filter((job) => job.status === status)}
//               />
//             </div>
//           ))}
//         </div>

//         <DragOverlay>
//           {activeJob ? (
//             <div
//               className="
//               bg-[#1e293b]
//               border
//               border-[#6366f1]
//               shadow-2xl
//               rounded-3xl
//               p-5
//               w-72
//               rotate-2
//               "
//             >
//               <h3
//                 className="
//                 text-lg
//                 font-bold
//                 "
//               >
//                 {activeJob.company}
//               </h3>

//               <p
//                 className="
//                 text-slate-400
//                 mt-2
//                 "
//               >
//                 {activeJob.role}
//               </p>
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
      {/* Header */}

      <div className="mb-8">
        <h1
          className="
          text-3xl
          md:text-4xl
          font-bold
          text-white
          "
        >
          Application Pipeline
        </h1>

        <p
          className="
          text-slate-400
          mt-2
          "
        >
          Manage and track your job applications through every stage.
        </p>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-4
        mb-8
        "
      >
        {statuses.map((status) => (
          <div
            key={status}
            className="
            bg-[#1e293b]
            border
            border-slate-700/50
            rounded-2xl
            p-4
            "
          >
            <p className="text-slate-400 text-sm">{status}</p>

            <h2
              className="
              text-2xl
              font-bold
              mt-2
              "
            >
              {jobs.filter((job) => job.status === status).length}
            </h2>
          </div>
        ))}
      </div>

      {/* Board */}

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
          2xl:grid-cols-4
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
              bg-[#1e293b]
              border
              border-[#6366f1]
              rounded-3xl
              p-5
              w-72
              shadow-2xl
              rotate-2
              "
            >
              <h3
                className="
                font-bold
                text-lg
                "
              >
                {activeJob.company}
              </h3>

              <p
                className="
                text-slate-400
                mt-2
                "
              >
                {activeJob.role}
              </p>

              <div
                className="
                mt-4
                inline-flex
                px-3
                py-1
                rounded-full
                bg-indigo-500/20
                text-indigo-400
                text-sm
                "
              >
                {activeJob.status}
              </div>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </DashboardLayout>
  );
};

export default Kanban;
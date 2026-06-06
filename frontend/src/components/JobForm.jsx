// import { useState } from "react";
// import useJobStore from "../store/jobStore";

// const JobForm = () => {
//   const addJob = useJobStore((state) => state.addJob);

//   const [formData, setFormData] = useState({
//     company: "",
//     role: "",
//     location: "",
//     salary: "",
//     notes: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await addJob(formData);

//     setFormData({
//       company: "",
//       role: "",
//       location: "",
//       salary: "",
//       notes: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         value={formData.company}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             company: e.target.value,
//           })
//         }
//         placeholder="Company Name"
//         className="
//         w-full
//         p-4
//         rounded-xl
//         bg-slate-800
//         border
//         border-slate-700
//         outline-none
//         "
//       />

//       <input
//         value={formData.role}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             role: e.target.value,
//           })
//         }
//         placeholder="Job Role"
//         className="
//         w-full
//         p-4
//         rounded-xl
//         bg-slate-800
//         border
//         border-slate-700
//         outline-none
//         "
//       />

//       <input
//         value={formData.location}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             location: e.target.value,
//           })
//         }
//         placeholder="Location"
//         className="
//         w-full
//         p-4
//         rounded-xl
//         bg-slate-800
//         border
//         border-slate-700
//         outline-none
//         "
//       />

//       <input
//         value={formData.salary}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             salary: e.target.value,
//           })
//         }
//         placeholder="Salary"
//         className="
//         w-full
//         p-4
//         rounded-xl
//         bg-slate-800
//         border
//         border-slate-700
//         outline-none
//         "
//       />

//       <textarea
//         rows="4"
//         value={formData.notes}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             notes: e.target.value,
//           })
//         }
//         placeholder="Notes"
//         className="
//         w-full
//         p-4
//         rounded-xl
//         bg-slate-800
//         border
//         border-slate-700
//         outline-none
//         resize-none
//         "
//       />

//       <button
//         type="submit"
//         className="
//         w-full
//         py-4
//         rounded-xl
//         bg-gradient-to-r
//         from-indigo-600
//         to-purple-600
//         font-semibold
//         hover:opacity-90
//         transition
//         "
//       >
//         Add Job
//       </button>
//     </form>
//   );
// };

// export default JobForm;

// import { useState } from "react";

// import {
//   Building2,
//   Briefcase,
//   MapPin,
//   IndianRupee,
//   FileText,
//   Plus,
// } from "lucide-react";

// import useJobStore from "../store/jobStore";

// const JobForm = () => {
//   const addJob = useJobStore((state) => state.addJob);

//   const [formData, setFormData] = useState({
//     company: "",
//     role: "",
//     location: "",
//     salary: "",
//     notes: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await addJob(formData);

//     setFormData({
//       company: "",
//       role: "",
//       location: "",
//       salary: "",
//       notes: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* First Row */}

//       <div
//         className="
//         grid
//         grid-cols-1
//         md:grid-cols-2
//         gap-5
//         "
//       >
//         <div className="relative">
//           <Building2
//             size={18}
//             className="
//             absolute
//             left-4
//             top-4
//             text-slate-500
//             "
//           />

//           <input
//             value={formData.company}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 company: e.target.value,
//               })
//             }
//             placeholder="Company Name"
//             className="
//             w-full
//             pl-11
//             pr-4
//             py-4
//             bg-[#0f172a]
//             border
//             border-slate-700
//             rounded-2xl
//             outline-none
//             focus:border-[#6366f1]
//             transition-all
//             "
//           />
//         </div>

//         <div className="relative">
//           <Briefcase
//             size={18}
//             className="
//             absolute
//             left-4
//             top-4
//             text-slate-500
//             "
//           />

//           <input
//             value={formData.role}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 role: e.target.value,
//               })
//             }
//             placeholder="Job Role"
//             className="
//             w-full
//             pl-11
//             pr-4
//             py-4
//             bg-[#0f172a]
//             border
//             border-slate-700
//             rounded-2xl
//             outline-none
//             focus:border-[#6366f1]
//             transition-all
//             "
//           />
//         </div>
//       </div>

//       {/* Second Row */}

//       <div
//         className="
//         grid
//         grid-cols-1
//         md:grid-cols-2
//         gap-5
//         "
//       >
//         <div className="relative">
//           <MapPin
//             size={18}
//             className="
//             absolute
//             left-4
//             top-4
//             text-slate-500
//             "
//           />

//           <input
//             value={formData.location}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 location: e.target.value,
//               })
//             }
//             placeholder="Location"
//             className="
//             w-full
//             pl-11
//             pr-4
//             py-4
//             bg-[#0f172a]
//             border
//             border-slate-700
//             rounded-2xl
//             outline-none
//             focus:border-[#6366f1]
//             transition-all
//             "
//           />
//         </div>

//         <div className="relative">
//           <IndianRupee
//             size={18}
//             className="
//             absolute
//             left-4
//             top-4
//             text-slate-500
//             "
//           />

//           <input
//             value={formData.salary}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 salary: e.target.value,
//               })
//             }
//             placeholder="Salary"
//             className="
//             w-full
//             pl-11
//             pr-4
//             py-4
//             bg-[#0f172a]
//             border
//             border-slate-700
//             rounded-2xl
//             outline-none
//             focus:border-[#6366f1]
//             transition-all
//             "
//           />
//         </div>
//       </div>

//       {/* Notes */}

//       <div className="relative">
//         <FileText
//           size={18}
//           className="
//           absolute
//           left-4
//           top-4
//           text-slate-500
//           "
//         />

//         <textarea
//           rows="4"
//           value={formData.notes}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               notes: e.target.value,
//             })
//           }
//           placeholder="Add notes about this application..."
//           className="
//           w-full
//           pl-11
//           pr-4
//           py-4
//           bg-[#0f172a]
//           border
//           border-slate-700
//           rounded-2xl
//           outline-none
//           resize-none
//           focus:border-[#6366f1]
//           transition-all
//           "
//         />
//       </div>

//       {/* Submit */}

//       <button
//         type="submit"
//         className="
//         w-full
//         py-4
//         rounded-2xl
//         bg-[#6366f1]
//         hover:bg-indigo-500
//         text-white
//         font-semibold
//         flex
//         items-center
//         justify-center
//         gap-2
//         shadow-lg
//         shadow-indigo-500/20
//         transition-all
//         duration-300
//         "
//       >
//         <Plus size={18} />
//         Add Job Application
//       </button>
//     </form>
//   );
// };

// export default JobForm;

import { useState } from "react";

import {
  Building2,
  Briefcase,
  MapPin,
  IndianRupee,
  FileText,
  Plus,
} from "lucide-react";

import useJobStore from "../store/jobStore";

const JobForm = () => {
  const addJob = useJobStore((state) => state.addJob);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    salary: "",
    status: "Applied",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addJob(formData);

    setFormData({
      company: "",
      role: "",
      location: "",
      salary: "",
      status: "Applied",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}

      <div>
        <h3 className="text-xl font-semibold text-white">
          New Job Application
        </h3>

        <p className="text-slate-400 text-sm mt-1">
          Add a job application and track its progress.
        </p>
      </div>

      {/* Company + Role */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-5
        "
      >
        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Company Name
          </label>

          <div className="relative">
            <Building2
              size={18}
              className="
              absolute
              left-4
              top-4
              text-slate-500
              "
            />

            <input
              required
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              placeholder="Google"
              className="
              w-full
              pl-11
              pr-4
              py-4
              bg-[#0f172a]
              border
              border-slate-700
              rounded-2xl
              outline-none
              focus:border-[#6366f1]
              transition-all
              "
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-2">Job Role</label>

          <div className="relative">
            <Briefcase
              size={18}
              className="
              absolute
              left-4
              top-4
              text-slate-500
              "
            />

            <input
              required
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
                })
              }
              placeholder="Frontend Developer"
              className="
              w-full
              pl-11
              pr-4
              py-4
              bg-[#0f172a]
              border
              border-slate-700
              rounded-2xl
              outline-none
              focus:border-[#6366f1]
              transition-all
              "
            />
          </div>
        </div>
      </div>

      {/* Location + Salary */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-5
        "
      >
        <div>
          <label className="block text-sm text-slate-400 mb-2">Location</label>

          <div className="relative">
            <MapPin
              size={18}
              className="
              absolute
              left-4
              top-4
              text-slate-500
              "
            />

            <input
              value={formData.location}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  location: e.target.value,
                })
              }
              placeholder="Bangalore"
              className="
              w-full
              pl-11
              pr-4
              py-4
              bg-[#0f172a]
              border
              border-slate-700
              rounded-2xl
              outline-none
              focus:border-[#6366f1]
              transition-all
              "
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-2">Salary</label>

          <div className="relative">
            <IndianRupee
              size={18}
              className="
              absolute
              left-4
              top-4
              text-slate-500
              "
            />

            <input
              value={formData.salary}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  salary: e.target.value,
                })
              }
              placeholder="12 LPA"
              className="
              w-full
              pl-11
              pr-4
              py-4
              bg-[#0f172a]
              border
              border-slate-700
              rounded-2xl
              outline-none
              focus:border-[#6366f1]
              transition-all
              "
            />
          </div>
        </div>
      </div>

      {/* Status */}

      <div>
        <label className="block text-sm text-slate-400 mb-2">
          Application Status
        </label>

        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value,
            })
          }
          className="
          w-full
          p-4
          bg-[#0f172a]
          border
          border-slate-700
          rounded-2xl
          outline-none
          focus:border-[#6366f1]
          "
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Notes */}

      <div>
        <label className="block text-sm text-slate-400 mb-2">Notes</label>

        <div className="relative">
          <FileText
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-500
            "
          />

          <textarea
            rows="4"
            maxLength={300}
            value={formData.notes}
            onChange={(e) =>
              setFormData({
                ...formData,
                notes: e.target.value,
              })
            }
            placeholder="Add notes about this application..."
            className="
            w-full
            pl-11
            pr-4
            py-4
            bg-[#0f172a]
            border
            border-slate-700
            rounded-2xl
            outline-none
            resize-none
            focus:border-[#6366f1]
            transition-all
            "
          />
        </div>

        <div className="text-right mt-2 text-xs text-slate-500">
          {formData.notes.length}/300
        </div>
      </div>

      {/* Button */}

      <button
        type="submit"
        className="
        w-full
        py-4
        rounded-2xl
        bg-[#6366f1]
        hover:bg-indigo-500
        active:scale-[0.98]
        text-white
        font-semibold
        flex
        items-center
        justify-center
        gap-2
        shadow-xl
        shadow-indigo-500/20
        transition-all
        duration-300
        "
      >
        <Plus size={18} />
        Add Job Application
      </button>
    </form>
  );
};

export default JobForm;
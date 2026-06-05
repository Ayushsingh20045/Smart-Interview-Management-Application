import { useState } from "react";
import useJobStore from "../store/jobStore";

const JobForm = () => {
  const addJob = useJobStore((state) => state.addJob);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    salary: "",
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
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={formData.company}
        onChange={(e) =>
          setFormData({
            ...formData,
            company: e.target.value,
          })
        }
        placeholder="Company Name"
        className="
        w-full
        p-4
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        outline-none
        "
      />

      <input
        value={formData.role}
        onChange={(e) =>
          setFormData({
            ...formData,
            role: e.target.value,
          })
        }
        placeholder="Job Role"
        className="
        w-full
        p-4
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        outline-none
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
        placeholder="Location"
        className="
        w-full
        p-4
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        outline-none
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
        placeholder="Salary"
        className="
        w-full
        p-4
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        outline-none
        "
      />

      <textarea
        rows="4"
        value={formData.notes}
        onChange={(e) =>
          setFormData({
            ...formData,
            notes: e.target.value,
          })
        }
        placeholder="Notes"
        className="
        w-full
        p-4
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        outline-none
        resize-none
        "
      />

      <button
        type="submit"
        className="
        w-full
        py-4
        rounded-xl
        bg-gradient-to-r
        from-indigo-600
        to-purple-600
        font-semibold
        hover:opacity-90
        transition
        "
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;

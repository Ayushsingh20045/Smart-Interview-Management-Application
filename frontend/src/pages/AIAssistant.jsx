

import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import useAIStore from "../store/aiStore";

import { Brain, Building2, Briefcase, Sparkles } from "lucide-react";

const AIAssistant = () => {
  const generate = useAIStore((state) => state.generate);

  const questions = useAIStore((state) => state.questions);

  const loading = useAIStore((state) => state.loading);

  const error = useAIStore((state) => state.error);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    level: "Fresher",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await generate(formData);
  };

  return (
    <DashboardLayout>
      {/* Hero Section */}

      <div
        className="
        relative
        overflow-hidden
        bg-[#1e293b]
        border
        border-slate-700/50
        rounded-3xl
        p-8
        mb-8
        "
      >
        <div
          className="
          absolute
          right-0
          top-0
          h-40
          w-40
          bg-[#6366f1]
          opacity-10
          blur-3xl
          rounded-full
          "
        />

        <div className="relative">
          <h1
            className="
            text-4xl
            font-bold
            flex
            items-center
            gap-3
            "
          >
            <Brain size={40} />
            AI Interview Assistant
          </h1>

          <p
            className="
            text-slate-400
            mt-3
            "
          >
            Generate company-specific interview questions powered by AI.
          </p>
        </div>
      </div>

      {/* Form */}

      <div
        className="
        bg-[#1e293b]
        border
        border-slate-700/50
        rounded-3xl
        p-6
        "
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Company */}

          <div className="relative">
            <Building2
              size={20}
              className="
              absolute
              left-4
              top-4
              text-slate-400
              "
            />

            <input
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              className="
              w-full
              pl-12
              p-4
              rounded-xl
              bg-[#0f172a]
              border
              border-slate-700
              outline-none
              focus:border-[#6366f1]
              "
            />
          </div>

          {/* Role */}

          <div className="relative">
            <Briefcase
              size={20}
              className="
              absolute
              left-4
              top-4
              text-slate-400
              "
            />

            <input
              placeholder="Job Role"
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
                })
              }
              className="
              w-full
              pl-12
              p-4
              rounded-xl
              bg-[#0f172a]
              border
              border-slate-700
              outline-none
              focus:border-[#6366f1]
              "
            />
          </div>

          {/* Experience */}

          <select
            value={formData.level}
            onChange={(e) =>
              setFormData({
                ...formData,
                level: e.target.value,
              })
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-[#0f172a]
            border
            border-slate-700
            outline-none
            "
          >
            <option>Fresher</option>

            <option>1-3 Years</option>

            <option>3-5 Years</option>

            <option>5+ Years</option>
          </select>

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-4
            rounded-xl
            bg-[#6366f1]
            hover:bg-indigo-500
            transition
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            disabled:opacity-50
            "
          >
            <Sparkles size={18} />

            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </form>
      </div>

      {/* Error */}

      {error && (
        <div
          className="
          mt-6
          p-4
          rounded-xl
          bg-red-500/10
          border
          border-red-500/30
          text-red-400
          "
        >
          {error}
        </div>
      )}

      {/* Questions */}

      {questions && (
        <div
          className="
          mt-8
          bg-[#1e293b]
          border
          border-slate-700/50
          rounded-3xl
          p-6
          "
        >
          <div
            className="
            flex
            items-center
            gap-3
            mb-8
            "
          >
            <Sparkles
              className="
              text-[#6366f1]
              "
            />

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Generated Questions
            </h2>
          </div>

          <div className="space-y-10">
            {/* Technical */}

            <QuestionSection
              title="Technical Questions"
              color="text-indigo-400"
              border="hover:border-indigo-500/50"
              questions={questions.technical}
            />

            {/* HR */}

            <QuestionSection
              title="HR Questions"
              color="text-green-400"
              border="hover:border-green-500/50"
              questions={questions.hr}
            />

            {/* Behavioral */}

            <QuestionSection
              title="Behavioral Questions"
              color="text-purple-400"
              border="hover:border-purple-500/50"
              questions={questions.behavioral}
            />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

const QuestionSection = ({ title, questions, color, border }) => {
  return (
    <div>
      <h3
        className={`
        text-2xl
        font-semibold
        mb-4
        ${color}
      `}
      >
        {title}
      </h3>

      <div className="space-y-3">
        {questions?.map((question, index) => (
          <div
            key={index}
            className={`
              bg-[#0f172a]
              border
              border-slate-700/50
              rounded-2xl
              p-4
              transition
              ${border}
            `}
          >
            <span
              className="
                font-semibold
                mr-2
                "
            >
              {index + 1}.
            </span>

            {question}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIAssistant;
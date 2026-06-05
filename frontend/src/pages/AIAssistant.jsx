

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
      <div className="mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <Brain size={40} />
          AI Interview Assistant
        </h1>

        <p className="text-slate-400 mt-2">
          Generate company-specific interview questions using AI
        </p>
      </div>

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
        "
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Building2
              className="
              absolute
              left-4
              top-4
              text-slate-400
              "
              size={20}
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
              bg-slate-800
              border
              border-slate-700
              outline-none
              "
            />
          </div>

          <div className="relative">
            <Briefcase
              className="
              absolute
              left-4
              top-4
              text-slate-400
              "
              size={20}
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
              bg-slate-800
              border
              border-slate-700
              outline-none
              "
            />
          </div>

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
            bg-slate-800
            border
            border-slate-700
            "
          >
            <option>Fresher</option>

            <option>1-3 Years</option>

            <option>3-5 Years</option>

            <option>5+ Years</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            "
          >
            <Sparkles size={18} />

            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </form>
      </div>

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

    
      {questions && (
        <div className="mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technical Questions</h2>

            {questions.technical?.map((q, index) => (
              <div
                key={index}
                className="
          bg-slate-900
          border
          border-slate-800
          p-4
          rounded-xl
          mb-3
          "
              >
                {q}
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">HR Questions</h2>

            {questions && (
              <div className="mt-8 space-y-8">
                {/* Technical */}

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">
                    Technical Questions
                  </h2>

                  <div className="space-y-3">
                    {questions.technical?.map((question, index) => (
                      <div
                        key={index}
                        className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-4
              "
                      >
                        {index + 1}. {question}
                      </div>
                    ))}
                  </div>
                </div>

                {/* HR */}

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-green-400">
                    HR Questions
                  </h2>

                  <div className="space-y-3">
                    {questions.hr?.map((question, index) => (
                      <div
                        key={index}
                        className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-4
              "
                      >
                        {index + 1}. {question}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behavioral */}

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-purple-400">
                    Behavioral Questions
                  </h2>

                  <div className="space-y-3">
                    {questions.behavioral?.map((question, index) => (
                      <div
                        key={index}
                        className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-4
              "
                      >
                        {index + 1}. {question}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AIAssistant;
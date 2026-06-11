

import { useState } from "react";
import {
  Sparkles,
  Upload,
  Briefcase,
  MapPin,
  Building2,
  FileText,
  Loader2,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";

const ResumeMatcher = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      const res = await axiosInstance.post("/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data);

      toast.success("Resume analyzed successfully");
    } catch (error) {
      console.log(error);

      toast.error("Failed to analyze resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      {/* Hero */}

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
          h-48
          w-48
          bg-[#6366f1]
          opacity-10
          blur-3xl
          rounded-full
          "
        />

        <div className="relative">
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[#6366f1]/15
            text-[#818cf8]
            text-sm
            "
          >
            <Sparkles size={16} />
            AI Powered Resume Analysis
          </div>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            mt-4
            "
          >
            Resume Job Matcher
          </h1>

          <p className="text-slate-400 mt-3">
            Upload your resume and discover matching jobs using AI.
          </p>
        </div>
      </div>

      {/* Upload Card */}

      <div
        className="
        bg-[#1e293b]
        border
        border-slate-700/50
        rounded-3xl
        p-6
        mb-8
        "
      >
        <div className="flex items-center gap-3 mb-6">
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
            <Upload size={18} />
          </div>

          <h2 className="text-xl font-semibold">Upload Resume</h2>
        </div>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="
          w-full
          bg-[#0f172a]
          border
          border-slate-700
          rounded-2xl
          p-4
          "
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="
          mt-5
          px-6
          py-3
          rounded-2xl
          bg-[#6366f1]
          hover:bg-[#4f46e5]
          transition-all
          flex
          items-center
          gap-2
          disabled:opacity-50
          "
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Analyzing Resume...
            </>
          ) : (
            <>
              <Upload size={18} />
              Analyze Resume
            </>
          )}
        </button>
      </div>

      {/* Empty State */}

      {!result && !loading && (
        <div
          className="
          bg-[#1e293b]
          border
          border-slate-700/50
          rounded-3xl
          p-16
          text-center
          "
        >
          <FileText
            size={50}
            className="
            mx-auto
            text-slate-500
            mb-5
            "
          />

          <h2 className="text-2xl font-bold text-white">No Resume Uploaded</h2>

          <p className="text-slate-400 mt-3">
            Upload your resume to discover matching jobs, extract skills and
            identify your best career opportunities.
          </p>
        </div>
      )}

      {/* Results */}

      {result && (
        <>
          {/* Stats */}

          <div
            className="
            grid
            md:grid-cols-2
            gap-6
            mb-8
            "
          >
            <div
              className="
              bg-[#1e293b]
              border
              border-slate-700/50
              rounded-3xl
              p-6
              "
            >
              <div className="flex items-center gap-3">
                <FileText className="text-[#818cf8]" size={20} />

                <h2 className="text-lg font-semibold">Detected Role</h2>
              </div>

              <p
                className="
                text-2xl
                font-bold
                mt-4
                text-[#818cf8]
                "
              >
                {result.role}
              </p>
            </div>

            <div
              className="
              bg-[#1e293b]
              border
              border-slate-700/50
              rounded-3xl
              p-6
              "
            >
              <h2 className="text-lg font-semibold">Skills Detected</h2>

              <p
                className="
                text-4xl
                font-bold
                mt-4
                "
              >
                {result.skills.length}
              </p>
            </div>
          </div>

          {/* Skills */}

          <div
            className="
            bg-[#1e293b]
            border
            border-slate-700/50
            rounded-3xl
            p-6
            mb-8
            "
          >
            <h2 className="text-xl font-semibold mb-5">Extracted Skills</h2>

            <div className="flex flex-wrap gap-3">
              {result.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#6366f1]/15
                  text-[#818cf8]
                  border
                  border-[#6366f1]/20
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Jobs */}

          <div>
            <h2 className="text-3xl font-bold mb-6">Matching Jobs</h2>

            <div
              className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
              "
            >
              {result.jobs.map((job, index) => (
                <div
                  key={index}
                  className="
                  bg-[#1e293b]
                  border
                  border-slate-700/50
                  rounded-3xl
                  p-6
                  hover:border-[#6366f1]/50
                  transition-all
                  "
                >
                  <span
                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-green-500/15
                    text-green-400
                    border
                    border-green-500/20
                    text-sm
                    "
                  >
                    {job.match}% Match
                  </span>

                  <h3 className="text-xl font-bold mt-4">{job.title}</h3>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Building2 size={15} />
                      {job.company}
                    </div>

                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin size={15} />
                      {job.location}
                    </div>
                  </div>

                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    inline-flex
                    items-center
                    justify-center
                    mt-6
                    w-full
                    py-3
                    rounded-2xl
                    bg-[#6366f1]
                    hover:bg-[#4f46e5]
                    transition-all
                    "
                  >
                    <Briefcase size={16} />
                    <span className="ml-2">Apply Now</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default ResumeMatcher;
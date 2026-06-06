

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  BriefcaseBusiness,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const register = useAuthStore((state) => state.register);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(formData);

      toast.success("Account Created Successfully");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#0f172a]
      flex
      items-center
      justify-center
      p-4
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-[-250px]
        right-[-250px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#6366f1]
        opacity-20
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        left-[-250px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500
        opacity-10
        blur-[180px]
        "
      />

      <div
        className="
        w-full
        max-w-6xl
        grid
        lg:grid-cols-2
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#1e293b]/60
        backdrop-blur-2xl
        shadow-2xl
        "
      >
        {/* Left Panel */}

        <div
          className="
          hidden
          lg:flex
          flex-col
          justify-center
          p-12
          border-r
          border-white/10
          "
        >
          <div
            className="
            h-16
            w-16
            rounded-2xl
            bg-[#6366f1]
            flex
            items-center
            justify-center
            mb-8
            "
          >
            <BriefcaseBusiness size={30} />
          </div>

          <h1
            className="
            text-5xl
            font-bold
            leading-tight
            text-white
            "
          >
            Start Your
            <span className="block text-[#818cf8]">Career Journey</span>
          </h1>

          <p
            className="
            text-slate-400
            text-lg
            mt-6
            max-w-md
            "
          >
            Create your account and manage job applications, interviews,
            analytics, and AI-powered interview preparation.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-slate-300">Smart Job Tracking</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-slate-300">Analytics Dashboard</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#6366f1]" />
              <span className="text-slate-300">AI Interview Assistant</span>
            </div>
          </div>
        </div>

        {/* Register Form */}

        <div
          className="
          p-8
          md:p-12
          flex
          items-center
          "
        >
          <div className="w-full max-w-md mx-auto">
            {/* Mobile Logo */}

            <div className="lg:hidden flex justify-center mb-8">
              <div
                className="
                h-16
                w-16
                rounded-2xl
                bg-[#6366f1]
                flex
                items-center
                justify-center
                "
              >
                <BriefcaseBusiness size={28} />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-white">Create Account</h2>

            <p className="text-slate-400 mt-3">
              Start tracking your dream job today.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}

              <div className="relative">
                <User
                  size={18}
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  "
                />

                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-slate-500
                  focus:border-[#6366f1]
                  focus:bg-white/10
                  outline-none
                  transition-all
                  "
                />
              </div>

              {/* Email */}

              <div className="relative">
                <Mail
                  size={18}
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  "
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-slate-500
                  focus:border-[#6366f1]
                  focus:bg-white/10
                  outline-none
                  transition-all
                  "
                />
              </div>

              {/* Password */}

              <div className="relative">
                <Lock
                  size={18}
                  className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  "
                />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="
                  w-full
                  pl-12
                  pr-12
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-slate-500
                  focus:border-[#6366f1]
                  focus:bg-white/10
                  outline-none
                  transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  "
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                type="submit"
                className="
                w-full
                py-4
                rounded-2xl
                bg-[#6366f1]
                hover:bg-indigo-500
                transition-all
                duration-300
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                shadow-lg
                shadow-indigo-500/20
                "
              >
                Create Account
                <ArrowRight size={18} />
              </button>
            </form>

            <p
              className="
              text-center
              text-slate-400
              mt-8
              "
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="
                text-[#818cf8]
                hover:text-white
                font-medium
                "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
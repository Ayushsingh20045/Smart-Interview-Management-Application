import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const register = useAuthStore((state) => state.register);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(formData);

      toast.success("Account Created");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-2xl">
            <BriefcaseBusiness size={35} />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-white text-center">
            Create Account
          </h1>

          <p className="text-slate-400 text-center mt-2">
            Track Your Dream Job
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-xl outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-xl outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-xl outline-none focus:border-blue-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl text-white font-semibold">
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

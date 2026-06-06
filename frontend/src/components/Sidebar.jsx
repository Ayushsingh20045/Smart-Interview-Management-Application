

import {
  LayoutDashboard,
  Briefcase,
  KanbanSquare,
  BarChart3,
  Brain,
  Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import useAuthStore from "../store/authStore";

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);

  const navClass = ({ isActive }) =>
    `
    flex
    items-center
    gap-4
    px-4
    py-3
    rounded-2xl
    transition-all
    duration-300

    ${
      isActive
        ? `
          bg-[#6366f1]/15
          text-white
          border
          border-[#6366f1]/30
          shadow-lg
          shadow-indigo-500/10
        `
        : `
          text-slate-400
          hover:bg-slate-800/50
          hover:text-white
        `
    }
  `;

  return (
    <aside
      className="
      hidden
      lg:flex
      fixed
      left-0
      top-0
      h-screen
      w-72
      bg-[#0f172a]
      border-r
      border-slate-700/50
      flex-col
      "
    >
      {/* Logo */}

      <div className="p-6">
        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            h-12
            w-12
            rounded-2xl
            bg-[#6366f1]
            flex
            items-center
            justify-center
            shadow-lg
            shadow-indigo-500/20
            "
          >
            <Sparkles size={22} />
          </div>

          <div>
            <h1
              className="
              text-xl
              font-bold
              text-white
              "
            >
              SmartTracker
            </h1>

            <p
              className="
              text-xs
              text-slate-400
              "
            >
              Interview Management
            </p>
          </div>
        </div>
      </div>

      {/* User */}

      <div className="px-6 pb-6">
        <div
          className="
          bg-[#1e293b]
          border
          border-slate-700/50
          rounded-3xl
          p-4
          "
        >
          <div
            className="
            flex
            items-center
            gap-3
            "
          >
            <div
              className="
              h-12
              w-12
              rounded-full
              bg-[#6366f1]
              flex
              items-center
              justify-center
              font-bold
              text-white
              "
            >
              {user?.name?.charAt(0)}
            </div>

            <div>
              <h3
                className="
                font-semibold
                text-white
                "
              >
                {user?.name}
              </h3>

              <p
                className="
                text-xs
                text-slate-400
                "
              >
                Job Seeker
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav
        className="
        flex-1
        px-4
        "
      >
        <div className="space-y-2">
          <NavLink to="/dashboard" className={navClass}>
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink to="/jobs" className={navClass}>
            <Briefcase size={20} />
            Jobs
          </NavLink>

          <NavLink to="/kanban" className={navClass}>
            <KanbanSquare size={20} />
            Kanban Board
          </NavLink>

          <NavLink to="/analytics" className={navClass}>
            <BarChart3 size={20} />
            Analytics
          </NavLink>

          <NavLink to="/ai" className={navClass}>
            <Brain size={20} />
            AI Assistant
          </NavLink>
        </div>
      </nav>

      {/* Footer */}

      <div className="p-6">
        <div
          className="
          text-center
          text-xs
          text-slate-500
          "
        >
          Smart Interview Tracker
          <br />
          Version 1.0
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
import {
  LayoutDashboard,
  Briefcase,
  KanbanSquare,
  BarChart3,
  Brain,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 p-4 rounded-xl transition-all duration-200
    ${
      isActive
        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        : "hover:bg-slate-900 text-slate-300"
    }`;

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
      bg-slate-950
      border-r
      border-slate-800
      flex-col
      "
    >
      {/* Logo */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white">SmartTracker</h1>

        <p className="text-slate-400 mt-1">Interview Tracking System</p>
      </div>

      {/* Navigation */}
      <nav className="px-4 flex-1">
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

      {/* Upgrade Card */}
      <div className="p-4">
        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
          <h3 className="font-semibold text-white">Upgrade to Pro</h3>

          <p className="text-slate-400 text-sm mt-2">
            Unlock AI interview coaching and advanced analytics.
          </p>

          <button
            className="
            w-full
            mt-4
            py-3
            rounded-xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            hover:opacity-90
            transition
            "
          >
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

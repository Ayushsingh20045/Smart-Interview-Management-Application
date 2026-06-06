

import {
  LayoutDashboard,
  Briefcase,
  KanbanSquare,
  BarChart3,
  Brain,
  LogOut,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import useAuthStore from "../store/authStore";

const MobileSidebar = ({ open, setOpen }) => {
  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const navClass = ({ isActive }) =>
    `
    flex
    items-center
    gap-3
    p-4
    rounded-2xl
    transition-all
    ${
      isActive ? "bg-[#6366f1] text-white" : "text-slate-300 hover:bg-slate-800"
    }
  `;

  const handleLogout = async () => {
    await logout();

    setOpen(false);
  };

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={() => setOpen(false)}
        className={`
        fixed
        inset-0
        z-40
        bg-black/60
        backdrop-blur-sm
        transition-all
        duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      />

      {/* Sidebar */}

      <aside
        className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-72
        bg-[#0f172a]
        border-r
        border-slate-800
        transition-transform
        duration-300
        lg:hidden

        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Header */}

        <div
          className="
          p-6
          border-b
          border-slate-800
          flex
          items-center
          justify-between
          "
        >
          <div>
            <h1
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              SmartTracker
            </h1>

            <p
              className="
              text-xs
              text-slate-500
              mt-1
              "
            >
              Job Tracking Platform
            </p>
          </div>

          <button onClick={() => setOpen(false)}>
            <X
              className="
              text-slate-400
              "
            />
          </button>
        </div>

        {/* User */}

        <div className="p-6">
          <div
            className="
            bg-[#1e293b]
            border
            border-slate-700/50
            rounded-2xl
            p-4
            flex
            items-center
            gap-4
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
              text-lg
              "
            >
              {user?.name?.charAt(0)}
            </div>

            <div>
              <h3
                className="
                font-semibold
                "
              >
                {user?.name}
              </h3>

              <p
                className="
                text-sm
                text-slate-400
                "
              >
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <nav
          className="
          px-4
          space-y-2
          "
        >
          <NavLink
            to="/dashboard"
            onClick={() => setOpen(false)}
            className={navClass}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/jobs"
            onClick={() => setOpen(false)}
            className={navClass}
          >
            <Briefcase size={20} />
            Jobs
          </NavLink>

          <NavLink
            to="/kanban"
            onClick={() => setOpen(false)}
            className={navClass}
          >
            <KanbanSquare size={20} />
            Kanban
          </NavLink>

          <NavLink
            to="/analytics"
            onClick={() => setOpen(false)}
            className={navClass}
          >
            <BarChart3 size={20} />
            Analytics
          </NavLink>

          <NavLink to="/ai" onClick={() => setOpen(false)} className={navClass}>
            <Brain size={20} />
            AI Assistant
          </NavLink>
        </nav>

        {/* Logout */}

        <div
          className="
          absolute
          bottom-6
          left-4
          right-4
          "
        >
          <button
            onClick={handleLogout}
            className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            py-3
            rounded-2xl
            bg-red-500/10
            border
            border-red-500/20
            text-red-400
            hover:bg-red-500/20
            transition
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
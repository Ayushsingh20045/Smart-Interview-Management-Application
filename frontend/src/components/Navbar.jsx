// import { Bell, Menu, Search } from "lucide-react";

// import useAuthStore from "../store/authStore";

// const Navbar = ({ setOpen }) => {
//   const user = useAuthStore((state) => state.user);

//   return (
//     <header
//       className="
//       h-20
//       border-b
//       border-slate-800
//       flex
//       items-center
//       justify-between
//       px-4
//       md:px-8
//       "
//     >
//       <div className="flex items-center gap-4">
//         <Menu
//           onClick={() => setOpen(true)}
//           className="lg:hidden cursor-pointer"
//         />

//         <div className="hidden md:flex items-center bg-slate-900 rounded-xl px-4 py-3 w-96">
//           <Search size={18} />

//           <input
//             placeholder="Search..."
//             className="bg-transparent ml-2 outline-none w-full"
//           />
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         <Bell />

//         <div className="h-11 w-11 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center font-bold">
//           {user?.name?.charAt(0)}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { Bell, Menu, LogOut, ChevronDown } from "lucide-react";

import { useNavigate } from "react-router-dom";

import useAuthStore from "../store/authStore";

const Navbar = ({ setOpen }) => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <header
      className="
      sticky
      top-0
      z-40
      backdrop-blur-xl
      bg-[#0f172a]/80
      border-b
      border-slate-700/50
      "
    >
      <div
        className="
        h-20
        px-4
        md:px-8
        flex
        items-center
        justify-between
        "
      >
        {/* Left */}

        <div className="flex items-center gap-4">
          <Menu
            onClick={() => setOpen(true)}
            className="
            lg:hidden
            cursor-pointer
            "
          />

          <div>
            <h2
              className="
              text-xl
              font-bold
              text-white
              "
            >
              Smart Interview Tracker
            </h2>

            <p
              className="
              text-xs
              text-slate-400
              "
            >
              Manage applications efficiently
            </p>
          </div>
        </div>

        {/* Right */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          {/* Notification */}

          <button
            className="
            relative
            h-11
            w-11
            rounded-xl
            bg-[#1e293b]
            border
            border-slate-700
            flex
            items-center
            justify-center
            hover:border-[#6366f1]
            transition-all
            "
          >
            <Bell size={18} />

            <span
              className="
              absolute
              top-2
              right-2
              h-2
              w-2
              rounded-full
              bg-red-500
              "
            />
          </button>

          {/* User */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-3
            px-4
            py-2
            rounded-2xl
            bg-[#1e293b]
            border
            border-slate-700/50
            "
          >
            <div
              className="
              h-11
              w-11
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
              <p
                className="
                text-sm
                font-semibold
                text-white
                "
              >
                {user?.name}
              </p>

              <p
                className="
                text-xs
                text-slate-400
                "
              >
                Candidate
              </p>
            </div>

            <ChevronDown
              size={16}
              className="
              text-slate-500
              "
            />
          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
            h-11
            px-4
            rounded-xl
            bg-red-500/10
            border
            border-red-500/30
            text-red-400
            flex
            items-center
            gap-2
            hover:bg-red-500/20
            transition-all
            "
          >
            <LogOut size={18} />

            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
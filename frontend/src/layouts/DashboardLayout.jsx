// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import MobileSidebar from "../components/MobileSidebar";

// const DashboardLayout = ({ children }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#020617] text-white">
//       <div className="flex">
//         <Sidebar />

//         <MobileSidebar open={open} setOpen={setOpen} />

//         <div className="flex-1 lg:ml-72">
//           <Navbar setOpen={setOpen} />

//           <main className="p-4 md:p-6">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MobileSidebar from "../components/MobileSidebar";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      min-h-screen
      bg-[#0f172a]
      text-white
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        fixed
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-[#6366f1]
        opacity-[0.05]
        blur-[120px]
        rounded-full
        pointer-events-none
        "
      />

      <div
        className="
        fixed
        bottom-0
        left-0
        w-[400px]
        h-[400px]
        bg-indigo-500
        opacity-[0.04]
        blur-[120px]
        rounded-full
        pointer-events-none
        "
      />

      <div className="flex">
        <Sidebar />

        <MobileSidebar open={open} setOpen={setOpen} />

        <div className="flex-1 lg:ml-72">
          <Navbar setOpen={setOpen} />

          <main
            className="
            p-4
            md:p-6
            lg:p-8
            relative
            z-10
            "
          >
            <div
              className="
              max-w-[1600px]
              mx-auto
              "
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
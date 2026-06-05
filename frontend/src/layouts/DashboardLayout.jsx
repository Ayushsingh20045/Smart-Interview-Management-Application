import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MobileSidebar from "../components/MobileSidebar";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="flex">
        <Sidebar />

        <MobileSidebar open={open} setOpen={setOpen} />

        <div className="flex-1 lg:ml-72">
          <Navbar setOpen={setOpen} />

          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import { X } from "lucide-react";

const MobileSidebar = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-72
          bg-slate-950
          transition-all
          duration-300
          lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 flex justify-between">
          <h1 className="font-bold text-2xl">SmartTracker</h1>

          <X onClick={() => setOpen(false)} className="cursor-pointer" />
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;

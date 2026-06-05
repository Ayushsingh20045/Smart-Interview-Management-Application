import { Bell, Menu, Search } from "lucide-react";

import useAuthStore from "../store/authStore";

const Navbar = ({ setOpen }) => {
  const user = useAuthStore((state) => state.user);

  return (
    <header
      className="
      h-20
      border-b
      border-slate-800
      flex
      items-center
      justify-between
      px-4
      md:px-8
      "
    >
      <div className="flex items-center gap-4">
        <Menu
          onClick={() => setOpen(true)}
          className="lg:hidden cursor-pointer"
        />

        <div className="hidden md:flex items-center bg-slate-900 rounded-xl px-4 py-3 w-96">
          <Search size={18} />

          <input
            placeholder="Search..."
            className="bg-transparent ml-2 outline-none w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell />

        <div className="h-11 w-11 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center font-bold">
          {user?.name?.charAt(0)}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

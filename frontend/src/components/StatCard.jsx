import { motion } from "framer-motion";

const StatCard = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
      bg-slate-900/70
      backdrop-blur-md
      border
      border-slate-800
      rounded-3xl
      p-6
      "
    >
      <div className="flex justify-between">
        <div>
          <p className="text-slate-400">{title}</p>

          <h2 className="text-4xl font-bold mt-3">{value}</h2>
        </div>

        <div
          className="
          h-14
          w-14
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          flex
          items-center
          justify-center
          "
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;

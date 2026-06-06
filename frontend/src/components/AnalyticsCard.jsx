

import { motion } from "framer-motion";

const AnalyticsCard = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      relative
      overflow-hidden
      bg-[#1e293b]
      border
      border-slate-700/50
      rounded-3xl
      p-6
      shadow-lg
      shadow-black/10
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        h-24
        w-24
        bg-[#6366f1]
        opacity-10
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        relative
        flex
        justify-between
        items-start
        "
      >
        <div>
          <p
            className="
            text-slate-400
            text-sm
            font-medium
            "
          >
            {title}
          </p>

          <h2
            className="
            text-4xl
            font-bold
            text-white
            mt-3
            "
          >
            {value}
          </h2>

          <div
            className="
            mt-4
            flex
            items-center
            gap-2
            "
          >
            <span
              className="
              h-2
              w-2
              rounded-full
              bg-green-500
              "
            />

            <span
              className="
              text-xs
              text-slate-500
              "
            >
              Updated now
            </span>
          </div>
        </div>

        <div
          className="
          h-14
          w-14
          rounded-2xl
          bg-[#6366f1]/15
          border
          border-[#6366f1]/20
          text-[#818cf8]
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

export default AnalyticsCard;
// import { motion } from "framer-motion";

// const StatCard = ({ title, value, icon }) => {
//   return (
//     <motion.div
//       whileHover={{
//         y: -5,
//       }}
//       className="
//       bg-slate-900/70
//       backdrop-blur-md
//       border
//       border-slate-800
//       rounded-3xl
//       p-6
//       "
//     >
//       <div className="flex justify-between">
//         <div>
//           <p className="text-slate-400">{title}</p>

//           <h2 className="text-4xl font-bold mt-3">{value}</h2>
//         </div>

//         <div
//           className="
//           h-14
//           w-14
//           rounded-2xl
//           bg-gradient-to-r
//           from-indigo-600
//           to-purple-600
//           flex
//           items-center
//           justify-center
//           "
//         >
//           {icon}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default StatCard;

import { motion } from "framer-motion";

const StatCard = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
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
      {/* Accent Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        w-28
        h-28
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
        items-start
        justify-between
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
              text-slate-400
              "
            >
              Updated now
            </span>
          </div>
        </div>

        <div
          className="
          h-16
          w-16
          rounded-2xl
          bg-[#6366f1]/20
          text-[#818cf8]
          flex
          items-center
          justify-center
          border
          border-[#6366f1]/30
          "
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
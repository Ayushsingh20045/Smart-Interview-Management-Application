

import { Briefcase, Users, Trophy, TrendingUp } from "lucide-react";

const FunnelStats = ({ jobs }) => {
  const applied = jobs.filter((j) => j.status === "Applied").length;

  const interview = jobs.filter((j) => j.status === "Interview").length;

  const offer = jobs.filter((j) => j.status === "Offer").length;

  const successRate =
    jobs.length === 0 ? 0 : ((offer / jobs.length) * 100).toFixed(1);

  const funnelSteps = [
    {
      title: "Applications",
      value: applied,
      icon: <Briefcase size={20} />,
      color: "bg-blue-500/15 text-blue-400 border-blue-500/20",
      width: "100%",
    },

    {
      title: "Interviews",
      value: interview,
      icon: <Users size={20} />,
      color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
      width: "75%",
    },

    {
      title: "Offers",
      value: offer,
      icon: <Trophy size={20} />,
      color: "bg-green-500/15 text-green-400 border-green-500/20",
      width: "50%",
    },
  ];

  return (
    <div className="space-y-5">
      {funnelSteps.map((step, index) => (
        <div key={index} className="flex justify-center">
          <div
            style={{
              width: step.width,
            }}
            className={`
              border
              rounded-2xl
              px-6
              py-5
              flex
              items-center
              justify-between
              ${step.color}
            `}
          >
            <div className="flex items-center gap-3">
              {step.icon}

              <span className="font-medium">{step.title}</span>
            </div>

            <span className="text-2xl font-bold">{step.value}</span>
          </div>
        </div>
      ))}

      {/* Success Rate */}

      <div
        className="
        mt-8
        bg-[#0f172a]
        border
        border-[#6366f1]/20
        rounded-2xl
        p-6
        flex
        items-center
        justify-between
        "
      >
        <div>
          <p className="text-slate-400">Conversion Rate</p>

          <h3 className="text-3xl font-bold mt-2">{successRate}%</h3>
        </div>

        <div
          className="
          h-14
          w-14
          rounded-2xl
          bg-[#6366f1]/15
          border
          border-[#6366f1]/20
          flex
          items-center
          justify-center
          text-[#818cf8]
          "
        >
          <TrendingUp size={24} />
        </div>
      </div>
    </div>
  );
};

export default FunnelStats;
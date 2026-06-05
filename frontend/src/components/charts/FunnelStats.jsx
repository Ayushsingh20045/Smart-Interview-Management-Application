const FunnelStats = ({ jobs }) => {
  const applied = jobs.filter((j) => j.status === "Applied").length;

  const interview = jobs.filter((j) => j.status === "Interview").length;

  const offer = jobs.filter((j) => j.status === "Offer").length;

  const successRate =
    jobs.length === 0 ? 0 : ((offer / jobs.length) * 100).toFixed(1);

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-6
      "
    >
      <h2 className="font-bold text-xl mb-6">Conversion Funnel</h2>

      <div className="space-y-4">
        <div>Applied: {applied}</div>

        <div>Interview: {interview}</div>

        <div>Offer: {offer}</div>

        <div className="text-green-400 font-semibold">
          Success Rate: {successRate}%
        </div>
      </div>
    </div>
  );
};

export default FunnelStats;

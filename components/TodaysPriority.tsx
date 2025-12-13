interface TodaysPriorityProps {
  skill: string;
  category: string;
  estimatedTime: number;
  estimatedImprovement: string;
  impact: string;
  description: string;
}

export default function TodaysPriority({
  skill,
  category,
  estimatedTime,
  estimatedImprovement,
  impact,
  description
}: TodaysPriorityProps) {
  // Normalize impact for color logic
  const normalizedImpact = (impact || '').toLowerCase().replace(/\s.*$/, '');
  return (
    <div
      data-testid="todays-priority"
      data-impact={normalizedImpact}
      className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-md p-6 text-white h-full flex flex-col"
    >
      <h2 className="text-xl font-bold mb-4">🎯 Today&apos;s Priority</h2>
      <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm opacity-90">{category}</p>
            <p className="text-2xl font-bold">{skill}</p>
          </div>
          <span
            className={
              `${normalizedImpact === 'high' ? 'bg-red-500' : normalizedImpact === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'} text-white text-xs font-bold px-3 py-1 rounded-full`
            }
          >
            {impact}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/10 backdrop-blur rounded p-3">
            <p className="text-xs opacity-75">Estimated Time</p>
            <p className="text-lg font-bold">{estimatedTime} minutes</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded p-3">
            <p className="text-xs opacity-75">Expected Gain</p>
            <p className="text-lg font-bold">{estimatedImprovement}</p>
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <button
          type="button"
          className="w-full font-bold py-3 px-6 rounded-xl shadow-lg border-2 border-white/60 transition-all cursor-pointer text-white text-lg tracking-tight focus:outline-none mb-1 hover:scale-[1.03] active:scale-95 hover:shadow-blue-200 focus-visible:ring-2 focus-visible:ring-blue-400 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-yellow-400"
          style={{}}
        >
          Start this study session
        </button>
        <button
          type="button"
          className="w-full font-bold py-3 px-6 rounded-xl shadow-lg border-2 border-white/60 transition-all cursor-pointer text-white text-lg tracking-tight focus:outline-none hover:scale-[1.03] active:scale-95 hover:shadow-blue-200 focus-visible:ring-2 focus-visible:ring-blue-400 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-400"
          style={{}}
        >
          Study another topic
        </button>
      </div>
    </div>
  );
}

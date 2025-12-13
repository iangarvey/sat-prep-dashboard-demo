interface Session {
  duration: number;
  title: string;
  skills: string[];
  questions: number;
  estimatedImprovement: string;
}

interface SuggestedSessionsProps {
  sessions: Session[];
}

export default function SuggestedSessions({ sessions }: SuggestedSessionsProps) {
  // Determine impact for each session (for demo, assign by index)
  const getImpact = (idx: number) => {
    if (idx === 0) return { label: 'High Impact', color: 'bg-red-500', data: 'high' };
    if (idx === 1) return { label: 'Medium Impact', color: 'bg-yellow-500', data: 'medium' };
    return { label: 'Low Impact', color: 'bg-blue-500', data: 'low' };
  };
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-fuchsia-100 rounded-2xl shadow-xl p-8 border-2 border-purple-200/40">
      <h2 className="text-2xl font-extrabold mb-7 text-purple-700 tracking-tight drop-shadow">Suggested Practice Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session, index) => {
          const impact = getImpact(index);
          return (
            <div
              key={index}
              className={
                `relative rounded-xl p-6 shadow-lg border-2 transition-all cursor-pointer bg-gradient-to-br focus:outline-none ` +
                (index === 0
                  ? 'from-fuchsia-200 via-pink-100 to-white border-fuchsia-300 hover:shadow-fuchsia-200 focus-visible:ring-2 focus-visible:ring-fuchsia-400'
                  : index === 1
                  ? 'from-indigo-100 via-blue-100 to-white border-indigo-300 hover:shadow-indigo-200 focus-visible:ring-2 focus-visible:ring-blue-400'
                  : 'from-purple-100 via-purple-50 to-white border-purple-300 hover:shadow-purple-200 focus-visible:ring-2 focus-visible:ring-purple-400') +
                ' hover:scale-[1.03] active:scale-95'
              }
              tabIndex={0}
              role="button"
              aria-label={`Select session: ${session.title}`}
              data-impact={impact.data}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-white/80 text-fuchsia-700 font-bold text-sm px-4 py-1 rounded-full border border-fuchsia-300 shadow">
                    {session.duration} min
                  </span>
                </div>
                {/* Impact badge on the right */}
                <span
                  className={`${impact.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                  style={{ minWidth: '90px', textAlign: 'center' }}
                >
                  {impact.label}
                </span>
              </div>
              <h3 className="font-extrabold text-lg mb-3 text-purple-900 drop-shadow flex items-center gap-2">
                {/* Icon next to title */}
                {index === 0 && <span className="text-xl">⚡</span>}
                {index === 1 && <span className="text-xl">🎯</span>}
                {index === 2 && <span className="text-xl">📝</span>}
                {session.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {session.skills.map((skill, idx) => (
                  <span key={idx} className="bg-purple-200/70 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4 mt-2">
                <span className="text-sm text-indigo-700 font-semibold">
                  {session.questions} questions
                </span>
                <span className="text-sm font-bold text-green-600">
                  {session.estimatedImprovement}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

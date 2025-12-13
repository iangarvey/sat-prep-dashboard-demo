interface Weakness {
  skill: string;
  score: number;
  questionsNeeded: number;
  aiInsight: string;
}

interface WeaknessAnalysisProps {
  weaknesses: Weakness[];
}

export default function WeaknessAnalysis({ weaknesses }: WeaknessAnalysisProps) {
  return (
    <div className="bg-gradient-to-br from-red-50 via-fuchsia-50 to-purple-100 rounded-2xl shadow-xl p-6 border-2 border-red-200/40">
      <h2 className="text-xl font-bold mb-4 text-red-700 drop-shadow">🔍 Weakness Analysis</h2>
      <p className="text-sm text-red-700/80 mb-4 font-semibold">AI-identified areas needing attention</p>
      <div className="space-y-4">
        {weaknesses.map((weakness, index) => (
          <div
            key={index}
            className={
              `rounded-xl p-4 shadow-lg border-2 transition-all bg-gradient-to-br ` +
              (index % 3 === 0
                ? 'from-red-100 via-pink-100 to-white border-red-300 hover:shadow-red-200'
                : index % 3 === 1
                ? 'from-fuchsia-100 via-purple-100 to-white border-fuchsia-300 hover:shadow-fuchsia-200'
                : 'from-purple-100 via-purple-50 to-white border-purple-300 hover:shadow-purple-200')
            }
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-red-900 drop-shadow">{weakness.skill}</h3>
                <p className="text-sm text-fuchsia-700 font-semibold">
                  Current: {weakness.score}% proficiency
                </p>
              </div>
              <span className="bg-gradient-to-r from-red-500 to-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-fuchsia-300">
                #{index + 1}
              </span>
            </div>
            <p className="text-sm text-fuchsia-900 mb-2">
              🤖 <span className="font-semibold">AI Insight:</span> {weakness.aiInsight}
            </p>
            <p className="text-xs text-purple-700 font-semibold">
              Recommended: {weakness.questionsNeeded} practice questions to reach target
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

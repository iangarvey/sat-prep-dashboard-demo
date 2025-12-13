interface Skills {
  readingWriting: Record<string, number>;
  math: Record<string, number>;
}

interface SkillTreeProps {
  skills: Skills;
}

export default function SkillTree({ skills }: SkillTreeProps) {
  const getSkillColor = (score: number) => {
    if (score >= 75) return 'bg-green-500 border-green-600';
    if (score >= 60) return 'bg-yellow-500 border-yellow-600';
    return 'bg-red-500 border-red-600';
  };

  const getSkillTextColor = (score: number) => {
    if (score >= 75) return 'text-green-700';
    if (score >= 60) return 'text-yellow-700';
    return 'text-red-700';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col relative">
      <span className="absolute right-2 top-2 text-[10px] text-gray-400 font-medium select-none">*proficiency calculations based on practice tests and questions</span>
      {/* Reading & Writing Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-blue-600">📚 Reading & Writing</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(skills.readingWriting).map(([skill, score]) => (
            <div key={skill} className="flex items-center gap-3 w-full">
              <div
                className={`w-16 h-16 rounded-full ${getSkillColor(score)} border-4 flex items-center justify-center text-white font-bold text-lg shadow-lg`}
              >
                {score}%
              </div>
              <div className="flex-1">
                <p className={`font-semibold text-sm ${getSkillTextColor(score)}`}>{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Math Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-purple-600">📐 Math</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(skills.math).map(([skill, score]) => (
            <div key={skill} className="flex items-center gap-3 w-full">
              <div
                className={`w-16 h-16 rounded-full ${getSkillColor(score)} border-4 flex items-center justify-center text-white font-bold text-lg shadow-lg`}
              >
                {score}%
              </div>
              <div className="flex-1">
                <p className={`font-semibold text-sm ${getSkillTextColor(score)}`}>{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span className="text-gray-600">75%+ (On Track)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <span className="text-gray-600">60-74% (Needs Work)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-gray-600">&lt;60% (Priority)</span>
        </div>
      </div>
    </div>
  );
}

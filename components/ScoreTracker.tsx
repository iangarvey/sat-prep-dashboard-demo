interface Score {
  total: number;
  math: number;
  readingWriting: number;
}

interface ScoreTrackerProps {
  current: Score;
  target: Score;
  readiness: {
    overall: number;
    math: number;
    readingWriting: number;
  };
}

export default function ScoreTracker({ current, target, readiness }: ScoreTrackerProps) {
  const getReadinessColor = (value: number) => {
    if (value >= 75) return 'text-green-600';
    if (value >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Score Tracker</h2>
      
      {/* Overall Score Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm text-gray-600">Current Score</p>
            <p className="text-3xl font-bold text-blue-600">{current.total}</p>
          </div>
          <div className="text-center px-4">
            <p className="text-2xl">→</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Target Score</p>
            <p className="text-3xl font-bold text-purple-600">{target.total}</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
            style={{ width: `${(current.total / target.total) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {target.total - current.total} points to goal
        </p>
      </div>

      {/* Section Breakdown */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">📐 Math</p>
          <p className="text-2xl font-bold">{current.math}</p>
          <p className="text-sm text-gray-600">Target: {target.math}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: `${(current.math / target.math) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">📚 Reading/Writing</p>
          <p className="text-2xl font-bold">{current.readingWriting}</p>
          <p className="text-sm text-gray-600">Target: {target.readingWriting}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-teal-500 h-2 rounded-full"
              style={{ width: `${(current.readingWriting / target.readingWriting) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Readiness Score */}
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-3">Readiness Analysis</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-sm text-gray-600">Overall</p>
            <p className={`text-2xl font-bold ${getReadinessColor(readiness.overall)}`}>
              {readiness.overall}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Math</p>
            <p className={`text-2xl font-bold ${getReadinessColor(readiness.math)}`}>
              {readiness.math}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Reading/Writing</p>
            <p className={`text-2xl font-bold ${getReadinessColor(readiness.readingWriting)}`}>
              {readiness.readingWriting}%
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          {/* Readiness Calculation: Based on (current_progress / target_progress) * time_efficiency_factor
              More complex calculations could include:
              - Improvement velocity (points gained per week)
              - Skill gap analysis (weighted by question frequency)
              - Practice efficiency (accuracy × speed)
              - Time decay factor (closer to test = higher weight on current performance)
              - Confidence intervals based on score consistency
          */}
          * Calculated using current progress, improvement rate, and time remaining
        </p>
      </div>
    </div>
  );
}

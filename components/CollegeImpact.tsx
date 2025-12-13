interface College {
  name: string;
  scoreRange: string;
  avgScore: number;
  acceptanceProbability: number;
}

interface CollegeImpactProps {
  goals: College[];
  currentLevel: College[];
  currentScore: number;
}

export default function CollegeImpact({ goals, currentLevel, currentScore }: CollegeImpactProps) {
  const getProbabilityColor = (prob: number) => {
    if (prob >= 70) return 'text-green-600 bg-green-100';
    if (prob >= 40) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-extrabold mb-7 text-blue-700 tracking-tight drop-shadow">🎓 College Impact Analysis</h2>
      
      {/* Goal Schools */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-fuchsia-700 drop-shadow">
          <span>🎯</span>
          Goal Schools
          <span className="text-sm font-normal text-gray-500">(Based on current score: {currentScore})</span>
        </h3>
        
        <div className="space-y-3">
          {goals.map((college, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-800">{college.name}</h4>
                  <p className="text-sm text-gray-600">
                    SAT Range: {college.scoreRange}
                  </p>
                </div>
                <span className={`font-bold text-lg px-3 py-1 rounded ${getProbabilityColor(college.acceptanceProbability)}`}>
                  {college.acceptanceProbability}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    college.acceptanceProbability >= 70 ? 'bg-green-500' :
                    college.acceptanceProbability >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${college.acceptanceProbability}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Need {college.avgScore - currentScore > 0 ? `+${college.avgScore - currentScore}` : 'on target'} points to match average
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Level Schools */}
      <div>
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-green-700 drop-shadow">
          <span>✅</span>
          Strong Match Schools
        </h3>
        
        <div className="grid grid-cols-3 gap-3">
          {currentLevel.map((college, index) => (
            <div key={index} className="border-2 border-green-200 rounded-lg p-3 bg-green-50">
              <h4 className="font-bold text-sm text-gray-800 mb-1">{college.name}</h4>
              <p className="text-xs text-gray-600 mb-2">{college.scoreRange}</p>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                {college.acceptanceProbability}% likely
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

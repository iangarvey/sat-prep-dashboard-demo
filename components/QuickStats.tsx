interface QuickStatsProps {
  totalHoursStudied: number;
  questionsAnswered: number;
  overallAccuracy: number;
  efficiency: number;
  recentMilestone: string;
}

export default function QuickStats({ 
  totalHoursStudied, 
  questionsAnswered, 
  overallAccuracy, 
  efficiency,
  recentMilestone 
}: QuickStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Time Studied</p>
          <p className="text-3xl font-bold text-blue-600">{totalHoursStudied}h</p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Questions Answered</p>
          <p className="text-3xl font-bold text-purple-600">{questionsAnswered.toLocaleString()}</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Accuracy</p>
          <p className="text-3xl font-bold text-green-600">{overallAccuracy}%</p>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Efficiency</p>
          <p className="text-3xl font-bold text-orange-600">{efficiency}%</p>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-sm font-semibold text-gray-700 mb-1">🎉 Recent Milestone</p>
        <p className="text-gray-800">{recentMilestone}</p>
      </div>
    </div>
  );
}

interface AIInsightsProps {
  insights: string[];
}

export default function AIInsights({ insights }: AIInsightsProps) {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md p-6 text-white">
      <h2 className="text-xl font-bold mb-4">🤖 AI-Powered Insights</h2>
      
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="bg-white/20 backdrop-blur rounded-lg p-4 flex items-start gap-3"
          >
            <span className="text-2xl">💡</span>
            <p className="flex-1">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

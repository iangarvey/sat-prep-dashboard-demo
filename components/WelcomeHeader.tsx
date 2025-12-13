interface WelcomeHeaderProps {
  name: string;
  streak: number;
  daysUntilTest: number;
  testDate: string;
}

export default function WelcomeHeader({
  streak,
  daysUntilTest,
  testDate,
}: WelcomeHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
      <div className="flex gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="text-4xl">🔥</span>
          <div>
            <p className="text-sm opacity-90">Study Streak</p>
            <p className="text-2xl font-bold">{streak} days</p>
          </div>
        </div>
        <div className="border-l border-white/30 pl-6">
          <p className="text-sm opacity-90">Test Date: {testDate}</p>
          <p className="text-2xl font-bold">{daysUntilTest} days to go</p>
        </div>
      </div>
    </div>
  );
}

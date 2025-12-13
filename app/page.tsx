
import HeaderWithScore from '@/components/HeaderWithScore';
import { userData } from '@/lib/userData';

import TopSectionCollapse from '@/components/CollapsibleSections/TopSectionCollapse';
import FeedbackCollapse from '@/components/CollapsibleSections/FeedbackCollapse';
import CollegesCollapse from '@/components/CollapsibleSections/CollegesCollapse';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Expandable Header with Score & Stats */}
        <div className="mb-6">
          <HeaderWithScore 
            name={userData.name}
            streak={userData.streak}
            currentStreak={userData.currentStreak}
            daysUntilTest={userData.daysUntilTest}
            testDate={userData.testDate}
            currentScore={userData.scores.current}
            targetScore={userData.scores.target}
            readiness={userData.readiness}
            studyStats={userData.studyStats}
          />
        </div>

        {/* Collapsible Top Section: SkillTree, Today's Priority, SuggestedSessions */}
        <TopSectionCollapse />


        {/* Collapsible Improvement Section: Weakness Analysis + AI Insights */}
        <FeedbackCollapse />


        {/* Collapsible College Impact Section */}
        <CollegesCollapse />
      </main>
    </div>
  );
}

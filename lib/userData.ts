/**
 * Mock user data for SAT prep dashboard
 * 
 * User Story:
 * - Will started studying 6 weeks ago
 * - Current score: 1200 (Math: 570, Reading/Writing: 630)
 * - Target score: 1500 (Math: 750, Reading/Writing: 750)
 * - 27 days until test (December 11 -> January 7)
 * - 7-day study streak
 * - Weak areas: Advanced Math, Geometry & Trig, Standard English Conventions
 * - Strong area: Algebra (recent +30 point improvement)
 * - Most productive: Saturday afternoons (12pm-5pm)
 */

export const userData = {
  name: "Will",
  streak: 7, // longest streak
  currentStreak: 5,
  daysUntilTest: 27,
  testDate: "January 7, 2026",
  
  scores: {
    current: {
      total: 1200,
      math: 570,
      readingWriting: 630,
    },
    target: {
      total: 1500,
      math: 750,
      readingWriting: 750,
    },
    // Historical data showing improvement
    history: [
      { date: "Nov 1", total: 1120, math: 530, readingWriting: 590 },
      { date: "Nov 15", total: 1150, math: 540, readingWriting: 610 },
      { date: "Dec 1", total: 1200, math: 570, readingWriting: 630 },
    ],
  },
  
  studyStats: {
    totalHoursStudied: 42,
    questionsAnswered: 1247,
    overallAccuracy: 73,
    efficiency: 85, // Questions per hour relative to recommended pace
    recentMilestone: "Algebra mastery +30 points!",
  },
  
  // Readiness calculation based on improvement rate and time remaining
  readiness: {
    overall: 67,
    math: 58, // Needs more work
    readingWriting: 76, // On track
    // Simple calculation: (current - baseline) / (target - baseline) * time factor
    // More complex: Could incorporate velocity, skill gaps, practice efficiency, etc.
  },
  
  skills: {
    readingWriting: {
      "Information and Ideas": 78, // green
      "Craft and Structure": 72, // yellow
      "Expression of Ideas": 68, // yellow
      "Standard English Conventions": 54, // red - weak area
    },
    math: {
      "Algebra": 82, // green - recent improvement!
      "Advanced Math": 51, // red - weak area
      "Problem-Solving and Data Analysis": 69, // yellow
      "Geometry and Trigonometry": 48, // red - weakest area
    },
  },
  
  todaysPriority: {
    skill: "Geometry and Trigonometry",
    category: "Math",
    estimatedTime: 25,
    estimatedImprovement: "+15 points in Math this week",
    impact: "High Impact",
    description: "Focus on circle theorems and triangle properties - your weakest area with highest improvement potential",
  },
  
  weaknessAnalysis: [
    {
      skill: "Geometry and Trigonometry",
      score: 48,
      questionsNeeded: 45,
      aiInsight: "Struggling with circle theorems and angle relationships. Recommend visual learning approach.",
    },
    {
      skill: "Advanced Math",
      score: 51,
      questionsNeeded: 38,
      aiInsight: "Quadratic functions and exponential growth need reinforcement. Practice word problems.",
    },
    {
      skill: "Standard English Conventions",
      score: 54,
      questionsNeeded: 32,
      aiInsight: "Comma splices and verb agreement errors are most common. Review grammar rules.",
    },
  ],
  
  aiInsights: [
    "You're 27% more productive between 12pm-5pm on Saturdays",
    "Your accuracy increases by 15% when you take 5-min breaks every 30 minutes",
    "Math performance improves significantly after warming up with 5 algebra questions",
  ],
  
  suggestedSessions: [
    {
      duration: 25,
      title: "Quick Math Boost",
      skills: ["Geometry basics", "Triangle properties"],
      questions: 20,
      estimatedImprovement: "+8 points",
    },
    {
      duration: 60,
      title: "Geometry Deep Dive",
      skills: ["Geometry and Trigonometry", "Advanced Math"],
      questions: 45,
      estimatedImprovement: "+20 points",
    },
    {
      duration: 150,
      title: "Full Practice Test",
      skills: ["All sections"],
      questions: 98,
      estimatedImprovement: "Accurate score reading",
    },
  ],
  
  colleges: {
    goals: [
      { name: "Georgia Tech", scoreRange: "1440-1560", avgScore: 1500, acceptanceProbability: 12 },
      { name: "UGA", scoreRange: "1300-1470", avgScore: 1385, acceptanceProbability: 45 },
      { name: "CalTech", scoreRange: "1530-1580", avgScore: 1555, acceptanceProbability: 3 },
    ],
    currentLevel: [
      { name: "Georgia Southern University", scoreRange: "1060-1280", avgScore: 1170, acceptanceProbability: 88 },
      { name: "Florida Atlantic University", scoreRange: "1090-1280", avgScore: 1185, acceptanceProbability: 85 },
      { name: "Western Oregon University", scoreRange: "1060-1250", avgScore: 1155, acceptanceProbability: 92 },
    ],
  },
};

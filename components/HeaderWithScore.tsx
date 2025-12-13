'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Score {
  total: number;
  math: number;
  readingWriting: number;
}

interface HeaderWithScoreProps {
  name: string;
  streak: number; // longest streak
  currentStreak: number;
  daysUntilTest: number;
  testDate: string;
  currentScore: Score;
  targetScore: Score;
  readiness: {
    overall: number;
    math: number;
    readingWriting: number;
  };
  studyStats: {
    totalHoursStudied: number;
    questionsAnswered: number;
    overallAccuracy: number;
    efficiency: number;
    recentMilestone: string;
  };
}

export default function HeaderWithScore({
  name,
  streak, // longest streak
  currentStreak,
  daysUntilTest,
  testDate,
  currentScore,
  targetScore,
  readiness,
  studyStats,
}: HeaderWithScoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getReadinessColor = (value: number) => {
    if (value >= 75) return 'text-green-400';
    if (value >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white shadow-lg">
      {/* Main Header - Always Visible */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h1 className="text-3xl font-bold">Keep up the good work, {name}! 🎯</h1>
          <div className="flex gap-6">
            <div className="flex flex-col items-center w-full min-w-[170px]">
              <span className="text-xs font-semibold uppercase tracking-wide text-fuchsia-200 mb-1 text-center w-full">Streak</span>
              <div className="flex items-center gap-2 px-4 py-2 h-12 min-w-[260px] rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-yellow-400 shadow-lg border-2 border-fuchsia-200/40 w-full justify-center">
                <span className="text-2xl drop-shadow">🔥</span>
                <span className="text-lg font-extrabold text-white drop-shadow">{currentStreak} <span className="text-xs font-bold text-fuchsia-100/90">current</span></span>
                <span className="mx-2 text-blue-100/70 font-extrabold text-lg align-middle">•</span>
                <span className="text-lg font-extrabold text-white drop-shadow">{streak} <span className="text-xs font-bold text-fuchsia-100/90">longest</span></span>
              </div>
            </div>
            <div className="flex flex-col items-center w-full min-w-[170px]">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-100 mb-1 text-center w-full">Test Date</span>
              <div className="flex items-center gap-2 px-4 py-2 h-12 min-w-[260px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-400 shadow-lg border-2 border-blue-200/40 w-full justify-center">
                <span className="text-lg font-extrabold text-white drop-shadow whitespace-nowrap">{testDate} <span className="mx-2 text-blue-100/70 font-extrabold text-lg align-middle">•</span> {daysUntilTest} <span className="text-xs font-bold text-blue-100/90">days left</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Condensed Score Line */}
        <div className="flex items-center justify-between bg-white/10 backdrop-blur rounded-lg p-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">{currentScore.total}</span>
              <span className="text-xl opacity-75">→</span>
              <span className="text-2xl font-bold">{targetScore.total}</span>
            </div>
            <div className="flex-1 max-w-md">
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  data-testid="readiness-bar"
                  className={`h-2 rounded-full transition-all ${
                    readiness.overall >= 75
                      ? 'bg-green-400'
                      : readiness.overall >= 60
                      ? 'bg-yellow-400'
                      : 'bg-red-400'
                  }`}
                  style={{ width: `${(currentScore.total / targetScore.total) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
                    <span className="text-sm opacity-90">Readiness:</span>
              <span className={`text-lg font-bold ${getReadinessColor(readiness.overall)}`}>
                {readiness.overall}%
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2"
          >
            <span className="text-sm font-semibold">
              {isExpanded ? 'Hide' : 'View'} Details
            </span>
            <span className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        </div>
      </div>

      {/* Expandable Details Section */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="header-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/20 p-6 bg-black/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Score Breakdown */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                        <h3 className="font-bold text-lg mb-4">📊 Best Practice Score</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>📐 Math</span>
                        <span className="font-semibold">{currentScore.math} / {targetScore.math}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div
                          className="bg-orange-400 h-3 rounded-full"
                          style={{ width: `${(currentScore.math / targetScore.math) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>📚 Reading/Writing</span>
                        <span className="font-semibold">{currentScore.readingWriting} / {targetScore.readingWriting}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div
                          className="bg-teal-400 h-3 rounded-full"
                          style={{ width: `${(currentScore.readingWriting / targetScore.readingWriting) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm font-semibold mb-2">Readiness by Section</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-xs opacity-75">Overall</p>
                        <p className={`text-xl font-bold ${getReadinessColor(readiness.overall)}`}>
                          {readiness.overall}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs opacity-75">Math</p>
                        <p className={`text-xl font-bold ${getReadinessColor(readiness.math)}`}>
                          {readiness.math}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs opacity-75">Reading</p>
                        <p className={`text-xl font-bold ${getReadinessColor(readiness.readingWriting)}`}>
                          {readiness.readingWriting}%
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <button
                        type="button"
                        className="flex-1 py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition-colors focus:outline-none"
                      >
                        Official Test Scores
                      </button>
                      <button
                        type="button"
                        className="flex-1 py-2 px-4 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow transition-colors focus:outline-none"
                      >
                        Practice Test Scores
                      </button>
                    </div>
                  </div>
                </div>
                {/* Quick Stats */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-4">⚡ Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/10 rounded p-3">
                      <p className="text-xs opacity-75 mb-1">Time Studied</p>
                      <p className="text-2xl font-bold">{studyStats.totalHoursStudied}h</p>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <p className="text-xs opacity-75 mb-1">Questions</p>
                      <p className="text-2xl font-bold">{studyStats.questionsAnswered.toLocaleString()}</p>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <p className="text-xs opacity-75 mb-1">Accuracy</p>
                      <p className="text-2xl font-bold">{studyStats.overallAccuracy}%</p>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <p className="text-xs opacity-75 mb-1">Efficiency</p>
                      <p className="text-2xl font-bold">{studyStats.efficiency}%</p>
                    </div>
                  </div>
                  <div className="bg-yellow-400/20 border-l-4 border-yellow-400 rounded p-3">
                    <p className="text-xs font-semibold mb-1">🎉 Recent Milestone</p>
                    <p className="text-sm">{studyStats.recentMilestone}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

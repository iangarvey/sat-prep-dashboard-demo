"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WeaknessAnalysis from '../WeaknessAnalysis';
import AIInsights from '../AIInsights';
import { userData } from '@/lib/userData';
import ProjectedScore from '../ProjectedScore';

export default function FeedbackCollapse() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6">
      <button
        className="w-full flex items-center justify-between px-6 py-3 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold rounded-t-lg focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-lg">Feedback</span>
        <span className={`transition-transform ml-2 ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="collapse"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-b-lg shadow-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WeaknessAnalysis weaknesses={userData.weaknessAnalysis} />
                <AIInsights insights={userData.aiInsights} />
              </div>
            </div>
            <ProjectedScore />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

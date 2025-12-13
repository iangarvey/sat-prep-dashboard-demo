"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SkillTree from '../SkillTree';
import TodaysPriority from '../TodaysPriority';
import SuggestedSessions from '../SuggestedSessions';
import { userData } from '@/lib/userData';

export default function TopSectionCollapse() {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-6">
      <button
        className="w-full flex items-center justify-between px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-t-lg focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-lg">Proficiency, Priority, and Practice</span>
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
            <div className="bg-white rounded-b-lg shadow-lg p-6 flex flex-col gap-6">
              <div className="grid lg:grid-cols-3 gap-6 flex-1">
                <div className="lg:col-span-2">
                  <SkillTree skills={userData.skills} />
                </div>
                <div className="lg:col-span-1 flex flex-col h-full">
                  <TodaysPriority 
                    skill={userData.todaysPriority.skill}
                    category={userData.todaysPriority.category}
                    estimatedTime={userData.todaysPriority.estimatedTime}
                    estimatedImprovement={userData.todaysPriority.estimatedImprovement}
                    impact={userData.todaysPriority.impact}
                    description={userData.todaysPriority.description}
                  />
                </div>
              </div>
              <div>
                <SuggestedSessions sessions={userData.suggestedSessions} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

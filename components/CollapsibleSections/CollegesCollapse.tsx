"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CollegeImpact from '../CollegeImpact';
import { userData } from '@/lib/userData';

export default function CollegesCollapse() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6">
      <button
        className="w-full flex items-center justify-between px-6 py-3 bg-gradient-to-r from-green-400 via-blue-400 to-fuchsia-400 text-white font-extrabold rounded-t-2xl shadow-lg focus:outline-none border-b-2 border-blue-200/40"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-lg tracking-tight drop-shadow">Colleges</span>
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
            <div className="bg-gradient-to-br from-blue-50 via-green-50 to-fuchsia-100 rounded-b-2xl shadow-xl p-8 border-2 border-blue-200/40">
              <CollegeImpact 
                goals={userData.colleges.goals}
                currentLevel={userData.colleges.currentLevel}
                currentScore={userData.scores.current.total}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

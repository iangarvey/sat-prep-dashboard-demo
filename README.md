
# SAT Prep Dashboard - Achievable Technical Interview

[🌐 Live Demo on Vercel](https://sat-prep-dashboard-demo.vercel.app/)

## 🎯 Project Overview

A responsive, single-page dashboard mockup for SAT students halfway through preparation. Designed from **real user feedback** to help students focus on progress, understand their weaknesses, and see the connection between daily study and college goals.

**Built with:** Next.js 15 • React • TypeScript • Tailwind CSS • Framer Motion

## 👥 Real User Validation: Learning from an 18-Year-Old SAT Student

To ensure this dashboard addresses real student needs, I interviewed my younger brother (Will) who's currently preparing for the SAT while managing multiple commitments. As an 18-year-old with extracurricular activities and a part-time job, his feedback was crucial in shaping a dashboard that works for students with limited time and competing priorities.

**His exact words when I asked what would help:**
> "Like, a breakdown of skills needed to work on, and make the rest like a daily practice website with daily practice questions and Khan Academy videos."

**Key user needs identified from his feedback:**

1. **Time Optimization:** "I don't have time to figure out what to study—just tell me what to do for the 20 minutes I have."
2. **Clear Prioritization:** A breakdown of skills ranked by importance and potential impact
3. **Daily Actionability:** Structure that feels like a daily practice tool, not just a progress report
4. **Resource Integration:** Seamless connection to study materials like practice questions and instructional videos

**How this shaped the design:**
- **Today's Priority section** → Immediate, high-impact action for limited time
- **Time-based suggestions** (25/60/150 min options) → Fits real schedule constraints
- **Skill Tree visualization** → Clear breakdown without overwhelming detail
- **Mobile-first design** → Study between classes, during commutes, in fragmented time

This direct input ensures the dashboard addresses the reality that most SAT students are balancing preparation with school, activities, work, and personal life—needing maximum efficiency from every study minute.

## 🧭 Product Philosophy: Design to Stay Present, Move Forward

Every element follows one principle: **Only look behind to figure out what to do today and where to go next.** No useless metrics—every number tells a story that guides action.

### Personal History - Your Learning Identity (Header)
**Current State & Momentum:**
- **Highest practice score** with readiness percentage → "Here's where you stand"
- **Personal streak & test countdown** → "Here's your momentum vs. urgency"
- **Recent milestone highlights** → "You're capable of breakthroughs"

**More Detail (Available on click):**
- **Latest high score breakdown** → Specific strengths/weaknesses
- **Access to all test data** → Practice + official scores in one place
- **Progress timeline** → Visual story of improvement

**Quick Stats: The Story of Your Effort**
- 42 hours studied → "You've invested this much"
- 1,240 questions answered → "You've practiced this much"  
- 73% accuracy → "You're answering correctly most of the time"
- 87% efficiency → "You're gaining points faster than average"
- **These aren't just metrics—they're evidence of commitment**

### The Very Next Steps: Proficiency, Priority & Practice (1st Tab)
**Expanded by default** → Forces focus on what matters NOW

**Skills Map: The "Why" Behind Recommendations**
- Clear breakdown of SAT skill areas and mastery levels
- Highlights strengths and weaknesses by color
- Directly informs Today's Priority and Suggested Practice Sessions by surfacing weakest skills

**Today's Priority: The One Thing Rule**
```typescript
// If you can only do ONE study session today:
Geometry & Trigonometry    // Highest leverage topic
25 minutes                // Fits busy schedule  
High Impact (15+ points)  // Maximum ROI
"Practice triangle proofs" // Specific, actionable
```
*Philosophy: One clear, high-impact action is better than ten vague suggestions*

**Suggested Practice Sessions: Choose Your Adventure**
- [25 min] Quick Math Boost → "I'm tired but want momentum"
- [60 min] Geometry Proofs → "I have a standard study window"
- [150 min] Practice Test → "I'm fresh and want deep practice"

*User autonomy: Choose based on real-life constraints*

### Deeper Dive: Feedback & AI Insights (2nd Tab)
**Collapsed by default** → Available when you want insight, not forced

**Weakness Analysis → Actionable Feedback**
```typescript
// Traditional: "You're weak at Geometry"
// Our approach: "Geometry (48%) → Cost: 40 points → Try: Draw diagrams first"
```
- **Study technique suggestions** tailored to specific weaknesses
- **Point cost estimates** show real impact of improvement

**AI Insights: Your Personal Study Coach**
- "You solve math 40% faster in mornings" → Schedule optimization
- "Reading retention peaks at 25-minute mark" → Session length guidance
- **Privacy-first**: Insights from study patterns, not personal data

**Progress Projection Graph**
- Current trajectory based on improvement rate
- Estimated next score if suggestions followed
- Compare projected test score to average score ranges of multiple colleges in next tab

### Vision for the Future: Colleges (3rd Tab)
**College Impact & Motivation:**
- **Current score** → Safety/Match/Reach categorization
- **"If you improve X points"** → Acceptance likelihood changes
- **Real SAT percentile data** → Not just generic ranges
- **Connects daily grind** → "Here's why this matters"

## 🎨 Design Decisions

### 1. Progressive Disclosure for Busy Students
SAT students have limited mental bandwidth. **Collapsible sections:**
- **Reduce cognitive load** → Show only what's needed now
- **Focus attention** → Priority section expanded by default
- **Build narrative** → Guide from awareness → action → motivation

### 2. Color Psychology & Visual Language
- **Red/Yellow/Green** traffic light system → Universally understood
- **Red badges** = "Do this now" (urgent, high-value)
- **Yellow badges** = "Important but can wait" (moderate)
- **Blue badges** = "Maintenance work" (low stress)
- **Gradient backgrounds** → Professional, modern feel

### 3. Mobile-First for Real Student Life
- **Thumb-friendly** buttons (≥44px targets)
- **Responsive grid**: 3 columns (desktop) → 1 column (mobile)
- **Designed for fragments**: Between classes, commutes, waiting periods

### 4. Coherent Data Storytelling
**User Story:** Will, 18, 27 days until test
- Math weaker (570) → Red Geometry skills (48%) → Today's Priority: Geometry
- Reading stronger (630) → Green/Yellow reading skills
- All data points connect logically
- Fake data tells a believable, actionable story

## 🏗️ Technical Architecture

### Tech Stack & Structure
```
/app
  page.tsx                 # Main dashboard layout
  layout.tsx              # Root layout with metadata

/components
  /dashboard              # Core metrics (HeaderWithScore, etc.)
  /CollapsibleSections    # Expandable UI sections
  /visualizations         # SkillTree, charts
  TodaysPriority.tsx      # Priority card with impact badges

/lib
  types.ts                # TypeScript interfaces  
  userData.ts             # Mock data with coherent story

/__tests__
  TodaysPriority.test.tsx # Focused component testing
```

### Key Implementation Details
- **Next.js 15 App Router** with server components where possible
- **TypeScript** for type safety and developer experience
- **Tailwind CSS** for rapid, consistent styling
- **Framer Motion** for subtle, purposeful animations
- **Props-based data flow** for easy testing/mocking

## 🧪 Quality Assurance: Focused Testing Strategy

In a 3–4 hour project, I prioritized testing the most critical component: **TodaysPriority**.

### 🎯 Why Test This Component?

This is where intent turns into action—the most important user interaction on the dashboard. When students have limited time, this component must clearly communicate:

- **WHAT to study:** specific skill
- **HOW URGENT it is:** impact level
- **HOW LONG it takes:** time commitment
- **WHAT'S THE PAYOFF:** point gain potential

### 🔍 Test Implementation

Using Jest's `it.each()` for parameterized testing, I validated that impact badges correctly communicate urgency through color psychology:

```typescript
// Tests all three impact levels efficiently
const cases = [
  { impact: 'High Impact', expectedClass: 'bg-red-500', expectedDataImpact: 'high' },
  { impact: 'Medium Impact', expectedClass: 'bg-yellow-500', expectedDataImpact: 'medium' },
  { impact: 'Low Impact', expectedClass: 'bg-blue-500', expectedDataImpact: 'low' },
];

it.each(cases)('shows correct badge for $impact', ({ impact, expectedClass, expectedDataImpact }) => {
  expect(screen.getByText(impact)).toHaveClass(expectedClass);
  expect(screen.getByTestId('todays-priority')).toHaveAttribute('data-impact', expectedDataImpact);
});
```

### 🎨 Testing as UX Validation

This test ensures the dashboard's visual urgency system works correctly for stressed students:

- **Red badges:** "Focus here first" (high cognitive weight)
- **Yellow badges:** "Important but manageable" (moderate attention)
- **Blue badges:** "Maintenance practice" (low stress activity)

**Why this matters:** Color psychology reduces decision fatigue, builds trust through consistent visual language, and helps time-constrained students prioritize effectively.

### ⚙️ Professional Practices Demonstrated

- Parameterized testing with `it.each()` for DRY, scalable test cases
- Component contract validation ensuring props, UI, and data attributes stay synchronized
- User-centric assertions testing what users actually see and interact with
- Documentation through code with test cases serving as living component specification

### 🚀 Testing Philosophy for EdTech

In educational tools where student trust and limited study time are paramount, focused testing on critical user flows demonstrates:

- Attention to detail that prevents user-facing confusion
- Consideration for accessibility with proper semantic markup
- Professional engineering practices that scale in team environments
- Product thinking that prioritizes what matters most to users

This focused test validates that when a student opens their dashboard with only 25 minutes to study, they'll immediately understand which topic deserves their attention and why.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 📈 Future Development Path

### Immediate Enhancements
1. **Interactive Skill Tree** → Click nodes to focus study
2. **Study Session Timer** → Pomodoro integration with priority tracking
3. **Progress Analytics** → Historical score trends with D3.js
4. **Flashcard Feature** → To get the most out of 5, 10, 15 minutes 

### Production Roadmap
1. **Backend API** → Real user progress tracking
2. **Adaptive Algorithms** → ML-based personalized recommendations
3. **Resource Integration** → Khan Academy, official SAT materials
4. **Multi-Exam Support** → Architecture designed for MCAT, CPA, Series 7

## 🎯 Interview Project Context

**Constraints:** 3-4 hour "vibe coding" challenge  
**Goal:** Demonstrate product thinking + technical execution  
**Focus:** UX facade that tells a complete, actionable story

**Addressing Achievable's Mission:**
> "To make exam preparation effective, accessible, and efficient for busy professionals and students through adaptive learning technology that fits mobile lifestyles and provides real insight into knowledge gaps."

**This dashboard demonstrates:**
- ✅ **Mobile-optimized** for real student life
- ✅ **Actionable insight** beyond just data display
- ✅ **Psychological design** for busy learners
- ✅ **Technical rigor** with focused testing
- ✅ **Scalable architecture** for future features

## 📊 Data Model Philosophy

### Every Metric Tells a Story
```typescript
// Bad: "Questions attempted: 5,000"
// Good: "1,240 questions = 42 hours = 220 point improvement potential"

// Bad: "Study streak: 7 days"
// Good: "7-day streak → 3x retention vs. inconsistent study"
```

### Coherent Narrative Design
All mock data connects:
- Low Math score → Red Geometry skills → Priority on Geometry
- Strong Reading score → Green reading skills → Maintenance focus
- College requirements → Realistic gap analysis → Motivating but achievable goals

---

**Created by:** Ian Garvey  
**For:** Achievable Technical Interview  
**Date:** December 2025  

*This dashboard isn't just a data display—it's a study companion that understands the emotional journey of SAT preparation and provides exactly what's needed at each step.*

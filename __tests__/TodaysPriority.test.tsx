import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodaysPriority from '../components/TodaysPriority';


describe('TodaysPriority - Impact badges', () => {
  const cases = [
    { impact: 'High Impact', expectedClass: 'bg-red-500', expectedDataImpact: 'high' },
    { impact: 'Medium Impact', expectedClass: 'bg-yellow-500', expectedDataImpact: 'medium' },
    { impact: 'Low Impact', expectedClass: 'bg-blue-500', expectedDataImpact: 'low' },
  ];

  it.each(cases)('shows correct badge and data-impact for %s', ({ impact, expectedClass, expectedDataImpact }) => {
    render(
      <TodaysPriority
        skill="Linear Equations"
        category="Algebra"
        estimatedTime={25}
        estimatedImprovement="15 points"
        impact={impact}
        description="Focus on word problems involving linear equations"
      />
    );
    const badge = screen.getByText(impact);
    expect(badge).toHaveClass(expectedClass);
    const container = screen.getByTestId('todays-priority');
    expect(container).toHaveAttribute('data-impact', expectedDataImpact);
  });
});

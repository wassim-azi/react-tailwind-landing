/**
 * Pricing Component Accessibility Test
 *
 * Basic smoke test to ensure no critical accessibility violations
 * using Jest and axe-core.
 */

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Pricing from '../src/components/Pricing';

expect.extend(toHaveNoViolations);

describe('Pricing Component - Accessibility', () => {
  it('should have no critical accessibility violations', async () => {
    const { container } = render(<Pricing />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have proper aria labels on toggle switches', () => {
    const { getByLabelText } = render(<Pricing />);
    expect(getByLabelText('Switch to monthly billing')).toBeInTheDocument();
    expect(getByLabelText('Switch to yearly billing')).toBeInTheDocument();
  });

  it('should have keyboard-focusable CTAs', () => {
    const { getAllByRole } = render(<Pricing />);
    const buttons = getAllByRole('button');

    // Should have toggle buttons + 3 CTA buttons (Free, Pro, Enterprise)
    expect(buttons.length).toBeGreaterThanOrEqual(5);

    // All buttons should be focusable
    buttons.forEach((button) => {
      expect(button).not.toHaveAttribute('tabindex', '-1');
    });
  });

  it('should render with proper semantic HTML', () => {
    const { container } = render(<Pricing />);

    // Should have heading
    expect(container.querySelector('h2')).toBeInTheDocument();

    // Should have list elements for benefits
    expect(container.querySelectorAll('ul').length).toBeGreaterThan(0);
    expect(container.querySelectorAll('li').length).toBeGreaterThan(0);
  });
});

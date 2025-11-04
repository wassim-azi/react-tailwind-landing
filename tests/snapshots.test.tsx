/**
 * Snapshot Tests for Hero and Pricing Components
 *
 * Ensure UI remains consistent across changes
 */

import { render } from '@testing-library/react';
import Hero from '../src/components/Hero';
import Pricing from '../src/components/Pricing';

describe('Hero Component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});

describe('Pricing Component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Pricing />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with yearly billing', () => {
    const { container, getByLabelText } = render(<Pricing />);
    const yearlyButton = getByLabelText('Switch to yearly billing');
    yearlyButton.click();
    expect(container).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';
import { ReactChart } from './ReactChart';

jest.mock('chart.js', () => ({
  ...jest.requireActual('chart.js'),
  Chart: jest.fn(() => ({
    update: jest.fn(),
    destroy: jest.fn(),
  })),
}));

it('should be in document', function () {
  render(<ReactChart type="line" options={{}} data={[] as any} />);
  expect(screen.getByRole('chart')).toBeInTheDocument();
});

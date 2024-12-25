import { it, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';
import type { Chart } from 'chart.js';
import { ReactChart } from './ReactChart';

jest.mock('chart.js', () => ({
  ...jest.requireActual<Chart>('chart.js'),
  Chart: jest.fn(() => ({
    update: jest.fn(),
    destroy: jest.fn(),
  })),
}));

it('should be in document', function () {
  render(<ReactChart type="line" options={{}} data={{ datasets: [] }} />);
  expect(screen.getByRole('chart')).toBeInTheDocument();
});

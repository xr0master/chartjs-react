import { jest, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { TestingLibraryMatchers } from '@testing-library/jest-dom/types/matchers-standalone';

declare module '@jest/expect' {
  export interface Matchers<R>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

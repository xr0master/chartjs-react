import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { TestingLibraryMatchers } from '@testing-library/jest-dom/types/matchers-standalone';

declare module '@jest/expect' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Matchers<R>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}

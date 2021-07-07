import React from 'react';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import App, { addPoint } from './App';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />);
});


test('contains balls and strikes displays', () => {
  const container = render(<App />);
  container.getByText(/balls/i)
})

test('contains balls and strikes displays', () => {
  const container = render(<App />);
  container.getByText(/strikes/i)
})

test('adds 1 to display', () => {
  expect(addPoint(0)).toBe(1)
})
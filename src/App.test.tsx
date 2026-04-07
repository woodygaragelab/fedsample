import { render, screen } from '@testing-library/react';
import App from './App';

test('renders member management page', async () => {
  render(<App />);
  const titles = await screen.findAllByText(/会員管理/i);
  expect(titles.length).toBeGreaterThan(0);
});

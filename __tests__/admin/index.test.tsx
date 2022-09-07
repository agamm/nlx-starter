test('renders admin with statistics', () => {
  render(<AdminHome />);
  expect(screen.getByTestId('statistics')).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AdminHome from '@/pages/admin/index';
test('renders admin with navigation', () => {
  render(<AdminHome />);
  expect(screen.getByTestId('navigation')).toBeInTheDocument();
});

test('renders admin with sql query ', () => {
  render(<AdminHome />);
  expect(screen.getByTestId('sql-query')).toBeInTheDocument();
});

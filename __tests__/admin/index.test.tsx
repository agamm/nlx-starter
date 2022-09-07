test('renders admin with statistics', () => {
  render(<AdminHome />);
  expect(screen.getByTestId('statistics')).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AdminHome from '@/pages/admin/index';
test('renders admin with navigation', () => {
  render(<AdminHome />);
  const nav = screen.getByTestId('navigation');
  expect(nav).toBeInTheDocument();

  const links = [
    '/admin',
    '/admin/emails',
    '/admin/subscribers',
    '/admin/segments',
    '/admin/api',
  ];
  links.forEach((l, i) => {
    const homeLink = nav.querySelectorAll('li > a')[i].getAttribute('href');
    expect(homeLink).toBe(l);
  });
});

test('renders admin with sql query ', () => {
  render(<AdminHome />);
  expect(screen.getByTestId('sql-query')).toBeInTheDocument();
});

import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

function NavLink(name: string, href: string) {
  return (
    <li className='mb-6'>
      <UnstyledLink href={href} className='hover:text-gray-600 hover:underline'>
        {name}
      </UnstyledLink>
    </li>
  );
}

export const Navigation = () => {
  return (
    <nav className='w-56' data-testid='navigation'>
      <ul>
        {NavLink('Home', '/admin')}
        {NavLink('Emails', '/admin/emails')}
        {NavLink('Subscribers', '/admin/subscribers')}
        {NavLink('Segments', '/admin/segments')}
        {NavLink('API', '/admin/api')}
      </ul>
    </nav>
  );
};

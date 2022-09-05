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

export default function Header() {
  return (
    <nav className='w-56'>
      <ul>
        {NavLink('Home', '/')}
        {NavLink('Emails', '/emails')}
        {NavLink('Subscribers', '/subscribers')}
        {NavLink('Segments', '/segments')}
        {NavLink('API', '/api')}
      </ul>
    </nav>
  );
}

import * as React from 'react';

import Header from '@/components/admin/layout/Header';
import { Navigation } from '@/components/admin/layout/Navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Put Header or Footer Here
  return (
    <>
      <Header></Header>
      <div className='layout mt-6 flex flex-col gap-6  md:flex-row'>
        <Navigation></Navigation>
        <main>{children}</main>
      </div>
    </>
  );
}

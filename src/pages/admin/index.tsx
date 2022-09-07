import * as React from 'react';

import AdminLayout from '@/components/admin/layout/Layout';
import { Statistics } from '@/components/admin/Statistics';

export default function HomePage() {
  return (
    <AdminLayout>
      <section className='bg-white'>
        <h1>Howdy there!</h1>
        <Statistics />
        <p>Here there will be an SQL + react table component</p>
      </section>
    </AdminLayout>
  );
}

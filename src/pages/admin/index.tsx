import * as React from 'react';

import AdminLayout from '@/components/admin/layout/Layout';
import { Statistics } from '@/components/admin/Statistics';

export default function AdminHome() {
  return (
    <AdminLayout>
      <section className='bg-white'>
        <h1>Howdy there!</h1>
        <Statistics />
        <p data-testid='sql-query'>
          Here there will be an SQL + react table component
        </p>
      </section>
    </AdminLayout>
  );
}

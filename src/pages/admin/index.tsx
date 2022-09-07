import * as React from 'react';

import AdminLayout from '@/components/admin/layout/Layout';
import { Statistics } from '@/components/admin/Statistics';

export default function HomePage() {
  return (
    <AdminLayout>
      <section className='bg-white'>
        <h1>Howdy there!</h1>
        <Statistics />
      </section>
    </AdminLayout>
  );
}

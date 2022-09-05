import * as React from 'react';

import AdminLayout from '@/components/admin/layout/Layout';

export default function HomePage() {
  return (
    <AdminLayout>
      <section className='bg-white'>
        <h1>Howdy there!</h1>
        <section className='mt-4 text-gray-800'>
          <ul>
            <li className='mt-2'>Subscribers: NaN</li>
            <li className='mt-2'>Open rate: NaN</li>
            <li className='mt-2'>Click rate: NaN</li>
            <li className='mt-2'>Delivery rate: NaN</li>
          </ul>
        </section>
      </section>
    </AdminLayout>
  );
}

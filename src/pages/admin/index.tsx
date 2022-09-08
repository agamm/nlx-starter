import { GetServerSideProps } from 'next/types';
import * as React from 'react';

import prisma from '@/lib/prisma';

import AdminLayout from '@/components/admin/layout/Layout';
import { Statistics } from '@/components/admin/Statistics';

export const getServerSideProps: GetServerSideProps = async () => {
  const subscribers = await prisma.subscriber.aggregate({
    _count: {
      email: true,
    },
  });
  return {
    props: {
      subscribers: subscribers._count.email,
    },
  };
};

interface Props {
  subscribers: number;
}

export default function AdminHome({ subscribers }: Props) {
  return (
    <AdminLayout>
      <section className='bg-white'>
        <h1>Howdy there!</h1>
        <Statistics />
        <p>Subs: {subscribers}</p>
        <p data-testid='sql-query'>
          Here there will be an SQL + react table component
        </p>
      </section>
    </AdminLayout>
  );
}

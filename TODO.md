1. Add prisma + connection to db

touch lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
prisma = new PrismaClient();
} else {
if (!global.prisma) {
global.prisma = new PrismaClient();
}
prisma = global.prisma;
}

export default prisma;

```
// pages/index.tsx
import prisma from '../lib/prisma';
 --> Show subscriber count
 // index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

--> Tracker
// pages/p/[id].tsx
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

2. Add e2e cypress test.
```

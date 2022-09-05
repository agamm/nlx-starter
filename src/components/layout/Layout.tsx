import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Your public site here</h1>
      <div className='container'>
        <main>{children}</main>
      </div>
    </>
  );
}

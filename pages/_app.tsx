import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;

import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {SessionProvider, useSession} from 'next-auth/react'

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SessionProvider>
  )
}

const Auth: React.FC<{}> = ({ children }) => {
  const { data: session, status } = useSession({required: true})
  const isUser = !!session?.user

  if (isUser) {
    return <div>{children}</div>
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default App

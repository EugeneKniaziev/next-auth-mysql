import type { NextPage } from 'next';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        Signed in as <br />
        {status} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      {status} <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};
export default Home;

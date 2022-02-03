import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from 'next-auth/providers/credentials';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const options = {
  secret: process.env.SECRET,
  // When adapter is on - session doesn`t return user
  // adapter: PrismaAdapter(prisma),
  debug: true,
  providers: [
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD
    //     }
    //   },
    //   from: process.env.EMAIL_FROM
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'UserName', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const data = {
          username: `${credentials?.username}`,
          password: `${credentials?.password}`,
        };
        // Checking out manually is user registered or not
        const registeredUser = await prisma.user.findFirst({
          where: { username: { startsWith: credentials?.username } },
        });
        // We can throw errors if user exist or return user itself
        // Returning registeredUser
        if (registeredUser) return registeredUser;
        try {
          const hashed = await hash(data?.password, 10).then(
            (hasedPass) => (data.password = hasedPass)
          );
          const user = await prisma.user.create({ data });
          // New user successfully created
          return user;
        } catch (e) {
          console.log(e);
        }
        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    // Remove Any
    jwt: async (params: any) => {
      const { user, token } = params;
      // saving userData into token manually
      if (user) {
        token.data = user;
      }
      return token;
    },
    // Remove Any
    session: async (params: any) => {
      const { token, session } = params;
      if (session && token) {
        session.id = token.id;
        // saving userData from token to session
        session.user = { ...token.data };
      }
      return session;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

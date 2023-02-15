import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import Auth0Provider from 'next-auth/providers/auth0';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prisma';

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? '',
      issuer: process.env.AUTH0_ISSUER
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID??'',
      clientSecret: process.env.GITHUB_SECRET??'',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);
export default authHandler;


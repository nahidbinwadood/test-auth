import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: any) {
        const user = JSON.parse(credentials?.user);
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt(data: any) {
      if (data?.user) {
        return data?.user;
      }
      return data?.token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...token,
        },
      };
    },
  },
};

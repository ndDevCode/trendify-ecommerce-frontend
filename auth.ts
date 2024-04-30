import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginUser } from "./lib/services/authService";
import { UserLogin } from "./types/userTypes";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        const userCredentials: UserLogin = {
          email: credentials.username,
          password: credentials.password,
        };

        const {
          data: { data },
        } = await loginUser(userCredentials);

        if (data.user) {
          return {
            id: data.user.id,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            email: data.user.email,
            role: data.user.role,
            isActive: data.user.isActive,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            tokenType: data.tokenType,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.user.accessToken;
      session.user = token.user;

      return session;
    },
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
});

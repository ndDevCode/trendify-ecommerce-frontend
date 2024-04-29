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
        let user: {
          id: string;
          name: string;
          email: string;
          role: string;
        } | null = null;

        const userCredentials: UserLogin = {
          email: credentials.username,
          password: credentials.password,
        };

        const {
          data: { data },
        } = await loginUser(userCredentials);

        if (data.user) {
          console.log(data);
          return {
            name: data.user.firstName + " " + data.user.lastName,
            email: data.user.email,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
});

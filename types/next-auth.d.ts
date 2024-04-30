import NextAuth, {
  DefaultUser,
  DefaultSession,
  DefaultAccount,
} from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
    accessToken: string;
  }

  interface User extends DefaultUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    isActive: boolean;
    accessToken: string;
    refreshToken: string;
    tokenType: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: User & DefaultJWT["user"];
  }
}

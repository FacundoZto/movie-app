// src/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /* id de MongoDB */
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    /* id que devolvemos en el JWT */
    id: string;
  }
}

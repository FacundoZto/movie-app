import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
//import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });

        if (!user) return null;

        const isValid = await compare(credentials!.password, user.password);
        if (!isValid) return null;

        return { id: user._id, email: user.email };
      },
    }),
    /* GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }), */
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  /* callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        await connectDB();
        const existing = await User.findOne({ email: user.email });
        if (!existing) {
          await User.create({
            email: user.email!,
            password: Math.random().toString(36).slice(2),
          });
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  }, */
  /* secret: process.env.NEXTAUTH_SECRET, */

});

export { handler as GET, handler as POST };
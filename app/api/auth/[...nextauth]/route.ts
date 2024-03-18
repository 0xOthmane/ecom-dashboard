import prisma from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import type { Adapter } from "next-auth/adapters";
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@acme.me" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Email and password validation
        if (!credentials?.email || !credentials.password) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        );
        if (!passwordMatch) return null;
        return user;
      },
    }),
  ],

  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

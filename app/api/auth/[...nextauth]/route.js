import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "405048160977-76pu795gv4t17p7ojqr5ccr5q9ihbpu2.apps.googleusercontent.com",
      clientSecret: "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"
    })
  ],
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

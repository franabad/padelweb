import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'email',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email', className: 'border-gray-300 p-2' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch('http://localhost:4000/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })
        const user = await res.json()
        console.log(user, credentials)

        // If no error and we have user data, return it
        if (user !== undefined) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },

  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOptions)

import firebaseApp from "@/firebase/config"
import CredentialsProvider from "next-auth/providers/credentials"

const auth = getAuth(firebaseApp)

import NextAuth from "next-auth"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       id: "user-credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "email", type: "text", placeholder: "이메일" },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "비밀번호",
//         },
//       },
//       async authorize(credentials, req) {
//         if (!credentials || !credentials.email || !credentials.password)
//           return null;

//         try {
//           const loginRes = await signInWithEmailAndPassword(
//             auth,
//             credentials.email,
//             credentials.password
//           );
//           if (!loginRes) return null;

//           const userInfo = await getUserInfo(loginRes.user.email!);

//           if (userInfo) {
//             const user = {
//               id: loginRes.user.uid,
//               name: userInfo.name,
//               email: userInfo.email,
//             };

//             return user;
//           } else {
//             return null;
//           }
//         } catch (error) {
//           throw new Error(`🚨Next-auth authorize : ${error}`);
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/login",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//         };
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       if (token) {
//         session.id = token.id;
//       }
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },
//   session: {
//     maxAge: 3600, // 1시간
//   },
// });

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "userEmail", type: "text", placeholder: "email" },
        password: { label: "userPassword", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],

  pages: { signIn: "/auth/signIn" },
})

export { authHandler as GET, authHandler as POST }

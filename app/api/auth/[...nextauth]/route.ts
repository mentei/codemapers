// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";


import { authOptions } from "app/lib/auth"; // Import the auth options from lib/auth.ts

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // ✅ Only export GET and POST — nothing else!

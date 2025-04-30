import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//  Import getServerSession and authOptions
import { getServerSession } from "next-auth";
import { authOptions } from 'app/api/auth/[...nextauth]/route'; 

import Provider from 'app/client-provider'; 
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
export const metadata: Metadata = {
  title: "codemapers",
  description: "learn and code ",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log("Session in RootLayout:", session); // Safe to log on server

  return (
    <html lang="en">
      <body className="m-4">
        <Provider  session={session}>
     
          {children}
    
          </Provider>
      </body>
    </html>
  );
}

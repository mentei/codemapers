import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//  Import getServerSession and authOptions
import { getServerSession } from "next-auth";
// import { authOptions } from 'app/api/auth/[...nextauth]/route'; 
import { authOptions } from "app/lib/auth"; // Adjust the import path as necessary

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

  return (
    <html lang="en">
      <body className="m-4">
        <Provider session={session}>
          <Navbar />
          
          {/* Added wrapper to ensure full-page layout */}
          <div className="min-h-screen py-10">
            {children}
          </div>

          <FooterSection />
        </Provider>
      </body>
    </html>
  );
}


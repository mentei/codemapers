"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import LearningZone from "../api/LearningZone/page";

export default function Admin() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center max-w-lg w-full animate-fade-in-up border border-white/20">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Welcome, <span className="text-yellow-300">{session?.user?.name || "User"} 🎉</span>
        </h1>
        <p className="text-lg mb-6">
          You are on a <span className="font-semibold text-pink-300">private route</span>. If you're here, you are **verified**!
        </p>

        {/* Smooth Buttons */}
        <div className="flex flex-col gap-4 items-center">
          <Link
            href="/cloud-Ide"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg transition-transform hover:scale-105 shadow-md"
          >
            🚀 Go to Code Editor
          </Link>

          <button
            onClick={() => signOut()}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white text-lg transition-transform hover:scale-105 shadow-md"
          >
          
            🔒 Sign Out
          </button>
          <LearningZone/>
        </div>
      </div>
    </div>
  );
}

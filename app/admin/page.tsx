"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Admin() {
  const { data: session } = useSession();

  if (!session) redirect("/login");

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Sign Out Button - Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => signOut()}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white shadow-md transition-transform hover:scale-105"
        >
          🔒 Sign Out
        </button>
      </div>

      {/* Welcome Message */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Welcome, <span className="text-yellow-300">{session?.user?.name || "User"} 🎉</span>
        </h1>
        <p className="text-lg text-white/80 mt-4">rom zero to launch — your dev power zone awaits.   </p>
      </div>

      {/* ZONES SECTIONS */}
      <div className="space-y-20">
        {/* Zone 1: Learning Zone */}
        <ZoneCard
          title="📚 Learning Zone"
          description="Explore videos, tutorials, and guided paths"
          href="/learning-Zone"
          imageSrc="/learning.avif"
        />

        {/* Zone 2: Code Editor */}
        <ZoneCard
          title="🚀 Cloud IDE"
          description="Write & run code across multiple languages"
          href="/cloud-Ide"
          imageSrc="/coding.jpg"
        />

        {/* Zone 3: PC Zone */}
        <ZoneCard
          title="🖥️ PC-Zone"
          description="Rent or customize powerful machines"
          href="/api/Pc-Zone"
          imageSrc="/pcZone.jpg"
        />
      </div>
    </div>
  );
}

type ZoneCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
};

function ZoneCard({ title, description, href, imageSrc }: ZoneCardProps) {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-6xl group transition-transform hover:scale-[1.02]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-4xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-lg text-white/80 mb-6 max-w-md">{description}</p>
        <Link
          href={href}
          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white text-lg shadow-lg transition-transform hover:scale-105"
        >
          Enter Zone
        </Link>
      </div>
    </div>
  );
}

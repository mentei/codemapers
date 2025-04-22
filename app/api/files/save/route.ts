import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import File from "@/app/models/File";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const body = await req.json();

  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { filename, content, language } = body;

  const file = await File.findOneAndUpdate(
    { userId: session.user?.email, filename },
    { content, language },
    { upsert: true, new: true }
  );

  return NextResponse.json({ success: true, file });
}

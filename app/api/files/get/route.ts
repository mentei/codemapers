import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../save-code";
import File from "@/app/models/File";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  await dbConnect();
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const files = await File.find({ userId: session.user?.email });
  return NextResponse.json({ success: true, files });
}

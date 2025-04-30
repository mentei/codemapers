import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import File from "@/app/models/File";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const files = await File.find({ userId: session.user?.email });

    return NextResponse.json({ success: true, files });
  } catch (error) {
    console.error("GET /api/files/get Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

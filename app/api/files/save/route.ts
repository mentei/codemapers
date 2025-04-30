import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import File from "@/app/models/File";
import { getServerSession } from "next-auth";
import { authOptions } from "app/lib/auth"; // Adjust the import path as necessary

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    console.log("Session in POST:", session);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    console.log("Body received:", body);

    const { filename, content, language } = body;

    const file = await File.findOneAndUpdate(
      { userId: session.user?.email, filename },
      { content, language },
      { upsert: true, new: true }
    );

    console.log("File saved/updated:", file);

    return NextResponse.json({ success: true, file });
  } catch (err: any) {
    console.error("POST error:", err);
    return NextResponse.json({ error: "Internal Server Error", message: err.message }, { status: 500 });
  }
}

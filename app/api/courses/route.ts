import { connectDB } from "app/lib/mongodb";
import { Course } from "app/models/Course";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    await connectDB();
    const newCourse = await Course.create(body);
    return NextResponse.json({ success: true, data: newCourse });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error creating course" });
  }
}

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

if (!cached.promise) {
  cached.promise = mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  });
}

cached.conn = await cached.promise;

(global as any).mongoose = cached;

export async function connectDB() {
  return cached.conn;
}

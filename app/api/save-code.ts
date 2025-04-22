import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI environment variable in .env.local");
}

// 👇 Extend NodeJS.Global type
declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: mongoose.Mongoose | null;
        promise: Promise<mongoose.Mongoose> | null;
      };
    }
  }
}

// 👇 Set up the global cache (if not already)
const globalWithMongoose = global as typeof globalThis & {
  mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (globalWithMongoose.mongoose.conn) {
    return globalWithMongoose.mongoose.conn;
  }

  if (!globalWithMongoose.mongoose.promise) {
    globalWithMongoose.mongoose.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => {
      console.log("✅ MongoDB connected!");
      return mongoose;
    });
  }

  globalWithMongoose.mongoose.conn = await globalWithMongoose.mongoose.promise;
  return globalWithMongoose.mongoose.conn;
}

export default dbConnect;

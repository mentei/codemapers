import mongoose, { Schema, Document } from "mongoose";

interface FileDocument extends Document {
  userId: string;
  filename: string;
  language: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const FileSchema = new Schema<FileDocument>(
  {
    userId: { type: String, required: true },
    filename: { type: String, required: true },
    language: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.File || mongoose.model<FileDocument>("File", FileSchema);

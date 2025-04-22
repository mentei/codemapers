// models/Playlist.ts
import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
  title: String,
  description: String,
  coverImage: String,
  videos: [
    {
      title: String,
      url: String,
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Playlist || mongoose.model("Playlist", playlistSchema);

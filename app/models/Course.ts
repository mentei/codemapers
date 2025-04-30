import mongoose, { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  title: String,
  description: String,
  instructor: String,
  image: String,
  authorImage: String,
  rating: Number,
  duration: String,
  reviews: Number,
  topics: [
    {
      section: String,
      duration: String,
      lectures: [String],
    },
  ],
});

export const Course = models.Course || model("Course", CourseSchema);

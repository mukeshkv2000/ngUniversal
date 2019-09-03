import mongoose, { Schema } from "mongoose";

const ArticleSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }
});

export default mongoose.model("Article", ArticleSchema);

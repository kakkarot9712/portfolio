import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Language name is required"],
    unique: [true, "Provided name is already exists in database"],
  },
  svg_gdrive_id: {
    type: String,
    required: [true, "Gdrive ID is requires"],
    unique: [true, "Gdrive Id should be unique"],
  },
});

export default mongoose.models.Language ||
  mongoose.model("Language", languageSchema);

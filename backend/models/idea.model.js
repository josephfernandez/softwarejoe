const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ideaSchema = new Schema(
  {
    creationDate: { type: Date, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    estimatedDateOfCompletion: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Idea = mongoose.model("Idea", ideaSchema);

module.exports = Idea;

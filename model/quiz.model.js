const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  category: { type: String, require: true },
  type: { type: String, require: true },
  difficulty: { type: String, require: true },
  question: { type: String, require: true },
  correct_answer: { type: String, require: true },
  options: { type: Object, require: true },
});

const quizModel = mongoose.model("quiz", quizSchema);

module.exports = {
  quizModel,
};

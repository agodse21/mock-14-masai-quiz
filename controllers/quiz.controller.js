const { quizModel } = require("../model/quiz.model");

const addData = async (req, res) => {
  const x = await quizModel.insertMany(req.body);
  console.log(x);
};
const GetQuiz = async (req, res) => {
  let { number_of_questions, category, difficulty } = req.query;
  console.log(number_of_questions, category, difficulty);
  if (number_of_questions && category && difficulty) {
    const data = await quizModel.find({
      category: category,
      difficulty: difficulty,
    }).limit(number_of_questions);
    // number_of_questions: number_of_questions,
    // console.log(data.length<number_of_questions);

    res.send(data);
  } else {
    res.send({ msg: "please choose correct info" });
  }
};
const quizController = {
  GetQuiz,
  addData,
};
module.exports = {
  quizController,
};

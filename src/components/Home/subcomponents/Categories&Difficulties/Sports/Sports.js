import getQuestionsSportsEasyFromServer from '../../../../fetchQuestions/categories/Sports/difficulties/easy/QuestionsSportsEasy.js'
import getQuestionsSportsMediumFromServer from '../../../../fetchQuestions/categories/Sports/difficulties/medium/QuestionsSportsMedium.js'
import getQuestionsSportsHardFromServer from '../../../../fetchQuestions/categories/Sports/difficulties/hard/QuestionsSportsHard.js'

const handleSportsDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsSportsEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsSportsMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsSportsHardFromServer()
        break
      default:
        break
    }

    if (Array.isArray(questions)) {
      const formattedQuestions = questions.map(questionData => ({
        question: questionData.question,
        options: [
          ...questionData.incorrect_answers,
          questionData.correct_answer,
        ],
        correctAnswer: questionData.correct_answer,
        category: questionData.category,
        difficulty: questionData.difficulty,
      }))

      if (isMounted.current) {
        setQuestions(formattedQuestions)
      }
    } else {
      return questions
    }
  } catch (error) {
    return error
  }
}

export default handleSportsDifficultyClick

import getQuestionsBooksEasyFromServer from '../../../../fetchQuestions/categories/Books/difficulties/easy/QuestionsBooksEasy.js'
import getQuestionsBooksMediumFromServer from '../../../../fetchQuestions/categories/Books/difficulties/medium/QuestionsBooksMedium.js'
import getQuestionsBooksHardFromServer from '../../../../fetchQuestions/categories/Books/difficulties/hard/QuestionsBooksHard.js'

const handleBooksDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsBooksEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsBooksMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsBooksHardFromServer()
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

export default handleBooksDifficultyClick

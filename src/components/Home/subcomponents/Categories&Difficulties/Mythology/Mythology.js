import getQuestionsMythologyEasyFromServer from '../../../../fetchQuestions/categories/Mythology/difficulties/easy/QuestionsMythologyEasy.js'
import getQuestionsMythologyMediumFromServer from '../../../../fetchQuestions/categories/Mythology/difficulties/medium/QuestionsMythologyMedium.js'
import getQuestionsMythologyHardFromServer from '../../../../fetchQuestions/categories/Mythology/difficulties/hard/QuestionsMythologyHard.js'

const handleMythologyDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsMythologyEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsMythologyMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsMythologyHardFromServer()
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

export default handleMythologyDifficultyClick

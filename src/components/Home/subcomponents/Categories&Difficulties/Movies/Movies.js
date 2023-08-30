import getQuestionsMoviesEasyFromServer from '../../../../fetchQuestions/categories/Movies/difficulties/easy/QuestionsMoviesEasy.js'
import getQuestionsMoviesMediumFromServer from '../../../../fetchQuestions/categories/Movies/difficulties/medium/QuestionsMoviesMedium.js'
import getQuestionsMoviesHardFromServer from '../../../../fetchQuestions/categories/Movies/difficulties/hard/QuestionsMoviesHard.js'

const handleMoviesDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsMoviesEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsMoviesMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsMoviesHardFromServer()
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

export default handleMoviesDifficultyClick

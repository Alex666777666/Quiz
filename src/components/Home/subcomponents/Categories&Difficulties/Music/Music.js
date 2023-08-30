import getQuestionsMusicEasyFromServer from '../../../../fetchQuestions/categories/Music/difficulties/easy/QuestionsMusicEasy.js'
import getQuestionsMusicMediumFromServer from '../../../../fetchQuestions/categories/Music/difficulties/medium/QuestionsMusicMedium.js'
import getQuestionsMusicHardFromServer from '../../../../fetchQuestions/categories/Music/difficulties/hard/QuestionsMusicHard.js'

const handleMusicDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsMusicEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsMusicMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsMusicHardFromServer()
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

export default handleMusicDifficultyClick

import getQuestionsVideoGamesEasyFromServer from '../../../../fetchQuestions/categories/VideoGames/difficulties/easy/QuestionsVideoGamesEasy.js'
import getQuestionsVideoGamesMediumFromServer from '../../../../fetchQuestions/categories/VideoGames/difficulties/medium/QuestionsVideoGamesMedium.js'
import getQuestionsVideoGamesHardFromServer from '../../../../fetchQuestions/categories/VideoGames/difficulties/hard/QuestionsVideoGamesHard.js'

const handleVideoGamesDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsVideoGamesEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsVideoGamesMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsVideoGamesHardFromServer()
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

export default handleVideoGamesDifficultyClick

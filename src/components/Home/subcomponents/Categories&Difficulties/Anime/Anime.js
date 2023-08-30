import getQuestionsAnimeEasyFromServer from '../../../../fetchQuestions/categories/Anime/difficulties/easy/QuestionsAnimeEasy.js'
import getQuestionsAnimeMediumFromServer from '../../../../fetchQuestions/categories/Anime/difficulties/medium/QuestionsAnimeMedium.js'
import getQuestionsAnimeHardFromServer from '../../../../fetchQuestions/categories/Anime/difficulties/hard/QuestionsAnimeHard.js'

const handleAnimeDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsAnimeEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsAnimeMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsAnimeHardFromServer()
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

export default handleAnimeDifficultyClick

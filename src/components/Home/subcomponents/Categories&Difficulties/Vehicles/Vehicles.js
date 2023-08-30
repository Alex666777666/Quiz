import getQuestionsVehiclesEasyFromServer from '../../../../fetchQuestions/categories/Vehicles/difficulties/easy/QuestionsVehiclesEasy.js'
import getQuestionsVehiclesHardFromServer from '../../../../fetchQuestions/categories/Vehicles/difficulties/medium/QuestionsVehiclesMedium.js'
import getQuestionsVehiclesMediumFromServer from '../../../../fetchQuestions/categories/Vehicles/difficulties/hard/QuestionsVehiclesHard.js'

const handleVehiclesDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsVehiclesEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsVehiclesMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsVehiclesHardFromServer()
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

export default handleVehiclesDifficultyClick

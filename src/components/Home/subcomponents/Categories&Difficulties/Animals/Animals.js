import getQuestionsAnimalsEasyFromServer from '../../../../fetchQuestions/categories/Animals/difficulties/easy/QuestionsAnimalsEasy.js'
import getQuestionsAnimalsMediumFromServer from '../../../../fetchQuestions/categories/Animals/difficulties/medium/QuestionsAnimalsMedium.js'
import getQuestionsAnimalsHardFromServer from '../../../../fetchQuestions/categories/Animals/difficulties/hard/QuestionsAnimalsHard.js'

const handleAnimalsDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsAnimalsEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsAnimalsMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsAnimalsHardFromServer()
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

export default handleAnimalsDifficultyClick

import getQuestionsGeneralKnowledgeEasyFromServer from '../../../../fetchQuestions/categories/GeneralKnowledge/difficulties/easy/QuestionsGeneralKnowledgeEasy.js'
import getQuestionsGeneralKnowledgeMediumFromServer from '../../../../fetchQuestions/categories/GeneralKnowledge/difficulties/medium/QuestionsGeneralKnowledgeMedium.js'
import getQuestionsGeneralKnowledgeHardFromServer from '../../../../fetchQuestions/categories/GeneralKnowledge/difficulties/hard/QuestionsGeneralKnowledgeHard.js'

const handleGeneralKnowledgeDifficultyClick = async difficulty => {
  try {
    let questions
    switch (difficulty) {
      case 'easy':
        questions = await getQuestionsGeneralKnowledgeEasyFromServer()
        break
      case 'medium':
        questions = await getQuestionsGeneralKnowledgeMediumFromServer()
        break
      case 'hard':
        questions = await getQuestionsGeneralKnowledgeHardFromServer()
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

export default handleGeneralKnowledgeDifficultyClick

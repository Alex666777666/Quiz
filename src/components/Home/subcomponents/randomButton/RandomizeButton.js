const categories = ['31', '11', '10', '9', '12', '20', '21', '15', '27', '28']
const difficulties = ['easy', 'medium', 'hard']

const chooseRandomCategoryAndDifficulty = () => {
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)]
  const randomDifficulty =
    difficulties[Math.floor(Math.random() * difficulties.length)]

  return { randomCategory, randomDifficulty }
}

const handlePlayRandomQuiz = (questions, history) => {
  const randomData = chooseRandomCategoryAndDifficulty()
  const { randomCategory, randomDifficulty } = randomData

  history.push({
    pathname: '/game',
    state: {
      category: randomCategory,
      difficulty: randomDifficulty,
      questions: questions,
    },
  })
}

export default handlePlayRandomQuiz

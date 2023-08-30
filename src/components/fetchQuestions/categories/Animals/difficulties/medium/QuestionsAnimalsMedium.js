const getQuestionsAnimalsMediumFromServer = () => {
  fetch(
    'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&encode=base64'
  )
    .then(response => response.json())
    .then(data => {
      const questions = data.results
      return questions
    })
    .catch(error => {
      return error
    })
}

export default getQuestionsAnimalsMediumFromServer

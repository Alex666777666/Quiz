const handleCategorySelect = ({
  category,
  setSelectedCategory,
  setAnimeDifficultyVisible,
  setMoviesDifficultyVisible,
  setBooksDifficultyVisible,
  setGeneralKnowledgeDifficultyVisible,
  setMusicDifficultyVisible,
  setMythologyDifficultyVisible,
  setSportsDifficultyVisible,
  setVideoGamesDifficultyVisible,
  setAnimalsDifficultyVisible,
  setVehiclesDifficultyVisible,
}) => {
  setSelectedCategory(category)

  setAnimeDifficultyVisible(false)
  setMoviesDifficultyVisible(false)
  setBooksDifficultyVisible(false)
  setGeneralKnowledgeDifficultyVisible(false)
  setMusicDifficultyVisible(false)
  setMythologyDifficultyVisible(false)
  setSportsDifficultyVisible(false)
  setVideoGamesDifficultyVisible(false)
  setAnimalsDifficultyVisible(false)
  setVehiclesDifficultyVisible(false)

  if (category === 'anime') {
    setAnimeDifficultyVisible(true)
  } else if (category === 'movies') {
    setMoviesDifficultyVisible(true)
  } else if (category === 'books') {
    setBooksDifficultyVisible(true)
  } else if (category === 'general_knowledge') {
    setGeneralKnowledgeDifficultyVisible(true)
  } else if (category === 'music') {
    setMusicDifficultyVisible(true)
  } else if (category === 'mythology') {
    setMythologyDifficultyVisible(true)
  } else if (category === 'sports') {
    setSportsDifficultyVisible(true)
  } else if (category === 'video_games') {
    setVideoGamesDifficultyVisible(true)
  } else if (category === 'animals') {
    setAnimalsDifficultyVisible(true)
  } else if (category === 'vehicles') {
    setVehiclesDifficultyVisible(true)
  }
}

export default handleCategorySelect

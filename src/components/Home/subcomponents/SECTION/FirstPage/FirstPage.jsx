import React from 'react'
import Anime from '../Categories&DifficultiesLinks/Anime/Anime.jsx'
import Movies from '../Categories&DifficultiesLinks/Movies/Movies.jsx'
import Books from '../Categories&DifficultiesLinks/Books/Books.jsx'
import GeneralKnowledge from '../Categories&DifficultiesLinks/GeneralKnowledge/GeneralKnowledge.jsx'
import Music from '../Categories&DifficultiesLinks/Music/Music.jsx'

const FirstPage = ({
  selectedCategory,
  questions,
  handleCategoryClick,
  animeDifficultyVisible,
  handleAnimeDifficultyClick,
  moviesDifficultyVisible,
  handleMoviesDifficultyClick,
  booksDifficultyVisible,
  handleBooksDifficultyClick,
  generalKnowledgeDifficultyVisible,
  handleGeneralKnowledgeDifficultyClick,
  musicDifficultyVisible,
  handleMusicDifficultyClick,
}) => {
  return (
    <div>
      <Anime
        selectedCategory={selectedCategory}
        questions={questions}
        category='anime'
        handleCategoryClick={handleCategoryClick}
        animeDifficultyVisible={animeDifficultyVisible}
        handleAnimeDifficultyClick={handleAnimeDifficultyClick}
      />
      <Movies
        selectedCategory={selectedCategory}
        questions={questions}
        category='movies'
        handleCategoryClick={handleCategoryClick}
        moviesDifficultyVisible={moviesDifficultyVisible}
        handleMoviesDifficultyClick={handleMoviesDifficultyClick}
      />
      <Books
        selectedCategory={selectedCategory}
        questions={questions}
        category='books'
        handleCategoryClick={handleCategoryClick}
        booksDifficultyVisible={booksDifficultyVisible}
        handleBooksDifficultyClick={handleBooksDifficultyClick}
      />
      <GeneralKnowledge
        selectedCategory={selectedCategory}
        questions={questions}
        category='generalKnowledge'
        handleCategoryClick={handleCategoryClick}
        generalKnowledgeDifficultyVisible={generalKnowledgeDifficultyVisible}
        handleGeneralKnowledgeDifficultyClick={
          handleGeneralKnowledgeDifficultyClick
        }
      />
      <Music
        selectedCategory={selectedCategory}
        questions={questions}
        category='music'
        handleCategoryClick={handleCategoryClick}
        musicDifficultyVisible={musicDifficultyVisible}
        handleMusicDifficultyClick={handleMusicDifficultyClick}
      />
    </div>
  )
}

export default FirstPage

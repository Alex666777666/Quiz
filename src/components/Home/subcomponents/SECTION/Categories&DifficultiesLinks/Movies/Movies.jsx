import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Movies = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  moviesDifficultyVisible,
  handleMoviesDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${
            selectedCategory === 'movies' ? 'active' : ''
          }`}
          onClick={() => handleCategoryClick({ category: 'movies' })}>
          Play Quiz: Movies, 10 questions
        </button>
      </li>
      {selectedCategory === 'movies' && (
        <div
          className={`difficulty-container ${
            moviesDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '11',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleMoviesDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '11',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleMoviesDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '11',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleMoviesDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Movies

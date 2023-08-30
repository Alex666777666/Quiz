import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Anime = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  animeDifficultyVisible,
  handleAnimeDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${selectedCategory === 'anime' ? 'active' : ''}`}
          onClick={() => handleCategoryClick({ category: 'anime' })}>
          Play Quiz: Anime, 10 questions
        </button>
      </li>
      {selectedCategory === 'anime' && (
        <div
          className={`difficulty-container ${
            animeDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '31',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleAnimeDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '31',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleAnimeDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '31',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleAnimeDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Anime

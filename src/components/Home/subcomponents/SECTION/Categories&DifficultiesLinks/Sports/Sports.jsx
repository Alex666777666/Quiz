import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sports = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  sportsDifficultyVisible,
  handleSportsDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${
            selectedCategory === 'sports' ? 'active' : ''
          }`}
          onClick={() => handleCategoryClick({ category: 'sports' })}>
          Play Quiz: Sports, 10 questions
        </button>
      </li>
      {selectedCategory === 'sports' && (
        <div
          className={`difficulty-container ${
            sportsDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '21',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleSportsDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '21',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleSportsDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '21',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleSportsDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Sports

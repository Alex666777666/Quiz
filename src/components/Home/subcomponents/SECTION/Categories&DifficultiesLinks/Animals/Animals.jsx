import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Animals = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  animalsDifficultyVisible,
  handleAnimalsDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${
            selectedCategory === 'animals' ? 'active' : ''
          }`}
          onClick={() => handleCategoryClick({ category: 'animals' })}>
          Play Quiz: Animals, 10 questions
        </button>
      </li>
      {selectedCategory === 'animals' && (
        <div
          className={`difficulty-container ${
            animalsDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '27',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleAnimalsDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '27',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleAnimalsDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '27',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleAnimalsDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Animals

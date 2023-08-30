import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Mythology = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  mythologyDifficultyVisible,
  handleMythologyDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${
            selectedCategory === 'mythology' ? 'active' : ''
          }`}
          onClick={() => handleCategoryClick({ category: 'mythology' })}>
          Play Quiz: Mythology, 10 questions
        </button>
      </li>
      {selectedCategory === 'mythology' && (
        <div
          className={`difficulty-container ${
            mythologyDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '20',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleMythologyDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '20',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleMythologyDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '20',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleMythologyDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Mythology

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Books = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  booksDifficultyVisible,
  handleBooksDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${selectedCategory === 'books' ? 'active' : ''}`}
          onClick={() => handleCategoryClick({ category: 'books' })}>
          Play Quiz: Books, 10 questions
        </button>
      </li>
      {selectedCategory === 'books' && (
        <div
          className={`difficulty-container ${
            booksDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '10',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleBooksDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '10',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleBooksDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '10',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleBooksDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Books

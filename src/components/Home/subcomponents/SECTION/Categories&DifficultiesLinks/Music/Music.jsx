import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Music = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  musicDifficultyVisible,
  handleMusicDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${selectedCategory === 'music' ? 'active' : ''}`}
          onClick={() => handleCategoryClick({ category: 'music' })}>
          Play Quiz: Music, 10 questions
        </button>
      </li>
      {selectedCategory === 'music' && (
        <div
          className={`difficulty-container ${
            musicDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '12',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleMusicDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '12',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleMusicDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '12',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleMusicDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Music

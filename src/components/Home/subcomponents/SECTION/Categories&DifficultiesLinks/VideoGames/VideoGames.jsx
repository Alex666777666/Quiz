import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const VideoGames = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  videoGamesDifficultyVisible,
  handleVideoGamesDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${
            selectedCategory === 'video_games' ? 'active' : ''
          }`}
          onClick={() => handleCategoryClick({ category: 'video_games' })}>
          Play Quiz: Video Games, 10 questions
        </button>
      </li>
      {selectedCategory === 'video_games' && (
        <div
          className={`difficulty-container ${
            videoGamesDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '15',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleVideoGamesDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '15',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleVideoGamesDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '15',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleVideoGamesDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default VideoGames

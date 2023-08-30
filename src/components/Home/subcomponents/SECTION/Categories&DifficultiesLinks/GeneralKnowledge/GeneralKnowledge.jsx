import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GeneralKnowledge = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  generalKnowledgeDifficultyVisible,
  handleGeneralKnowledgeDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${
            selectedCategory === 'general_knowledge' ? 'active' : ''
          }`}
          onClick={() =>
            handleCategoryClick({ category: 'general_knowledge' })
          }>
          Play Quiz: General Knowledge, 10 questions
        </button>
      </li>
      {selectedCategory === 'general_knowledge' && (
        <div
          className={`difficulty-container ${
            generalKnowledgeDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '9',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleGeneralKnowledgeDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '9',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleGeneralKnowledgeDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '9',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleGeneralKnowledgeDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default GeneralKnowledge

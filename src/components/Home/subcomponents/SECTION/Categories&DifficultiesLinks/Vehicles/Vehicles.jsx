import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Vehicles = ({
  selectedCategory,
  category,
  questions,
  handleCategoryClick,
  vehiclesDifficultyVisible,
  handleVehiclesDifficultyClick,
}) => {
  return (
    <>
      <li>
        <button
          className={`play-btn ${
            selectedCategory === 'vehicles' ? 'active' : ''
          }`}
          onClick={() => handleCategoryClick({ category: 'vehicles' })}>
          Play Quiz: Vehicles, 10 questions
        </button>
      </li>
      {selectedCategory === 'vehicles' && (
        <div
          className={`difficulty-container ${
            vehiclesDifficultyVisible ? 'show' : ''
          }`}>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '28',
                  difficulty: 'easy',
                  questions,
                },
              }}
              className={`difficulty-btn easy`}
              onClick={() => handleVehiclesDifficultyClick('easy')}>
              Easy Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '28',
                  difficulty: 'medium',
                  questions,
                },
              }}
              className={`difficulty-btn medium`}
              onClick={() => handleVehiclesDifficultyClick('medium')}>
              Medium Level
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/game',
                state: {
                  category: '28',
                  difficulty: 'hard',
                  questions,
                },
              }}
              className={`difficulty-btn hard`}
              onClick={() => handleVehiclesDifficultyClick('hard')}>
              Hard Level
            </Link>
          </li>
        </div>
      )}
    </>
  )
}

export default Vehicles

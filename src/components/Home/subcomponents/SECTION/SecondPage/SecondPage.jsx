import React from 'react'
import Animals from '../Categories&DifficultiesLinks/Animals/Animals.jsx'
import Mythology from '../Categories&DifficultiesLinks/Mythology/Mythology.jsx'
import Sports from '../Categories&DifficultiesLinks/Sports/Sports.jsx'
import Vehicles from '../Categories&DifficultiesLinks/Vehicles/Vehicles.jsx'
import VideoGames from '../Categories&DifficultiesLinks/VideoGames/VideoGames.jsx'

const SecondPage = ({
  selectedCategory,
  questions,
  handleCategoryClick,
  animalsDifficultyVisible,
  handleAnimalsDifficultyClick,
  mythologyDifficultyVisible,
  handleMythologyDifficultyClick,
  sportsDifficultyVisible,
  handleSportsDifficultyClick,
  vehiclesDifficultyVisible,
  handleVehiclesDifficultyClick,
  videoGamesDifficultyVisible,
  handleVideoGamesDifficultyClick,
}) => {
  return (
    <div>
      <Animals
        selectedCategory={selectedCategory}
        questions={questions}
        category='animals'
        handleCategoryClick={handleCategoryClick}
        animalsDifficultyVisible={animalsDifficultyVisible}
        handleAnimalsDifficultyClick={handleAnimalsDifficultyClick}
      />
      <Mythology
        selectedCategory={selectedCategory}
        questions={questions}
        category='mythology'
        handleCategoryClick={handleCategoryClick}
        mythologyDifficultyVisible={mythologyDifficultyVisible}
        handleMythologyDifficultyClick={handleMythologyDifficultyClick}
      />
      <Sports
        selectedCategory={selectedCategory}
        questions={questions}
        category='sports'
        handleCategoryClick={handleCategoryClick}
        sportsDifficultyVisible={sportsDifficultyVisible}
        handleSportsDifficultyClick={handleSportsDifficultyClick}
      />
      <Vehicles
        selectedCategory={selectedCategory}
        questions={questions}
        category='vehicles'
        handleCategoryClick={handleCategoryClick}
        vehiclesDifficultyVisible={vehiclesDifficultyVisible}
        handleVehiclesDifficultyClick={handleVehiclesDifficultyClick}
      />
      <VideoGames
        selectedCategory={selectedCategory}
        questions={questions}
        category='VideoGames'
        handleCategoryClick={handleCategoryClick}
        videoGamesDifficultyVisible={videoGamesDifficultyVisible}
        handleVideoGamesDifficultyClick={handleVideoGamesDifficultyClick}
      />
    </div>
  )
}

export default SecondPage

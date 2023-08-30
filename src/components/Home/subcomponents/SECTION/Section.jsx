import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import FirstPage from './FirstPage/FirstPage.jsx'

import SecondPage from './SecondPage/SecondPage.jsx'

import handleCategorySelect from '../SelectCategory/SelectCategory.js'

import handleAnimalsDifficultyClick from '../Categories&Difficulties/Animals/Animals.js'
import handleAnimeDifficultyClick from '../Categories&Difficulties/Anime/Anime.js'
import handleBooksDifficultyClick from '../Categories&Difficulties/Books/Books.js'
import handleGeneralKnowledgeDifficultyClick from '../Categories&Difficulties/GeneralKnowledge/GeneralKnowledge.js'
import handleMoviesDifficultyClick from '../Categories&Difficulties/Movies/Movies.js'
import handleMusicDifficultyClick from '../Categories&Difficulties/Music/Music.js'
import handleMythologyDifficultyClick from '../Categories&Difficulties/Mythology/Mythology.js'
import handleSportsDifficultyClick from '../Categories&Difficulties/Sports/Sports.js'
import handleVehiclesDifficultyClick from '../Categories&Difficulties/Vehicles/Vehicles.js'
import handleVideoGamesDifficultyClick from '../Categories&Difficulties/VideoGames/VideoGames.js'

import handlePlayRandomQuiz from '../randomButton/RandomizeButton.js'

import handleRightArrow from '../arrowsSelectPage/RightArrow.js'
import handleLeftArrow from '../arrowsSelectPage/LeftArrow.js'

import RightArrow from './ArrowsButtons/RightArrow/RightArrow.jsx'
import LeftArrow from './ArrowsButtons/LeftArrow/LeftArrow.jsx'

const Section = () => {
  const history = useHistory()

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [animeDifficultyVisible, setAnimeDifficultyVisible] = useState(false)
  const [moviesDifficultyVisible, setMoviesDifficultyVisible] = useState(false)
  const [booksDifficultyVisible, setBooksDifficultyVisible] = useState(false)
  const [
    generalKnowledgeDifficultyVisible,
    setGeneralKnowledgeDifficultyVisible,
  ] = useState(false)
  const [musicDifficultyVisible, setMusicDifficultyVisible] = useState(false)
  const [mythologyDifficultyVisible, setMythologyDifficultyVisible] =
    useState(false)
  const [sportsDifficultyVisible, setSportsDifficultyVisible] = useState(false)
  const [videoGamesDifficultyVisible, setVideoGamesDifficultyVisible] =
    useState(false)
  const [animalsDifficultyVisible, setAnimalsDifficultyVisible] =
    useState(false)
  const [vehiclesDifficultyVisible, setVehiclesDifficultyVisible] =
    useState(false)

  const [questions, setQuestions] = useState([])

  const [activePage, setActivePage] = useState(1)

  const [firstCategoriesVisible, setFirstCategoriesVisible] = useState(true)
  const [lastCategoriesVisible, setLastCategoriesVisible] = useState(false)

  const handleCategoryClick = ({ category }) => {
    handleCategorySelect({
      category,
      setSelectedCategory,
      setAnimeDifficultyVisible,
      setMoviesDifficultyVisible,
      setBooksDifficultyVisible,
      setGeneralKnowledgeDifficultyVisible,
      setMusicDifficultyVisible,
      setMythologyDifficultyVisible,
      setSportsDifficultyVisible,
      setVideoGamesDifficultyVisible,
      setAnimalsDifficultyVisible,
      setVehiclesDifficultyVisible,
    })
  }

  const handleRandomQuizClick = () => {
    handlePlayRandomQuiz(questions, history)
  }

  const handleLeftArrowClick = () => {
    handleLeftArrow(
      setActivePage,
      setFirstCategoriesVisible,
      setLastCategoriesVisible
    )
  }

  const handleRightArrowClick = () => {
    handleRightArrow(
      setActivePage,
      setFirstCategoriesVisible,
      setLastCategoriesVisible
    )
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <span className='material-symbols-outlined house'>home_app_logo</span>
      </div>
      <h1>Quiz App</h1>
      <div className='play-btn-container'>
        <ul className='btn-list'>
          {activePage === 1 && (
            <Fragment>
              <FirstPage
                selectedCategory={selectedCategory}
                questions={questions}
                handleCategoryClick={handleCategoryClick}
                animeDifficultyVisible={animeDifficultyVisible}
                handleAnimeDifficultyClick={handleAnimeDifficultyClick}
                moviesDifficultyVisible={moviesDifficultyVisible}
                handleMoviesDifficultyClick={handleMoviesDifficultyClick}
                booksDifficultyVisible={booksDifficultyVisible}
                handleBooksDifficultyClick={handleBooksDifficultyClick}
                generalKnowledgeDifficultyVisible={
                  generalKnowledgeDifficultyVisible
                }
                handleGeneralKnowledgeDifficultyClick={
                  handleGeneralKnowledgeDifficultyClick
                }
                musicDifficultyVisible={musicDifficultyVisible}
                handleMusicDifficultyClick={handleMusicDifficultyClick}
              />
            </Fragment>
          )}
          {activePage === 2 && (
            <Fragment>
              <SecondPage
                selectedCategory={selectedCategory}
                questions={questions}
                handleCategoryClick={handleCategoryClick}
                animalsDifficultyVisible={animalsDifficultyVisible}
                handleAnimalsDifficultyClick={handleAnimalsDifficultyClick}
                mythologyDifficultyVisible={mythologyDifficultyVisible}
                handleMythologyDifficultyClick={handleMythologyDifficultyClick}
                sportsDifficultyVisible={sportsDifficultyVisible}
                handleSportsDifficultyClick={handleSportsDifficultyClick}
                vehiclesDifficultyVisible={vehiclesDifficultyVisible}
                handleVehiclesDifficultyClick={handleVehiclesDifficultyClick}
                videoGamesDifficultyVisible={videoGamesDifficultyVisible}
                handleVideoGamesDifficultyClick={
                  handleVideoGamesDifficultyClick
                }
              />
            </Fragment>
          )}
        </ul>
        <button className='lucky-btn' onClick={handleRandomQuizClick}>
          I'm lucky 🎲
        </button>
      </div>
      <div className='page-selector'>
        <LeftArrow
          direction='left'
          onClick={handleLeftArrowClick}
          disabled={firstCategoriesVisible}
        />
        <span className='page-number'>
          Page: {firstCategoriesVisible ? 1 : 2}
        </span>
        <RightArrow
          direction='right'
          onClick={handleRightArrowClick}
          disabled={lastCategoriesVisible}
        />
      </div>
    </>
  )
}

export default Section

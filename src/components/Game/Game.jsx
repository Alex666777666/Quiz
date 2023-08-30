import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons'
import M from 'materialize-css'
import correctNotification from '../../assets/audio/success.mp3'
import wrongNotification from '../../assets/audio/fail.mp3'
import btnSound from '../../assets/audio/click.mp3'
import clock from '../../assets/audio/clock.mp3'

import decodeHTMLEntities from './subcomponents/methods/decodeHTMLEntities/decodeHTMLEntities.js'

import shuffleArray from './subcomponents/methods/shuffleArray/shuffleArray.js'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: null,
      difficulty: null,
      questions: [],
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correct_answer: 0,
      incorrect_answers: 0,
      hints: 4,
      usedHints: false,
      nextBtnDisabled: false,
      previousBtnDisabled: true,
      previousRandomNumbers: [],
      time: {},
      lastPlayedQuiz: null,
    }
    this.interval = null
    this.correctSound = React.createRef()
    this.wrongSound = React.createRef()
    this.btnSound = React.createRef()
    this.clock = React.createRef()
  }

  getQuestionsFromServer = async (category, difficulty) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
      )
      const data = await response.json()
      const questionsFromServer = data.results

      if (questionsFromServer.length > 0) {
        this.setState(
          {
            questions: questionsFromServer,
            currentQuestionIndex: 0,
          },
          () => {
            this.displayQuestions(this.state.currentQuestionIndex)
            this.startTimer()
          }
        )
      } else {
        console.error(
          'No questions found for the selected category and difficulty.'
        )
      }
    } catch (error) {
      console.error('Error fetching questions:', error)
    }
  }

  componentDidMount() {
    const { category, difficulty } = this.props.location.state

    if (category && difficulty) {
      this.setState({ category, difficulty }, () => {
        this.getQuestionsFromServer(category, difficulty)
      })
    } else {
      console.error(
        'No questions found for the selected category and difficulty.'
      )
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.state !== prevProps.location.state) {
      const { category, difficulty } = this.props.location.state
      this.setState({ category, difficulty }, () => {
        this.getQuestionsFromServer(category, difficulty)
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  displayAnswerOptions = () => {
    const { currentQuestion } = this.state

    if (!currentQuestion.options) {
      return null
    }

    const decodedOptions = currentQuestion.options.map((option, index) => (
      <p
        key={index}
        onClick={this.handleOptionClick}
        className='option'
        data-index={index}>
        {decodeHTMLEntities(option)}
      </p>
    ))

    return decodedOptions
  }

  displayQuestions = currentQuestionIndex => {
    const { questions } = this.state
    if (
      questions &&
      questions.length > 0 &&
      currentQuestionIndex >= 0 &&
      currentQuestionIndex < questions.length
    ) {
      const currentQuestion = questions[currentQuestionIndex]
      if (currentQuestion && currentQuestion.question) {
        const decodedQuestion = decodeHTMLEntities(currentQuestion.question)
        const options = [
          currentQuestion.correct_answer,
          ...currentQuestion.incorrect_answers.map(decodeHTMLEntities),
        ]

        const shuffledOptions = shuffleArray(options)

        this.setState(
          {
            currentQuestion: {
              ...currentQuestion,
              question: decodedQuestion,
              options: shuffledOptions,
            },
            numberOfQuestions: questions.length,
            answer: '',
            previousRandomNumbers: [],
          },
          () => {
            this.showOptions()
            this.handleDisabledBtn()
          }
        )
      } else {
        console.error(
          'Invalid question object or question property is missing.'
        )

        this.displayQuestions(currentQuestionIndex + 1)
      }
    } else {
      console.error('Invalid question index or no questions available.')
    }
  }

  handleOptionClick = e => {
    const selectedAnswerIndex = Number(e.target.getAttribute('data-index'))
    const correctAnswerIndex = this.state.currentQuestion.options.findIndex(
      option =>
        decodeHTMLEntities(option) ===
        decodeHTMLEntities(this.state.currentQuestion.correct_answer)
    )

    if (selectedAnswerIndex === correctAnswerIndex) {
      this.correctSound.current.play()
      this.correctAnswer()
    } else {
      this.wrongSound.current.play()
      this.wrongAnswer()
    }
  }

  playBtnSound = () => {
    this.btnSound.current.play()
  }

  handleQuitBtnClick = () => {
    this.playBtnSound()
    if (window.confirm('Are you sure you want to quit?')) {
      this.props.history.push('/')
    }
  }

  handleBtnClick = e => {
    switch (e.target.id) {
      case 'quit-btn':
        this.handleQuitBtnClick()
        break
      default:
        break
    }
  }

  correctAnswer = () => {
    M.toast({
      html: '<img src="https://em-content.zobj.net/thumbs/120/animated-noto-color-emoji/356/high-voltage_26a1.gif" alt="High Voltage" width="20" height="20"> Correct Answer! <img src="https://em-content.zobj.net/thumbs/120/animated-noto-color-emoji/356/high-voltage_26a1.gif" alt="High Voltage" width="20" height="20">',
      classes: 'toast-valid',
      displayLength: 3000,
    })
    this.setState(
      prevState => ({
        score: prevState.score + 1,
        correct_answer: prevState.correct_answer + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.currentQuestionIndex === this.state.numberOfQuestions) {
          this.endGame()
        } else {
          this.displayQuestions(this.state.currentQuestionIndex)
        }
      }
    )
  }

  wrongAnswer = () => {
    navigator.vibrate(1000)
    M.toast({
      html: 'Wrong Answer!',
      classes: 'toast-invalid',
      displayLength: 1500,
    })
    this.setState(
      prevState => ({
        incorrect_answers: prevState.incorrect_answers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.currentQuestionIndex === this.state.numberOfQuestions) {
          this.endGame()
        } else {
          this.displayQuestions(this.state.currentQuestionIndex)
        }
      }
    )
  }

  showOptions = () => {
    const options = Array.from(document.querySelectorAll('.option'))

    options.forEach(option => {
      option.style.visibility = 'visible'
    })
    this.setState({
      usedHints: false,
    })
  }

  handleHints = () => {
    if (this.state.currentQuestion.options.length < 3) {
      return
    }

    if (this.state.hints > 0 && this.state.usedHints === false) {
      const { currentQuestion } = this.state
      const optionsCount = currentQuestion.options.length
      const shuffledIndices = []
      let correctIndex = -1

      currentQuestion.options.forEach((option, index) => {
        if (option === currentQuestion.correct_answer) {
          correctIndex = index
        }
      })

      while (shuffledIndices.length < 1) {
        const randomNumber = Math.floor(Math.random() * optionsCount)
        if (randomNumber !== correctIndex) {
          shuffledIndices.push(randomNumber)
        }
      }

      shuffledIndices.push(correctIndex)

      const options = document.querySelectorAll('.option')
      options.forEach((option, index) => {
        if (!shuffledIndices.includes(index)) {
          option.style.visibility = 'hidden'
        }
      })

      this.setState(prevState => ({
        hints: prevState.hints - 1,
        usedHints: true,
      }))
    }
  }

  startTimer = () => {
    const countDownTime = Date.now() + 200000
    this.interval = setInterval(() => {
      const now = new Date()
      const distance = countDownTime - now

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(this.interval)
        this.setState(
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
            timerColor: '',
            lastTimerColor: '',
          },
          () => {
            this.endGame()
          }
        )
      } else {
        const clockSound = this.clock.current

        this.setState(prevState => {
          let timerColor = prevState.timerColor
          if (minutes === 2 && seconds === 50) {
            timerColor = 'orange'
            clockSound.play()
          } else if (minutes === 1 && seconds === 0) {
            timerColor = 'red'
            clockSound.play()
          }
          return {
            time: {
              minutes,
              seconds,
            },
            timerColor,
            lastTimerColor: timerColor,
          }
        })
      }
    }, 1000)
  }

  handleDisabledBtn = () => {
    if (
      this.state.previousQuestion === undefined ||
      this.state.currentQuestionIndex === 0
    ) {
      this.setState({
        previousBtnDisabled: true,
      })
    } else {
      this.setState({
        previousBtnDisabled: false,
      })
    }
    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions
    ) {
      this.setState({
        nextBtnDisabled: true,
      })
    } else {
      this.setState({
        nextBtnDisabled: false,
      })
    }
  }

  endGame = () => {
    const {
      numberOfQuestions,
      numberOfAnsweredQuestions,
      correct_answer,
      incorrect_answers,
      hints,
    } = this.state
    const score = (correct_answer / numberOfQuestions) * 100

    const playerStats = {
      score,
      numberOfQuestions,
      numberOfAnsweredQuestions,
      correct_answer,
      incorrect_answers,
      hintsUsed: 4 - hints,
    }

    this.setState({ lastPlayedQuiz: this.state.question })

    if (numberOfAnsweredQuestions === numberOfQuestions) {
      alert('Quiz has ended!')
    }

    setTimeout(() => {
      this.props.history.push({
        pathname: '/quizSummary',
        state: { playerStats },
      })
    }, 1000)
  }

  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      hints,
      numberOfQuestions,
      time,
    } = this.state
    return (
      <div className='page'>
        <Fragment>
          <Helmet>
            <title>Quiz Page</title>
          </Helmet>

          <Fragment>
            <audio ref={this.correctSound} src={correctNotification}></audio>
            <audio ref={this.wrongSound} src={wrongNotification}></audio>
            <audio ref={this.btnSound} src={btnSound}></audio>
            <audio ref={this.clock} src={clock}></audio>
          </Fragment>
          <div className='questions'>
            <h2>Quiz Game</h2>
            <div className='lifeline-container'>
              <p>
                <FontAwesomeIcon
                  onClick={this.handleHints}
                  className='lightbulb'
                  icon={faLightbulb}
                />
                <span className='lifeline lightbulb_text'>{hints}</span>
                <span
                  className={`right clock_text`}
                  style={{ color: this.state.timerColor }}>
                  <span>
                    {time.minutes}:{time.seconds}
                  </span>
                  <FontAwesomeIcon
                    className='clock'
                    style={{ color: this.state.timerColor }}
                    icon={faClock}
                  />
                </span>
              </p>
            </div>
            <div>
              <p>
                <span>
                  {currentQuestionIndex + 1} of {numberOfQuestions}
                </span>
              </p>
            </div>
            <h5 className='question'>{currentQuestion.question}</h5>
            <div className='options-container'>
              {this.displayAnswerOptions()}
            </div>

            <div className='btn-container'>
              <button id='quit-btn' onClick={this.handleBtnClick}>
                Quit
              </button>
            </div>
          </div>
        </Fragment>
      </div>
    )
  }
}

export default withRouter(Game)

import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { mdiCheckCircleOutline } from '@mdi/js'
import Icon from '@mdi/react'

class QuizSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      correct_answer: 0,
      incorrect_answers: 0,
      hintsUsed: 0,
      lastPlayedQuiz: null,
    }
  }

  componentDidMount() {
    const { state } = this.props.location
    if (state && state.playerStats) {
      const { correct_answer, numberOfQuestions } = state.playerStats
      const score = (correct_answer / numberOfQuestions) * 100
      this.setState({
        score: score || 0,
        numberOfQuestions: state.playerStats.numberOfQuestions,
        correct_answer: state.playerStats.correct_answer,
        incorrect_answers: state.playerStats.incorrect_answers,
        hintsUsed: state.playerStats.hintsUsed,
        lastPlayedQuiz: state.questions,
      })
    }
  }

  render() {
    const { state } = this.props.location
    const { playerStats } = state || {}

    let stats, remark
    const userScore = this.state.score

    if (userScore >= 85 && userScore <= 100) {
      remark = 'You are an absolute genius!😎'
    } else if (userScore >= 70 && userScore < 85) {
      remark = 'You did great!😁'
    } else if (userScore >= 50 && userScore < 70) {
      remark = 'You can do better!🙃'
    } else if (userScore >= 30 && userScore < 50) {
      remark = 'Better luck next time!😉'
    } else {
      remark = 'You need to practice!😕'
    }

    if (state !== undefined && playerStats !== undefined) {
      stats = (
        <Fragment>
          <div>
            <Icon path={mdiCheckCircleOutline} size={5} className='success' />
          </div>
          <h1>Quiz has ended</h1>
          <div className='container stats'>
            <h4>{remark}</h4>
            <h2>Your score: {this.state.score.toFixed(0)}%</h2>
            <span className='stat left'>Total number of questions:</span>
            <span className='right'>{this.state.numberOfQuestions}</span>
            <br />
            <span className='stat left'>Total number of Correct Answers:</span>
            <span className='right'>{this.state.correct_answer}</span>
            <br />
            <span className='stat left'>Total number of Wrong Answers:</span>
            <span className='right'>{this.state.incorrect_answers}</span>
            <br />
            <span className='stat left'>Hints Used:</span>
            <span className='right'>{this.state.hintsUsed}</span>
          </div>
          <section>
            <ul>
              <li>
                <Link to='/'>Back to Home</Link>
              </li>
            </ul>
          </section>
        </Fragment>
      )
    } else {
      stats = (
        <Fragment>
          <section>
            <h1 className='no-stats'>No Statistic Available</h1>

            <ul>
              <li>
                <Link to='/'>Back to Home</Link>
              </li>
            </ul>
          </section>
        </Fragment>
      )
    }
    return (
      <div className='summary-page'>
        <Fragment>
          <Helmet>
            <title>Quiz App - Summary</title>
          </Helmet>
          <div className='quiz-summary'>{stats}</div>
        </Fragment>
      </div>
    )
  }
}

export default QuizSummary

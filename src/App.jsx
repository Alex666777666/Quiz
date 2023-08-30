import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Game from './components/Game/Game.jsx'
import QuizSummary from './components/SummaryPage/QuizSummary.jsx'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/quizSummary' component={QuizSummary} />
      </Switch>
    </Router>
  )
}

export default App

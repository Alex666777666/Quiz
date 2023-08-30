import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Section from './subcomponents/SECTION/Section.jsx'

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Home</title>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
        />
      </Helmet>
      <div id='home'>
        <section className='section'>
          <Section />
        </section>
      </div>
    </Fragment>
  )
}

export default Home

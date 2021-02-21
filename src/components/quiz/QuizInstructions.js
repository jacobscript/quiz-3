import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import answer from '../../assets/img/answer.png'
import fiftyfifty from '../../assets/img/fiftyfifty.png'
import hints from '../../assets/img/hints.png'
import options from '../../assets/img/options.png'

const QuizInstructions = () => (
    <Fragment>
        <Helmet>
            <title>Quiz Instructions - Quiz App</title>
        </Helmet>
        <div className='instructions container'>
            <h1>How to play the Game</h1>
            <p>Be sure to read this guide first</p>
            <ul className='browser-default' id='main-list'>
                <li>The game has a duration of 15 minuts.</li>
                <li>Each game consists of 15 questions.</li>
                <li>
                    Every question contains 4 options.
                    <img src={options} alt='Quiz App options example' />
                </li>
                <li>
                    Select the option which best answers the question.
                    <img src={answer} alt='Quiz App answer example' />
                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id='sublist'>
                        <li>Two 50-50 chaces</li>
                        <li>5 Hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the icon
                    <span className='mdi mdi-set-center mdi-24px lifeline lifeline-icon'></span>
                    will remove 2 wrong answers.
                    <img src={fiftyfifty} alt='Quiz App Fifty-Fifty example' />
                </li>
                <li>
                    Using a hint by clicking the icon
                    <span className='mdi mdi-lightbulb-on mdi-24px lifeline-icon'></span>
                    will remove one wrong answer. You can use as many hints as
                    possible on a single question.
                    <img src={hints} alt='Quiz App hints example' />
                </li>
                <li>
                    Feel free to quit the game at any time. In that case your
                    score will be revealed afterwards.
                </li>
                <li>The timer starts as soon as the game loads.</li>
                <li>Let's do this if you think you got what it takes.</li>
            </ul>
            <div>
                <span className='left'>
                    <Link to='/'>Take me back</Link>
                </span>
                <span className='right'>
                    <Link to='/play/quiz'>Let's play</Link>
                </span>
            </div>
        </div>
    </Fragment>
)

export default QuizInstructions

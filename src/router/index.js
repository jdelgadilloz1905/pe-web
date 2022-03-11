/** @format */

import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Layout from './components/Layout'

import Home from '../pages/home'
import Process from '../pages/process'
import Advisors from '../pages/advisors'
import About from '../pages/about'
import Contact from '../pages/contact'
import Login from '../pages/login'
import Register from '../pages/register'
import RegisterTwo from '../pages/register-2'
import WizardStepOne from '../pages/wizard/pages/section-one/step-one'
import WizardStepTwo from '../pages/wizard/pages/section-one/step-two'
import WizardStepThree from '../pages/wizard/pages/section-two/step-three'
import WizardStepFour from '../pages/wizard/pages/section-two/step-four'
import WizardStepFive from '../pages/wizard/pages/section-two/step-five'
import WizardStepSix from '../pages/wizard/pages/section-two/step-six'
import WizardStepSeven from '../pages/wizard/pages/section-two/step-seven'
import WizardStepEight from '../pages/wizard/pages/section-two/step-eight'
import WizardStepNine from '../pages/wizard/pages/section-three/step-nine'
import WizardStepTen from '../pages/wizard/pages/section-three/step-ten'
import WizardStepEleven from '../pages/wizard/pages/section-three/step-eleven'
import WizardStepTwelve from '../pages/wizard/pages/section-three/step-twelve'
import WizardStepThirteen from '../pages/wizard/pages/section-four/step-thirteen'
import WizardStepFourteen from '../pages/wizard/pages/section-four/step-fourteen'
import WizardStepFifteen from '../pages/wizard/pages/section-four/step-fifteen'
import WizardStepSixteen from '../pages/wizard/pages/section-four/step-sixteen'
import WizardStepSeventeen from '../pages/wizard/pages/section-five/step-seventen'
import WizardStepEighteen from '../pages/wizard/pages/section-five/step-eighteen'
import WizardStepNineteen from '../pages/wizard/pages/section-five/step-nineteen'

import NotFound from '../pages/not-found'

import './style.sass'

export default function Routers() {
	return (
		<Router>
			<Layout>
				<InnerRoutes />
			</Layout>
		</Router>
	)
}

function InnerRoutes() {
	let location = useLocation()

	return (
		<TransitionGroup>
			<CSSTransition
				key={location.pathname}
				classNames={`${location.pathname.match(/wizard/) ? '' : 'fade'}`}
				timeout={500}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/process' component={Process} />
					<Route exact path='/advisors' component={Advisors} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/register-two' component={RegisterTwo} />
					<Route exact path='/wiz-welcome/step-one' component={WizardStepOne} />
					<Route exact path='/wizard/step-two' component={WizardStepTwo} />
					<Route exact path='/wizard/step-three' component={WizardStepThree} />
					<Route exact path='/wizard/step-four' component={WizardStepFour} />
					<Route exact path='/wizard/step-five' component={WizardStepFive} />
					<Route exact path='/wizard/step-six' component={WizardStepSix} />
					<Route exact path='/wizard/step-seven' component={WizardStepSeven} />
					<Route exact path='/wizard/step-eight' component={WizardStepEight} />
					<Route exact path='/wizard/step-nine' component={WizardStepNine} />
					<Route exact path='/wizard/step-ten' component={WizardStepTen} />
					<Route exact path='/wizard/step-eleven' component={WizardStepEleven} />
					<Route exact path='/wizard/step-twelve' component={WizardStepTwelve} />
					<Route exact path='/wizard/step-thirteen' component={WizardStepThirteen} />
					<Route exact path='/wizard/step-fourteen' component={WizardStepFourteen} />
					<Route exact path='/wizard/step-fifteen' component={WizardStepFifteen} />
					<Route exact path='/wizard/step-sixteen' component={WizardStepSixteen} />
					<Route exact path='/wizard/step-seventeen' component={WizardStepSeventeen} />
					<Route exact path='/wizard/step-eighteen' component={WizardStepEighteen} />
					<Route exact path='/wizard/step-nineteen' component={WizardStepNineteen} />
					<Route path='*' component={NotFound} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
}

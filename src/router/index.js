/** @format */

import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom'
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

import ClientStepOne from '../pages/wizard/pages-clients/section-one/step-one'
import ClientStepTwo from '../pages/wizard/pages-clients/section-one/step-two'
import ClientStepThree from '../pages/wizard/pages-clients/section-two/step-three'
import ClientStepFour from '../pages/wizard/pages-clients/section-two/step-four'
import ClientStepFive from '../pages/wizard/pages-clients/section-two/step-five'
import ClientStepSix from '../pages/wizard/pages-clients/section-two/step-six'
import ClientStepSeven from '../pages/wizard/pages-clients/section-two/step-seven'
import ClientStepEight from '../pages/wizard/pages-clients/section-two/step-eight'
import ClientStepNine from '../pages/wizard/pages-clients/section-three/step-nine'
import ClientStepTen from '../pages/wizard/pages-clients/section-three/step-ten'
import ClientStepEleven from '../pages/wizard/pages-clients/section-three/step-eleven'
import ClientStepTwelve from '../pages/wizard/pages-clients/section-three/step-twelve'
import ClientStepThirteen from '../pages/wizard/pages-clients/section-four/step-thirteen'
import ClientStepFourteen from '../pages/wizard/pages-clients/section-four/step-fourteen'
import ClientStepFifteen from '../pages/wizard/pages-clients/section-four/step-fifteen'
import ClientStepSixteen from '../pages/wizard/pages-clients/section-four/step-sixteen'
import ClientStepSixteen2 from '../pages/wizard/pages-clients/section-four/step-sixteen2'
import ClientStepSeventeen from '../pages/wizard/pages-clients/section-five/step-seventen'
import ClientStepEighteen from '../pages/wizard/pages-clients/section-five/step-eighteen'
import ClientStepNineteen from '../pages/wizard/pages-clients/section-five/step-nineteen'

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
					<Route
						exact
						path='/wizard/step-eleven'
						component={WizardStepEleven}
					/>
					<Route
						exact
						path='/wizard/step-twelve'
						component={WizardStepTwelve}
					/>
					<Route
						exact
						path='/wizard/step-thirteen'
						component={WizardStepThirteen}
					/>
					<Route
						exact
						path='/wizard/step-fourteen'
						component={WizardStepFourteen}
					/>
					<Route
						exact
						path='/wizard/step-fifteen'
						component={WizardStepFifteen}
					/>
					<Route
						exact
						path='/wizard/step-sixteen'
						component={WizardStepSixteen}
					/>
					<Route
						exact
						path='/wizard/step-seventeen'
						component={WizardStepSeventeen}
					/>
					<Route
						exact
						path='/wizard/step-eighteen'
						component={WizardStepEighteen}
					/>
					<Route
						exact
						path='/wizard/step-nineteen'
						component={WizardStepNineteen}
					/>

					<Route exact path='/client/step-one' component={ClientStepOne} />
					<Route exact path='/client/step-two' component={ClientStepTwo} />
					<Route exact path='/client/step-three' component={ClientStepThree} />
					<Route exact path='/client/step-four' component={ClientStepFour} />
					<Route exact path='/client/step-five' component={ClientStepFive} />
					<Route exact path='/client/step-six' component={ClientStepSix} />
					<Route exact path='/client/step-seven' component={ClientStepSeven} />
					<Route exact path='/client/step-eight' component={ClientStepEight} />
					<Route exact path='/client/step-nine' component={ClientStepNine} />
					<Route exact path='/client/step-ten' component={ClientStepTen} />
					<Route
						exact
						path='/client/step-eleven'
						component={ClientStepEleven}
					/>
					<Route
						exact
						path='/client/step-twelve'
						component={ClientStepTwelve}
					/>
					<Route
						exact
						path='/client/step-thirteen'
						component={ClientStepThirteen}
					/>
					<Route
						exact
						path='/client/step-fourteen'
						component={ClientStepFourteen}
					/>
					<Route
						exact
						path='/client/step-fifteen'
						component={ClientStepFifteen}
					/>
					<Route
						exact
						path='/client/step-sixteen'
						component={ClientStepSixteen}
					/>
					<Route
						exact
						path='/client/step-sixteen2'
						component={ClientStepSixteen2}
					/>
					<Route
						exact
						path='/client/step-seventeen'
						component={ClientStepSeventeen}
					/>
					<Route
						exact
						path='/client/step-eighteen'
						component={ClientStepEighteen}
					/>
					<Route
						exact
						path='/client/step-nineteen'
						component={ClientStepNineteen}
					/>
					<Route path='*' component={NotFound} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	)
}

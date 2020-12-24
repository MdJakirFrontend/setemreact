import React, { Component } from 'react'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import Forgot from '../Auth/Forgot'
import Reset from '../Auth/Reset'
import Verify from '../Auth/Verify'
import './Auth.scss'


export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderSwitch(param) {
        switch (param) {
            case 'signin':
                return <SignIn />
            case 'signup':
                return <SignUp />
            case 'forgot':
                return <Forgot />
            case 'reset':
                return <Reset />
            case 'verify':
                return <Verify />
            default:
                return <SignIn />
        }
    }

    render() {
        return (
            <>
                <div id={'auth'}>
                    {this.props.objective ? this.renderSwitch(this.props.objective) : null}
                </div>
            </>
        )
    }
}

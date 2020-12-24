import React, { Component } from 'react'
import Auth from '../components/Auth/Auth'


export default class Verify extends Component {
    render() {
        return (
            <>
                <main id="main-content">
                    <Auth objective={'verify'} />
                </main>
            </>
        )
    }
}

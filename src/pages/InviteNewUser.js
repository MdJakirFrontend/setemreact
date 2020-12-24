import React, { Component } from 'react'
import InviteUser from '../components/User/InviteUser'

export default class InviteNewUser extends Component {
    render() {
        return (
            <>
                <main id="main-content">
                    <h1 className={'page-title'}>Invite New Users</h1>
                    <figure className={'main-content-inner'}>
                        <div className={'mt-4'}>
                            <InviteUser />
                        </div>
                    </figure>
                </main>
            </>
        )
    }
}

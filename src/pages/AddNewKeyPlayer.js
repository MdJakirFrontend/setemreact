import React, { Component } from 'react'
import AddKeyPlayer from '../components/KeyPlayer/AddKeyPlayer'

export default class AddNewKeyPlayer extends Component {
    render() {
        return (
            <>
                <main id="main-content">
                    <h1 className={'page-title'}>Add New Key Players</h1>
                    <figure className={'main-content-inner'}>
                        <AddKeyPlayer />
                    </figure>
                </main>
            </>
        )
    }
}

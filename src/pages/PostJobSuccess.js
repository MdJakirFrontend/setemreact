import React, { Component } from 'react'
import PostJobStepSuccess from '../components/PostJob/PostJobStepSuccess'

export default class PostJobSuccess extends Component {
    render() {
        return (
            <>
                <main id="main-content">
                    <figure className={'main-content-inner'}>
                        <PostJobStepSuccess />
                    </figure>
                </main>
            </>
        )
    }
}

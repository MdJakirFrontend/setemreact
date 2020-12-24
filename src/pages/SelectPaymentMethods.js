import React, { Component } from 'react'
import SelectPaymentMethod from '../components/PostJob/SelectPaymentMethod'

export default class SelectPaymentMethods extends Component {
    render() {
        return (
            <>
                <main id="main-content">
                    <h1 className={'page-title mb-4'}>Select Payment Method</h1>
                    <figure className={'main-content-inner'}>
                        <SelectPaymentMethod />
                    </figure>
                </main>
            </>
        )
    }
}

import React, { Component } from 'react'
import Paginate from '../utilities/Paginate/Paginate'
import CompanyQuestionTable from '../components/CompanyQuestion/CompanyQuestionTable'

export default class CompanyReview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            paginate: {
                paginateItems: 3,
                activeItem: 1
            }
        }
    }
    handlePaginateItem() {
        return alert('click event working on handlePaginateItem');
    }

    render() {
        return (
            <>
                <main id="main-content">
                    <h1 className={'page-title mb-4'}>Company Review</h1>
                    <CompanyQuestionTable />
                    <Paginate paginate={this.state.paginate} handlePaginateItem={this.handlePaginateItem.bind(this)} />
                </main>
            </>
        )
    }
}
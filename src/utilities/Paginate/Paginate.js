import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'
import './Paginate.scss'

export default class Paginate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numberOfItems: 3,
            activeNumber: 1
        }
    }

    componentDidMount() {
        let { paginateItems, activeItem } = this.props.paginate
        this.setState({
            numberOfItems: paginateItems,
            activeNumber: activeItem
        })
    }
    
    render() {

        let { numberOfItems, activeNumber } = this.state;
        let items = [];
        for (let number = 1; number <= numberOfItems; number++) {
            items.push(
                <Pagination.Item key={number} active={number === activeNumber} onClick={this.props.handlePaginateItem}>
                    {number}
                </Pagination.Item>,
            );
        }

        return (
            <>
                <Pagination className={'justify-content-center mt-3'}>
                    <Pagination.Item onClick={this.props.handlePaginateItem}> Previous </Pagination.Item>
                    <Pagination.Prev />
                    {items}
                    <Pagination.Next />
                    <Pagination.Item onClick={this.props.handlePaginateItem}> Next </Pagination.Item>
                </Pagination>
            </>
        )
    }
}

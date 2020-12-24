
import React, { Component } from 'react'
import { BiSortDown } from 'react-icons/bi';
import { Form, Button } from 'react-bootstrap';
import './InstantSearch.scss';



export default class InstantSearch extends Component {

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className={'form-control-grid search-wrap'}>
                        <div style={{ backgroundImage: 'url(assets/img/search-green.svg)' }} className={'picker-control search-control'}>
                            <Form.Control className={'ks-form-control pl-5'} type="search Users" placeholder="Search" />
                            <Button className={'btn btn-light bg-white rounded btn-sort'}>
                                <BiSortDown size={'1.3rem'} className={'mr-2'} />
                            </Button>
                            <Form.Control as="select" className={'btn btn-light bg-white rounded btn-select'}>
                                <option>All</option>
                                <option>Roll</option>
                                <option>Designation</option>
                                <option>Name</option>
                            </Form.Control>
                        </div>
                        <div className={'select-control'}>
                            <img src={'assets/img/select-control-img.svg'} alt={''} className={'select-control-img'} />
                            <Form.Control as="select" className={'ks-form-control rounded'} >
                                <option>Default</option>
                                <option>Roll</option>
                                <option>Designation</option>
                                <option>Name</option>
                            </Form.Control>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

import React, { Component } from 'react'
import './Header.scss'
import { Link } from "react-router-dom";
import { Form, Dropdown } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';


export default class Header extends Component {
    render() {
        return (
            <header className="App-header py-2">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="header-logo">
                                <Link to="/" className='d-inline-block'>
                                    <img src="assets/img/logo.svg" alt="header-logo" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-unstyled d-flex align-items-center justify-content-end pb-0 mb-0">
                                <li>
                                    <Form>
                                        <Form.Group controlId="formGroupText" className="mb-0 search-group">
                                            <Input style={{maxWidth : '175px'}} size="large" className={'border-0'} placeholder="Search here..." prefix={<AiOutlineSearch size ={'1.3rem'} />} />
                                        </Form.Group>
                                    </Form>
                                </li>
                                <li className="ml-4">
                                    <Dropdown>
                                        <Dropdown.Toggle className={'bg-white border-0'} variant="light" id="dropdown-basic">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
                                                <g id="Group_429" data-name="Group 429" transform="translate(-46 2)">
                                                    <g id="Group_94" data-name="Group 94" transform="translate(46)">
                                                        <path id="Notification_Icon" data-name="Notification Icon" d="M6,14h4a2,2,0,1,1-4,0ZM1,13a1,1,0,0,1,0-2h.5A4.353,4.353,0,0,0,3,8V5A4.952,4.952,0,0,1,8,0a4.951,4.951,0,0,1,5,5V8a4.351,4.351,0,0,0,1.5,3H15a1,1,0,0,1,0,2Z" fill="#424242" />
                                                        <g id="Notification_Badge" data-name="Notification Badge" transform="translate(11)" fill="#ff005b" stroke="#fff" strokeWidth="2">
                                                            <circle cx="2" cy="2" r="2" stroke="none" />
                                                            <circle cx="2" cy="2" r="3" fill="none" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="ml-4">
                                    <Dropdown>
                                        <Dropdown.Toggle className={'bg-white border-0'} variant="light">
                                            <span className="d-inline-block mr-3"><strong>Steve Smith</strong> <FaChevronDown /> </span>
                                            <img src="assets/img/Avatar.png" alt="user-logo" className="img-fluid" />

                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">My Wallet</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Lock Screen</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

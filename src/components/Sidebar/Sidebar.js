import React, { Component } from 'react'
import './Sidebar.scss'
import { NavLink , Link } from "react-router-dom";
import $ from "jquery";

export default class Sidebar extends Component {

    // dropdownInit
    dropdownInit() {
        $('.nav-item.dropdown > a').on('click', function (e) {
            e.preventDefault();
            let parentElement = $(this).parent('li');
            parentElement.find("> .dropdown-menu").slideToggle(500);
        });
    }

    componentDidMount() {
        this.dropdownInit();
    }

    render() {
        return (
            <>
                <nav id="sidebar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path id="Icon_Dashboard" data-name="Icon Dashboard" d="M13,16a.945.945,0,0,1-1-1V6a.945.945,0,0,1,1-1h2a.945.945,0,0,1,1,1v9a.945.945,0,0,1-1,1ZM7,16a.944.944,0,0,1-1-1V1A.945.945,0,0,1,7,0H9a.945.945,0,0,1,1,1V15a.944.944,0,0,1-1,1ZM1,16a.945.945,0,0,1-1-1V11a.945.945,0,0,1,1-1H3a.946.946,0,0,1,1,1v4a.945.945,0,0,1-1,1Z" fill="#fff" />
                                </svg>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink exact activeClassName="active" className="nav-link dropdown-toggle" to="/company" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.2" viewBox="0 0 16 15.2">
                                    <path id="Vector" d="M14.4,3.2H12V1.6A1.6,1.6,0,0,0,10.4,0H5.6A1.6,1.6,0,0,0,4,1.6V3.2H1.6A1.6,1.6,0,0,0,0,4.8V7.2H16V4.8A1.6,1.6,0,0,0,14.4,3.2ZM5.6,1.6h4.8V3.2H5.6Zm4,8H6.4V8H0v5.6a1.6,1.6,0,0,0,1.6,1.6H14.4A1.6,1.6,0,0,0,16,13.6V8H9.6Z" fill="#c1c1c1" />
                                </svg>
                                Company
                            </NavLink>
                            <div className="dropdown-menu" >
                                <Link className="dropdown-item" to="/edit-profile">Edit Profile</Link>
                                <Link className="dropdown-item" to="/create-profile">Create New Company Profile</Link>
                                <Link className="dropdown-item" to="/add-new-key-player">Add New Key Player</Link>
                                <Link className="dropdown-item" to="/all-key-player">All Key Player</Link>
                                <Link className="dropdown-item" to="/all-user">All User</Link>
                                <Link className="dropdown-item" to="/invite-new-user">Invite New User</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink exact activeClassName="active" className="nav-link dropdown-toggle" to="/company-job" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg id="Group_116" data-name="Group 116" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <rect id="Rectangle_16" data-name="Rectangle 16" width="16" height="16" fill="#c1c1c1" opacity="0" />
                                    <path id="Vector" d="M7,4,9.813,7.625,7,15.375,11,19l4-3.625-2.813-7.75L15,4Z" transform="translate(-3 -3)" fill="#c1c1c1" />
                                </svg>
                                Company Job
                            </NavLink>
                            <div className="dropdown-menu" >
                                <Link className="dropdown-item" to="/active-job">Active Job</Link>
                                <Link className="dropdown-item" to="/expired-job">Expired Job</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/company-review">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.002" viewBox="0 0 16 16.002">
                                    <path id="Vector" d="M15.958,6.743a.8.8,0,0,0-.694-.541L10.7,5.84,8.729,1.471a.8.8,0,0,0-1.458,0L5.3,5.84.737,6.2a.8.8,0,0,0-.5,1.37l3.37,3.286L2.42,16.02a.8.8,0,0,0,1.224.846L8,13.961l4.356,2.9a.8.8,0,0,0,1.214-.885l-1.463-5.12,3.629-3.266a.8.8,0,0,0,.222-.852Z" transform="translate(0 -0.998)" fill="#c1c1c1" />
                                </svg>
                                Company Review
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/company-ques">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <g id="Group_81" data-name="Group 81" transform="translate(0 0)">
                                        <rect id="Rectangle_33" data-name="Rectangle 33" width="16" height="16" fill="#c1c1c1" opacity="0" />
                                        <path id="Vector" d="M4.585,0C3.289,0,.931,1.243.857,2.352s.151,1.177.256,1.237H2.329a1.4,1.4,0,0,1,1.5-.987A1.643,1.643,0,0,1,5.283,4.7c-.411.983-.79,1.326-1.3,2.389A4.78,4.78,0,0,0,3.977,11.1l1.5.027C5.1,9.218,7.068,7.52,7.849,6.346a3.8,3.8,0,0,0,.864-2.592A3.719,3.719,0,0,0,7.646,1.162,4.127,4.127,0,0,0,4.585,0Zm.075,12.368a1.816,1.816,0,1,0,1.813,1.813,1.812,1.812,0,0,0-1.813-1.813Z" transform="translate(3.158 0)" fill="#c1c1c1" />
                                    </g>
                                </svg>
                                Company Question
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/post-job">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <g id="Group_82" data-name="Group 82" transform="translate(0 0)">
                                        <rect id="Rectangle_34" data-name="Rectangle 34" width="16" height="16" fill="#c1c1c1" opacity="0" />
                                        <path id="Vector" d="M15.811,1.193a.667.667,0,0,0-.7-.153L.445,6.373a.667.667,0,0,0,0,1.247L6.171,9.906,10.4,5.666l.94.94L7.091,10.852l2.293,5.726a.659.659,0,0,0,1.233-.02L15.951,1.893a.667.667,0,0,0-.14-.7Z" transform="translate(-0.015 -0.999)" fill="#c1c1c1" />
                                    </g>
                                </svg>
                                Post Job
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/search-candidate">
                                <svg id="Group_127" data-name="Group 127" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <rect id="Rectangle_35" data-name="Rectangle 35" width="16" height="16" fill="#c1c1c1" opacity="0" />
                                    <g id="Group_3446" data-name="Group 3446" transform="translate(0 1)">
                                        <path id="Path_286" data-name="Path 286" d="M7.27,6.54A3.27,3.27,0,1,0,4,3.27,3.27,3.27,0,0,0,7.27,6.54Z" transform="translate(-0.73 0)" fill="#c1c1c1" />
                                        <path id="Path_287" data-name="Path 287" d="M6.826,9.644C4.594,9.562,0,10.674,0,12.906v.817a.82.82,0,0,0,.817.817H7.8A4.864,4.864,0,0,1,6.826,9.644Zm7.423,3.278a3.2,3.2,0,0,0,.392-2.305,3.269,3.269,0,1,0-3.859,3.859,3.2,3.2,0,0,0,2.305-.392L14.609,15.6a.815.815,0,0,0,1.153-1.153l-1.512-1.529Zm-2.8-.016a1.635,1.635,0,1,1,1.635-1.635A1.64,1.64,0,0,1,11.445,12.906Z" transform="translate(0 -1.461)" fill="#c1c1c1" />
                                    </g>
                                </svg>
                                Search Candidate
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/message">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.999" height="15.999" viewBox="0 0 15.999 15.999">
                                    <path id="Chat_Icon" data-name="Chat Icon" d="M-1234.693.89A7.944,7.944,0,0,1-1236,1,7.286,7.286,0,0,1-1239.8-.021c.1,0,.2.021.305.021,4.16,0,7.624-2.652,8.353-6.139A3.788,3.788,0,0,1-1230-3.5a3.739,3.739,0,0,1-1.012,2.5h.012V3ZM-1245-4.578a4.872,4.872,0,0,1-1-2.921c0-3.038,2.91-5.5,6.5-5.5s6.5,2.462,6.5,5.5-2.91,5.5-6.5,5.5a7.454,7.454,0,0,1-2.8-.542L-1245-1Z" transform="translate(1246 13)" fill="#c1c1c1" />
                                </svg>
                                Message <span className="badge badge-warning ml-2">4</span>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink exact activeClassName="active" className="nav-link dropdown-toggle" to="/billing" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg id="Group_84" data-name="Group 84" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <rect id="Rectangle_36" data-name="Rectangle 36" width="16" height="16" fill="#c1c1c1" opacity="0" />
                                    <path id="Vector" d="M14.4,0H1.6A1.6,1.6,0,0,0,0,1.6V3.2H16V1.6A1.6,1.6,0,0,0,14.4,0ZM0,11.2a1.6,1.6,0,0,0,1.6,1.6H14.4A1.6,1.6,0,0,0,16,11.2V6.4H0ZM2.4,8.8H7.2v1.6H2.4Z" transform="translate(0 2)" fill="#c1c1c1" />
                                </svg>
                                Billing
                            </NavLink>
                            <div className="dropdown-menu" >
                                <Link className="dropdown-item" to="/add-payment-method">Add Payment Method</Link>
                                <Link className="dropdown-item" to="/invoice">Invoice</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import SingleUser from '../components/User/SingleUser'
import Paginate from '../utilities/Paginate/Paginate'
import InstantSearch from '../utilities/InstantSearch/InstantSearch'


export default class AllUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paginate: {
                paginateItems: 3,
                activeItem: 1
            },
            userData: [
                {
                    userID: 1,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/EvanDavies.png',
                    userName: 'Evan Davies',
                    userDesignation: 'President',
                    userRole: 'Supper Admin',
                    userMail: "evandavies@gmail.com",
                },
                {
                    userID: 2,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/RichardYambo.png',
                    userName: 'Richard Yambo',
                    userDesignation: 'CEO',
                    userRole: 'Admin',
                    userMail: "richardyambo@gmail.com",
                },
                {
                    userID: 3,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/EmmaWatson.png',
                    userName: 'Emma Watson',
                    userDesignation: 'Director',
                    userRole: 'Admin',
                    userMail: "emmawatson@gmail.com",
                },
                {
                    userID: 4,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/LeonChen.png',
                    userName: 'Leon Chen',
                    userDesignation: 'Vice President',
                    userRole: 'Admin',
                    userMail: "leonchen@gmail.com",
                },
                {
                    userID: 5,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/GeoffPrice.png',
                    userName: 'Geoff Price',
                    userDesignation: 'Designer',
                    userRole: 'Editor',
                    userMail: "geoffprice@gmail.com",
                },
                {
                    userID: 6,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/SarahTaylor.png',
                    userName: 'Sarah Taylor',
                    userDesignation: 'Content Writer',
                    userRole: 'Author',
                    userMail: "sarahtaylor@gmail.com",
                },
                {
                    userID: 7,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/ScottLowrie.png',
                    userName: 'Scott Lowrie',
                    userDesignation: 'Designer',
                    userRole: 'Editor',
                    userMail: "scottlowrie@gmail.com",
                },
                {
                    userID: 8,
                    userMotive: 'edit-user',
                    userImgSrc: 'assets/img/JamesHoper.png',
                    userName: 'James Hoper',
                    userDesignation: 'CTO',
                    userRole: 'Author',
                    userMail: "jameshoper@gmail.com",
                }
            ]
        }
    }

    handlePaginateItem() {
        return alert('click event working on handlePaginateItem');
    }

    render() {
        return (
            <>
                <main id="main-content">
                    <h1 className={'page-title mb-4'}>All Users</h1>
                    <InstantSearch />
                    <Row className={'mt-5'}>
                        {
                            this.state.userData.map((value, index) => {
                                return (
                                    <Col xl={3} key={index}>
                                        <SingleUser userObj={value} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Paginate paginate={this.state.paginate} handlePaginateItem={this.handlePaginateItem.bind(this)} />
                </main>
            </>
        )
    }
}




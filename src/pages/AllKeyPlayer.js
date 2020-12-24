import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import SingleUser from '../components/User/SingleUser'
import Paginate from '../utilities/Paginate/Paginate'
import InstantSearch from '../utilities/InstantSearch/InstantSearch'


export default class AllKeyPlayer extends Component {
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
                    userMotive: 'edit-key-player',
                    userImgSrc: 'assets/img/KevenPetter.png',
                    userName: 'Keven Petter',
                    userDesignation: 'CEO',
                    yearsOfExperience: 5,
                    education: 'Bachelor of Science',
                    userMail: "kevenpetter@gmail.com",
                    userDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
                },
                {
                    userID: 2,
                    userMotive: 'edit-key-player',
                    userImgSrc: 'assets/img/MariaCoute.png',
                    userName: 'Maria Coute',
                    userDesignation: 'President',
                    yearsOfExperience: 8,
                    education: 'Bachelor of Science',
                    userMail: "ariacoute@gmail.com",
                    userDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
                },
                {
                    userID: 3,
                    userMotive: 'edit-key-player',
                    userImgSrc: 'assets/img/SelenHelen.png',
                    userName: 'Selen Helen',
                    userDesignation: 'President',
                    yearsOfExperience: 8,
                    education: 'Bachelor of Science',
                    userMail: "selenhelen@gmail.com",
                    userDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
                },
                {
                    userID: 4,
                    userMotive: 'edit-key-player',
                    userImgSrc: 'assets/img/KivenPitersen.png',
                    userName: 'Kiven Pitersen',
                    userDesignation: 'President',
                    yearsOfExperience: 8,
                    education: 'Bachelor of Science',
                    userMail: "kivenpitersen@gmail.com",
                    userDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
                },
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
                    <h1 className={'page-title mb-4'}>All Key Players</h1>
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




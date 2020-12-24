import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PostJobStepSuccess extends Component {
    render() {
        return (
            <>
                <div className={'postJobSuccessAlert'}>
                    <div className={'jobPostSuccess d-flex flex-wrap align-items-center px-5 py-4 border-radius mb-4'}>
                        <img src='assets/img/check-circle.svg' alt={''} className={'img-fluid'} />
                        <div className={'jobPostSuccessContent ml-4'}>
                            <h3 className={'mb-2 text-main-color'}>Success !!!</h3>
                            <p className={'mb-0'}>Your job has been posted successfully.</p>
                        </div>
                    </div>
                    <div className={'userInterface bg-white border-radius px-5 py-5'}>
                        <div className={'userInterfaceGrid border-bottom'}>
                            <div className={'commonInterface userImgInterface text-center pr-xl-4 pb-4'}>
                                <img src='assets/img/company-logo.png' alt={''} className={'img-fluid mb-2'} />
                                <h4 className={'mb-2 userName'}> Stemknot</h4>
                                <p className={'mb-2 userAddress'}>Los Angeles, USA</p>
                                <p className={'mb-0 userEmail'}>
                                    <Link to={'mailto:stevesmith@gmail.com'} className={'text-main-color'}> stevesmith@gmail.com</Link>
                                </p>
                            </div>
                            <div className={'commonInterface userInterfaceDesigner pl-xl-4 pb-4'}>
                                <h4 className={'mb-2 text-main-color'}>User Interface Designer</h4>
                                <p className={'mb-0'}>The ideal candidate will have experience in creating mockups to present to teams,
                                collecting feedback and creating a quality piece of work. This individual should be comfortable with building sitemaps,
                                wireframes and prototypes to provide to project manners and inevitably execute based on outlined criteria.
                                     This candidate should have strong creative and design skills and be familiar with various design technologies. </p>
                            </div>
                        </div>
                        <div className={'userInterfaceFooter mt-4 d-flex justify-content-xl-end'}>
                            <Link to={'//'} className={'text-main-color btn btn-custom-outline px-4 py-3 mr-4 text-main-color'}> Edit Posted Job </Link>
                            <Link to={'//'} className={'text-main-color btn btn-custom px-4 py-3 text-light'}> Post Another Job </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

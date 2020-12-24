import React, { Component } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class EditCompanyProfileStep1 extends Component {

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <main id="main-content">
                    <h1 className={'page-title'}>Select Your Company for Edit/Update</h1>
                    <figure className={'main-content-inner'}>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col xl={8}>
                                    Select
                                </Col>
                                <Col xl={4}>
                                    {/* <button type={'submit'} className="btn btn-success btn-custom px-4 py-2">Edit Profile</button> */}
                                    <Link className="btn btn-success btn-custom px-4 py-2" to='/edit-company-profile-step2'>Edit Profile</Link>
                                </Col>
                            </Row>
                        </Form>
                    </figure>
                </main>
            </>
        )
    }
}

export default EditCompanyProfileStep1

import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import Select from 'react-select';


export default function EditKeyPlayerModal(props) {
    const [show, setShow] = useState(false);
    const [selectRole, setSelectRole] = useState({
        selectedRole: 'CEO'
    });

    const handleClose = () => setShow(false);
    const handleChange = (e) => setSelectRole({ selectedRole: e.target.value })

    // component didUpdate by useEffect
    useEffect(() => {
        setShow(props.open)
    }, [props])


    return (
        <>
            <div className={'modal-view'}>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Form>
                        <Modal.Header closeButton className={'border-0 pb-0'}>
                            <Modal.Title>Edit User ID : {props.id} </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                                <Col>
                                    <Form.Group className={'upload-company-logo d-flex align-items-center mb-4'}>
                                        <img src="assets/img/SelenHelen.png" alt="profile-pic" className="img-fluid" />
                                        <Form.File id="FormControlFile" label="Upload Profile Picture" className={'mb-0'} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}> Name</Form.Label>
                                        <Form.Control className={'ks-form-control'} type="text" placeholder=" Name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}> Role</Form.Label>
                                        <Form.Control className={'ks-form-control'} as="select" custom onChange={handleChange}>
                                            <option>CEO</option>
                                            <option>Recruiter</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {
                                selectRole.selectedRole === 'Recruiter' ?
                                    <div className={'selectedRole-Recruiter'}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Location</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="text" placeholder="Location" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Email Address</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="email" placeholder="Email Address" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Job Title</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="text" placeholder="Job Title" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Years with company</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="email" placeholder="Years with company" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}> Skills</Form.Label>
                                                    <Select
                                                        className={'ks-form-control'}
                                                        isMulti
                                                        options={[
                                                            { value: 'Design', label: 'Design' },
                                                            { value: 'Coding', label: 'Coding' },
                                                            { value: 'UI/UX', label: 'UI/UX' },
                                                        ]}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}> Levels I Hire for</Form.Label>
                                                    <Form.Control className={'ks-form-control'} as="select" custom>
                                                        <option>Levels I Hire for 1</option>
                                                        <option>Levels I Hire for 2</option>
                                                        <option>Levels I Hire for 3</option>
                                                        <option>Levels I Hire for 4</option>
                                                        <option>Levels I Hire for 5</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}> Can Candidate Search Your Profile</Form.Label>
                                                    <Form.Control className={'ks-form-control'} as="select" custom>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}> Are You Interested in Mentoring?</Form.Label>
                                                    <Form.Control className={'ks-form-control'} as="select" custom>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div> :
                                    <div className={'selectedRole-CEO'}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Job Title</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="text" placeholder="Job Title" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Years with company</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="email" placeholder="5 Year" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Education</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="text" placeholder="Education" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="">
                                                    <Form.Label className={'ks-label-control'}>Linkedin Profile</Form.Label>
                                                    <Form.Control className={'ks-form-control'} type="email" placeholder="Linkedin Profile" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                            }

                            <Row>
                                <Col>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}> Description </Form.Label>
                                        <Form.Control className={'ks-form-control ks-form-control-textarea'} as="textarea" rows={5} placeholder="Type..." />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Modal.Body>

                        <Modal.Footer className={'d-flex justify-content-between align-items-center border-0 pt-0'}>
                            <Button variant="danger" className={'btn-modal-close'} onClick={handleClose}>
                                <AiFillDelete size={'1rem'} />
                            </Button>
                            <Button type={'submit'} variant="primary" className={'btn-custom px-4 py-2'}> Save & Update </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </>
    );
}


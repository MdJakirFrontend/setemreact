
import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import './UserModal.scss'

export default function UserModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // component didUpdate by useEffect
    useEffect(() => {
        setShow(props.open)
    }, [props])

    
    return (
        <>
            <div className={'modal-view'}>
                <Modal show={show} onHide={handleClose} size="md">
                    <Form>
                        <Modal.Header closeButton className={'border-0 pb-0'}>
                            <Modal.Title>Edit User ID : {props.id} </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}>First Name</Form.Label>
                                        <Form.Control className={'ks-form-control'} type="text" placeholder="First Name" />
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}>Last Name</Form.Label>
                                        <Form.Control className={'ks-form-control'} type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Col>
                                <Col sm={12}>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}>Email Address</Form.Label>
                                        <Form.Control className={'ks-form-control'} type="email" placeholder="Email Address" />
                                    </Form.Group>
                                </Col>
                                <Col xl={12}>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}>Job Role</Form.Label>
                                        <Form.Control className={'ks-form-control'} as="select" custom>
                                            <option>Role 1</option>
                                            <option>Role 2</option>
                                            <option>Role 3</option>
                                            <option>Role 4</option>
                                            <option>Role 5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xl={12}>
                                    <Form.Group controlId="">
                                        <Form.Label className={'ks-label-control'}>User Role</Form.Label>
                                        <Form.Control className={'ks-form-control'} as="select" custom>
                                            <option>User 1</option>
                                            <option>User 2</option>
                                            <option>User 3</option>
                                            <option>User 4</option>
                                            <option>User 5</option>
                                        </Form.Control>
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


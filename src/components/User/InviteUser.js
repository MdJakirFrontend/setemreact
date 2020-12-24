import React, { Component } from 'react'
import { Row, Col, Card, CardGroup } from "react-bootstrap";
import { Form, Input, Select as AntdSelect, Button, } from 'antd';


export default class InviteUser extends Component {
    render() {
        return (
            <>
                <CardGroup className="border-0 bg-white px-3 py-4 custom-boxShadow border-radius">
                    <Card className="border-0">
                        <Form layout="vertical">
                            <Card.Body className="px-0 py-0">
                                <Row>
                                    <Col xl={12}>
                                        <Form.Item name="First" label="First Name" rules={[{ required: true, message: 'First Name required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="First Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item name="Last" label="Last Name" rules={[{ required: true, message: 'Last Name required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Last Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item name="EmailAddress" label="Email Address" rules={[{ required: true, type: 'email', message: 'Email Address required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Email Address" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item name="JobRole" label="Job Role" rules={[{ required: true, message: 'Job Role!' }]}>
                                            <AntdSelect
                                                placeholder="Select Role"
                                                allowClear
                                                className={'form-control ks-form-control'}
                                            >
                                                <AntdSelect.Option checked value="1">Role 1 </AntdSelect.Option>
                                                <AntdSelect.Option value="2">Role 2</AntdSelect.Option>
                                            </AntdSelect>
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item name="UserRole" label="User Role" rules={[{ required: true, message: 'User Role!' }]}>
                                            <AntdSelect
                                                placeholder="Select User Role"
                                                allowClear
                                                className={'form-control ks-form-control'}
                                            >
                                                <AntdSelect.Option checked value="1">Role 1</AntdSelect.Option>
                                                <AntdSelect.Option value="2">Role 2</AntdSelect.Option>
                                            </AntdSelect>
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item >
                                            <Button className={'btn btn-light btn-custom text-light px-3 py-2 float-right'} type="primary" htmlType="submit">
                                                Send Invitation
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Form>
                    </Card>
                </CardGroup>
            </>
        )
    }
}

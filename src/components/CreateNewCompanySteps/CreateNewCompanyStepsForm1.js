import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Input, Select, } from 'antd';
import './CreateNewCompanyStepsForm.scss'

export default class CreateNewCompanyStepsForm1 extends Component {
    render() {
        return (
            <>
                <Card className="border-0 ">
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row>
                                <Col xl={12}>
                                    <Form.Item name="Country" label="Select Your Country" rules={[{ required: true, message: 'Select Your Country!' }]}>
                                        <Select
                                            placeholder="Select Your Country"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <Select.Option value="2">Country 1</Select.Option>
                                            <Select.Option value="3">Country 2</Select.Option>
                                            <Select.Option value="4">Country 3</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="EditUrl" label="Edit Url" rules={[{ required: true, message: 'Edit Url!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Stemknot.com/employers/microsoft/" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Form>
                </Card>
            </>
        )
    }
}

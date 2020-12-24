import React, { Component } from 'react'
import { Row, Col, Card, Button } from "react-bootstrap";
import { Form, Input, Select as AntdSelect, } from 'antd';
import './CreateNewCompanyStepsForm.scss'


export default class CreateNewCompanyStepsForm3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumbers: [
                { id: 1, number: '01111111111' },
            ],
            value: ''
        };
    }

    render() {
        return (
            <>
                <Card className="border-0">
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row className={''}>
                                <Col xl={12}>
                                    <Card.Title className="card-title mb-4">Company Location</Card.Title>
                                </Col>
                                <Col xl={12}>
                                    <Row>
                                        <Col xl={'6'}>
                                            <Form.Item name="BranchName" label="Branch Name" rules={[{ required: true, message: 'Branch Name required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="Branch Name" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="City" label="City" rules={[{ required: true, message: 'City required!' }]}>
                                                <AntdSelect
                                                    placeholder="Select City"
                                                    allowClear
                                                    className={'form-control ks-form-control'}
                                                >
                                                    <AntdSelect.Option value="2">City 1</AntdSelect.Option>
                                                    <AntdSelect.Option value="3">City 2</AntdSelect.Option>
                                                    <AntdSelect.Option value="4">City 3</AntdSelect.Option>
                                                </AntdSelect>
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="StreetAddress" label="Street Address" rules={[{ required: true, message: 'Street Address required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="Street Address" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="State" label="State" rules={[{ required: true, message: 'State required!' }]}>
                                                <AntdSelect
                                                    placeholder="Select State"
                                                    allowClear
                                                    className={'form-control ks-form-control'}
                                                >
                                                    <AntdSelect.Option value="2">State 1</AntdSelect.Option>
                                                    <AntdSelect.Option value="3">State 2</AntdSelect.Option>
                                                    <AntdSelect.Option value="4">State 3</AntdSelect.Option>
                                                </AntdSelect>
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Apt" label="Apt, suite, etc (optional)" rules={[{ required: true, message: 'Apt, suite, etc (optional) required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="Apt, suite, etc (optional)" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="ZipCode" label="Zip Code" rules={[{ required: true, message: 'Zip Code required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="Zip Code" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'12'}>
                                            <div className={'mb-4'}>
                                                <label className={'ks-label-control'}> Phone Number</label>
                                                <Row className={'addItem d-flex align-items-center'}>
                                                    <Col>
                                                        <Form.Item className={'mb-0'} name="PhoneNumber" label="" rules={[{ required: true, message: 'Phone Number required!' }]}>
                                                            <Input className={'ks-form-control'} placeholder="Phone Number" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="light btn-custom text-light"> + Add New</Button>
                                                    </Col>
                                                </Row>
                                                <Row className={'addItem d-flex align-items-center mt-3'}>
                                                    <Col>
                                                        <Form.Item className={'mb-0'} name="PhoneNumber" label="" rules={[{ required: true, message: 'Phone Number required!' }]}>
                                                            <Input className={'ks-form-control'} placeholder="Phone Number" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="danger"> - Remove </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={'12'}>
                                            <Form.Item name="CompanyTagLine" label="Company Tag Line" rules={[{ required: true, message: 'Company Tag Line required!' }]}>
                                                <Input.TextArea rows={'5'} className={'ks-form-control'} placeholder="Company Tag Line" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'12'}>
                                            <Form.Item name="TotalEmployees" label="Total Employees" rules={[{ required: true, message: 'Total Employees required!' }]}>
                                                <AntdSelect
                                                    placeholder="Total Employees"
                                                    allowClear
                                                    className={'form-control ks-form-control'}
                                                >
                                                    <AntdSelect.Option value="2">100-1001</AntdSelect.Option>
                                                    <AntdSelect.Option value="3">100-1001</AntdSelect.Option>
                                                    <AntdSelect.Option value="4">100-1001</AntdSelect.Option>
                                                </AntdSelect>
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'12'}>
                                            <Form.Item name="Who" label="Who we are" rules={[{ required: true, message: 'Who we are required!' }]}>
                                                <Input.TextArea rows={'5'} className={'ks-form-control ks-form-control-textarea'} placeholder="Who we are" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'12'}>
                                            <Form.Item name="company’sCulture" label="The company’s culture, mission, and values" rules={[{ required: true, message: 'The company’s culture, mission, and values required!' }]}>
                                                <Input.TextArea rows={'5'} className={'ks-form-control ks-form-control-textarea'} placeholder="The company’s culture, mission, and values" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Item>
                                                <label className={'ks-label-control'}>Company Perks</label>
                                                <div className={'control-block'}>
                                                    <Input className={'ks-form-control'} type="value" placeholder="Company Perks" />
                                                    <button type={'button'} className="btn btn-custom px-4 py-2 btn-add text-light value-light">Add</button>
                                                </div>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Form>
                </Card>
            </>
        )
    }
}

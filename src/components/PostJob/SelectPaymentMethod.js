import React, { Component } from 'react'
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { Form, Input, Select as AntdSelect, Checkbox, Button } from 'antd';



export default class SelectPaymentMethod extends Component {
    render() {
        return (
            <>
                <CardGroup className={'border-0 bg-white px-4 py-4 custom-boxShadow border-radius'}>
                    <Card className="border-0">
                        <Form layout="vertical">
                            <Card.Body className="px-0 py-0">
                                <Row>
                                    <Col xl={12}>
                                        <div className={'d-flex align-items-center border-bottom mb-4'}>
                                            <Form.Item id={'Visa'} className={'py-3 mr-3'} name="Visa" valuePropName="">
                                                <Checkbox>Visa</Checkbox>
                                            </Form.Item>
                                            <Form.Item id={'PayPal'} className={'py-3'} name="PayPal" valuePropName="">
                                                <Checkbox>PayPal</Checkbox>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: 'Field is required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="First Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: 'Field is required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Last Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item name="creditCardNumber" label="Credit or Debit Card Number" rules={[{ required: true, message: 'Field is required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Credit/Debit Number" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item name="ExpirationDate" label="Expiration Date" rules={[{ required: true, message: 'Field is required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Expiration Date" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item name="SecurityCode" label="Security Code" rules={[{ required: true, message: 'Field is required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Security Code" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Item name="Country" label="Country" rules={[{ required: true, message: 'Field is required !' }]}>
                                            <AntdSelect
                                                placeholder="Country"
                                                allowClear
                                                className={'form-control ks-form-control'}
                                            >
                                                <AntdSelect.Option checked value="1">USA</AntdSelect.Option>
                                                <AntdSelect.Option value="2">BANGLADESH</AntdSelect.Option>
                                            </AntdSelect>
                                        </Form.Item>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Item name="PostalCode" label="Postal Code" rules={[{ required: true, message: 'Field is required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Postal Code" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Item className={'border-top mt-3 pt-3'} name="" label="">
                                            <Button className={'btn-custom px-4 py-2 float-right'} type="primary">
                                                Add card
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

import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Input, Select as AntdSelect, Checkbox } from 'antd';


export default class PostJobStep4 extends Component {
    render() {
        return (
            <>
                <Card className="border-0">
                    <Card.Title className="card-title mb-3">Step 3: Post Jobs</Card.Title>
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row>
                                <Col xl={6}>
                                    <Form.Item name="PostedBy" label="Posted By" rules={[{ required: true, message: 'Posted By required !' }]}>
                                        <AntdSelect
                                            placeholder="Choose One"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <AntdSelect.Option checked value="1"> Posted By Option </AntdSelect.Option>
                                            <AntdSelect.Option value="2">Posted By Option</AntdSelect.Option>
                                            <AntdSelect.Option value="3">Posted By Option</AntdSelect.Option>
                                        </AntdSelect>
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item className="border-top border-bottom py-4 my-3" name="" valuePropName="checked">
                                        <Checkbox>How would you Like to Receive Application?</Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="NotifyMeByEmail" label="Notify Me By Email" rules={[{ required: true, message: 'Notify Me By Email required!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Email Address" />
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="DirectApplicant" label="Direct Applicant to an External Site to Apply" rules={[{ required: true, message: 'Field is required!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Direct Applicant" />
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

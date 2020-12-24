import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Input, Select as AntdSelect, Checkbox } from 'antd';
import { Editor } from '@tinymce/tinymce-react';

export default class PostJobStep1 extends Component {
    render() {
        return (
            <>
                <Card className="border-0">
                    <Card.Title className="card-title mb-3">Step 1: Post Jobs</Card.Title>
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row>
                                <Col xl={6}>
                                    <Form.Item name="Country" label="Select Your Country" rules={[{ required: true, message: 'Country required !' }]}>
                                        <AntdSelect
                                            placeholder="Select Your Country"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <AntdSelect.Option checked value="1">Country 1 </AntdSelect.Option>
                                            <AntdSelect.Option value="2">Country 2</AntdSelect.Option>
                                        </AntdSelect>
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="CompanyName" label="Company Name" rules={[{ required: true, message: 'Company Name required!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Stemknot" />
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="remote" label="Is This a Remote Opportunity?" rules={[{ required: true, message: 'Field is required !' }]}>
                                        <AntdSelect
                                            placeholder="No"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <AntdSelect.Option checked value="1">No</AntdSelect.Option>
                                            <AntdSelect.Option value="2">Yes</AntdSelect.Option>
                                        </AntdSelect>
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="location" label="Job Location" rules={[{ required: true, message: 'Field is required!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Job Location" />
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="JobTitle" label="Job Title" rules={[{ required: true, message: 'Field is required!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Job Title" />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="JobFunction" label="Job Function">
                                        <Editor
                                            initialValue="<p>This is the initial content of the editor</p>"
                                            init={{
                                                height: 200,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar:
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="SeniorityLevel " label="Seniority Level " rules={[{ required: true, message: 'Seniority Level required !' }]}>
                                        <AntdSelect
                                            placeholder="Choose One"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <AntdSelect.Option checked value="1">Level 1 </AntdSelect.Option>
                                            <AntdSelect.Option value="2">Level 2</AntdSelect.Option>
                                        </AntdSelect>
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="CompanyIndustry" label="Company Industry" rules={[{ required: true, message: 'Field is required!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Company Industry" />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item className={'border-top border-bottom py-3 my-4'} name="Sponsorship" valuePropName="checked">
                                        <Checkbox>Will This Position Offer Sponsorship?</Checkbox>
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

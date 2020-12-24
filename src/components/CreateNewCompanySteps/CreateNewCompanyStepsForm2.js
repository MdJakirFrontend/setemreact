import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Input, Select, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import './CreateNewCompanyStepsForm.scss'


export default class CreateNewCompanyStepsForm2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fileList: [
                {
                    uid: '0',
                    name: 'company-logo.png',
                    status: 'done',
                    url: 'assets/img/company-logo.png',
                },
            ]
        }
    }


    onChange = ({ fileList: newFileList }) => {
        this.setState({
            fileList: newFileList
        });
    };

    onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };


    render() {
        return (
            <>
                <Card className="border-0">
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row className={'mb-4'}>
                                <Col className={'uploadCompanyLogo'}>
                                    <ImgCrop rotate>
                                        <Upload
                                            listType="picture-card"
                                            fileList={this.state.fileList}
                                            onChange={this.onChange}
                                            onPreview={this.onPreview}
                                        >
                                            {this.state.fileList.length < 10 && '+ Upload Company Logo'}
                                        </Upload>
                                    </ImgCrop>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item name="FullName" label="Full Name" rules={[{ required: true, message: 'Full Name!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Enter Your Full Name" />
                                    </Form.Item>
                                </Col>
                                <Col xl={'6'}>
                                    <Form.Item name="emailAddress" label="Email address" rules={[{ required: true, type: 'email', message: 'Full Name!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Enter Your Email Address" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item name="CompanyName" label="Company Name" rules={[{ required: true, message: 'Company Name!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Company Name" />
                                    </Form.Item>
                                </Col>
                                <Col xl={'6'}>
                                    <Form.Item name="JobRole" label="Job Role" rules={[{ required: true, message: 'Job Role!' }]}>
                                        <Select
                                            placeholder="Select Job Role"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <Select.Option value="1">Job Role 1</Select.Option>
                                            <Select.Option value="2">Job Role 2</Select.Option>
                                            <Select.Option value="3">Job Role 3</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item>
                                        <Form.Item name="CompanyAddress" label="Company Address" rules={[{ required: true, message: 'Company Address!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Company Address" />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xl={'6'}>
                                    <Form.Item name="Country" label="Country" rules={[{ required: true, message: 'Country!' }]}>
                                        <Select
                                            placeholder="Select Country"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <Select.Option value="1">Country 1</Select.Option>
                                            <Select.Option value="2">Country 2</Select.Option>
                                            <Select.Option value="3">Country 3</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item name="State" label="State" rules={[{ required: true, message: 'State!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="State" />
                                    </Form.Item>
                                </Col>
                                <Col xl={'6'}>
                                    <Form.Item name="City" label="State" rules={[{ required: true, message: 'City!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="City" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item name="Industry" label="Company Industry Type" rules={[{ required: true, message: 'Company Industry Type!' }]}>
                                        <Select
                                            placeholder="Company Industry Type"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <Select.Option value="1">Type 1</Select.Option>
                                            <Select.Option value="2">Type 2</Select.Option>
                                            <Select.Option value="3">Type 3</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xl={'6'}>
                                    <Form.Item name="HowLong" label="How long have you been with the company?" rules={[{ required: true, message: 'How long have you been with the company?!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Start Date" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item name="HowLong" label="Skill / Roles I hire for" rules={[{ required: true, message: 'Skill / Roles I hire for!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder=" I hire for" />
                                    </Form.Item>
                                </Col>
                                <Col xl={'6'}>
                                    <Form.Item name="HowLong" label="Labels I hire for" rules={[{ required: true, message: 'Labels I hire for!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder=" LabelsI hire for" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item name="sponsorship" label="Does your company provide sponsorship" rules={[{ required: true, message: 'Does your company provide sponsorship!' }]}>
                                        <Select
                                            placeholder="Does your company provide sponsorship"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <Select.Option value="yes">Yes</Select.Option>
                                            <Select.Option value="no">No</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col xl={'6'}>
                                    <Form.Item name="Functional" label="Functional Areas" rules={[{ required: true, message: 'Functional Areas!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="Functional Areas" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={'6'}>
                                    <Form.Item name="Password" label="Password" rules={[{ required: true, type: 'password', message: 'Password!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder=" Password" />
                                    </Form.Item>
                                </Col>
                                <Col xl={'6'}>
                                    <Form.Item name="ConfirmPassword" label="Confirm Password" rules={[{ required: true, type: 'password', message: 'Confirm Password!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder=" Password" />
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

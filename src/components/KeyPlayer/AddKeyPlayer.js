import React, { Component } from 'react'
import { Form, Input, Select as AntdSelect, Button, Upload } from 'antd';
import { Row, Col, Card, CardGroup } from "react-bootstrap";
import Select from 'react-select';
import ImgCrop from 'antd-img-crop';
import './KeyPlayer.scss'
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();



export default class AddKeyPlayer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedRole: 'CEO',
            fileList: [
                {
                    uid: '0',
                    name: 'EmmaWatson.png',
                    status: 'done',
                    url: 'assets/img/EmmaWatson.png',
                },
            ]
        }
    }


    onChange = ({ fileList: newFileList }) => {
        this.setState({
            fileList: newFileList,
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
                <CardGroup className="border-0 bg-white px-3 py-4 custom-boxShadow border-radius">
                    <Card className="border-0">
                        <Form layout="vertical">
                            <Card.Body className="px-0 py-0">
                                <Row>
                                    <Col className={'uploadCompanyLogo'}>
                                        <ImgCrop rotate>
                                            <Upload
                                                listType="picture-card"
                                                fileList={this.state.fileList}
                                                onChange={this.onChange}
                                                onPreview={this.onPreview}
                                            >
                                                {this.state.fileList.length < 2 && '+ Upload Profile Picture'}
                                            </Upload>
                                        </ImgCrop>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={'6'}>
                                        <Form.Item name="Name" label="Name" rules={[{ required: true, message: 'Name required!' }]}>
                                            <Input className={'form-control ks-form-control'} placeholder="Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={'6'}>
                                        <Form.Item name="Role" label="Role" rules={[{ required: true, message: 'Role!' }]}>
                                            <AntdSelect
                                                placeholder="Select Role"
                                                allowClear
                                                className={'form-control ks-form-control'}
                                                onChange={(e) => { this.setState({ selectedRole: e }) }}
                                            >
                                                <AntdSelect.Option checked value="CEO">CEO</AntdSelect.Option>
                                                <AntdSelect.Option value="Recruiter">Recruiter</AntdSelect.Option>
                                            </AntdSelect>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                {
                                    this.state.selectedRole === 'Recruiter' ?
                                        <div className={'selectedRole-Recruiter'}>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="Location" label="Location" rules={[{ required: true, message: 'Location required!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Location" />
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="emailAddress" label="Email Address" rules={[{ required: true, type: 'email', message: 'Email Address!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Email Address" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="JobTitle" label="Job Title" rules={[{ required: true, type: 'text', message: 'Job Title!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Job Title" />
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="YearsWithCompany" label="Years with company" rules={[{ required: true, type: 'text', message: 'Years with company!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Years with company" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item>
                                                        <label className={'ks-label-control'}> Skills</label>
                                                        <Select
                                                            className={'ks-form-control'}
                                                            isMulti
                                                            components={animatedComponents}
                                                            options={[
                                                                { value: 'Design', label: 'Design' },
                                                                { value: 'Coding', label: 'Coding' },
                                                                { value: 'UI/UX', label: 'UI/UX' },
                                                            ]}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="Levels" label="Levels I Hire for" rules={[{ required: true, message: 'Levels I Hire for!' }]}>
                                                        <AntdSelect
                                                            placeholder="Select Levels "
                                                            allowClear
                                                            className={'form-control ks-form-control'}
                                                        >
                                                            <Select.Option checked value="1">Levels I Hire for 1</Select.Option>
                                                            <Select.Option value="2">Levels I Hire for 2</Select.Option>
                                                        </AntdSelect>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="Candidate" label="Can Candidate Search Your Profile" rules={[{ required: true, message: 'required' }]}>
                                                        <AntdSelect
                                                            allowClear
                                                            className={'form-control ks-form-control'}
                                                        >
                                                            <Select.Option checked value="1">Yes</Select.Option>
                                                            <Select.Option value="2">No</Select.Option>
                                                        </AntdSelect>
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="Mentoring" label="Are You Interested in Mentoring?" rules={[{ required: true, message: 'required!' }]}>
                                                        <AntdSelect
                                                            allowClear
                                                            className={'form-control ks-form-control'}
                                                        >
                                                            <Select.Option checked value="1">Yes</Select.Option>
                                                            <Select.Option value="2">No</Select.Option>
                                                        </AntdSelect>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="Description" label="Description" rules={[{ required: true, message: 'Description!' }]}>
                                                        <Input.TextArea rows={'5'} className={'form-control ks-form-control ks-form-control-textarea'} placeholder="Description" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </div> :
                                        <div className={'selectedRole-CEO'}>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="JobTitle" label="Job Title" rules={[{ required: true, type: 'text', message: 'Job Title required!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Job Title" />
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="Years" label="Years with company" rules={[{ required: true, type: 'text', message: 'Years with company required!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Years with company" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="Education" label="Education" rules={[{ required: true, type: 'text', message: 'Education required!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Education" />
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="Linkedin" label="Linkedin Profile" rules={[{ required: true, type: 'text', message: 'Linkedin Profile required!' }]}>
                                                        <Input className={'form-control ks-form-control'} placeholder="Linkedin Profile" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="Thoughts" label="Share Your Thoughts On How You or Your Company Hire" rules={[{ required: true, type: 'text', message: 'Share Your Thoughts On How You or Your Company Hire required!' }]}>
                                                        <Input.TextArea rows={'5'} className={'form-control ks-form-control ks-form-control-textarea'} placeholder="Share Your Thoughts......" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </div>
                                }

                                <Row>
                                    <Col >
                                        <Form.Item >
                                            <Button className={'btn btn-light btn-custom text-light px-3 py-2 float-right'} type="primary" htmlType="submit">
                                                Add New Key Player
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

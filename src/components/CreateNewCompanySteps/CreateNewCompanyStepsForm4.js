import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Input, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import './CreateNewCompanyStepsForm.scss'

export default class CreateNewCompanyStepsForm4 extends Component {

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
                    <Card.Title className="card-title mb-4">Add Videos/Photo</Card.Title>
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row className={'mb-4'}>
                                <Col xl={12}>
                                    <Form.Item name="VideoUrl" label="Video Url" rules={[{ required: true, message: 'Field is required!' }]}>
                                        <Input className={'form-control ks-form-control'} placeholder="https://www.youtube.com/watch?v=ck2kmtg7sCM&feat..." />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item rules={[{ required: true, message: 'Field is required!' }]}>
                                        <label className={'ks-label-control float-left'}>Video Url</label>
                                        <label className={'ks-label-control btn-remove text-danger float-right'}>Remove</label>
                                        <Input className={'form-control ks-form-control'} placeholder="https://www.youtube.com/watch?v=ck2kmtg7sCM&feat..." />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <button className="btn btn-light bg-white px-0 py-0 btn-add border-0">
                                        <strong className={'text-main-color'}> + Add New</strong>
                                    </button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={'add-photo mb-4'}>
                                        <label className={'ks-label-control'}>Add Photo</label>
                                        <Row>
                                            <Col>
                                                <div className={'FormControlFile'}>
                                                    <ImgCrop rotate>
                                                        <Upload
                                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                            listType="picture-card"
                                                            fileList={this.state.fileList}
                                                            onChange={this.onChange}
                                                            onPreview={this.onPreview}
                                                        >
                                                            {this.state.fileList.length < 3 && <img alt={''} src={'assets/img/add.svg'} className={'img-fluid'} />}
                                                        </Upload>
                                                    </ImgCrop>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={'pb-4'}>
                                <Col>
                                    <Form.Item name="TopProducts" label="Top products / Services we offer" rules={[{ required: true, message: 'Top products / Services we offer required !' }]}>
                                        <div className={'control-block'}>
                                            <Input className={'ks-form-control'} placeholder="Top products / Services we offer" />
                                            <button type={'button'} className="btn btn-custom px-4 py-2 btn-add text-light text-light">Add</button>
                                        </div>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className={'border-top py-4'}>
                                <Col xl={12}>
                                    <Card.Title className="card-title mb-4">Add Videos/Photo</Card.Title>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item rules={[{ required: true, message: 'Field is required!' }]}>
                                        <label className={'ks-label-control float-left'}>Title</label>
                                        <label className={'ks-label-control btn-remove text-danger float-right'}>Remove</label>
                                        <Input className={'form-control ks-form-control mb-3'} placeholder="The Phone Screener" />
                                        <Input.TextArea rows={'5'} className={'form-control ks-form-control ks-form-control-textarea'} placeholder="Type..." />
                                    </Form.Item>
                                    <Form.Item rules={[{ required: true, message: 'Field is required!' }]}>
                                        <label className={'ks-label-control float-left'}>Title</label>
                                        <label className={'ks-label-control btn-remove text-danger float-right'}>Remove</label>
                                        <Input className={'form-control ks-form-control mb-3'} placeholder="The Phone Screener" />
                                        <Input.TextArea rows={'5'} className={'form-control ks-form-control ks-form-control-textarea'} placeholder="Type..." />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <button className="btn btn-light bg-white px-0 py-0 btn-add border-0">
                                        <strong className={'text-main-color'}> + Add New</strong>
                                    </button>
                                </Col>
                            </Row>
                            <Row className={'border-top pt-4'}>
                                <Col xl={12}>
                                    <Card.Title className="card-title mb-4">Add Social Media</Card.Title>
                                </Col>
                                <Col xl={12}>
                                    <Row>
                                        <Col xl={'6'}>
                                            <Form.Item name="Facebook" label="Facebook" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.facebook.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Facebook" label="Twitter" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Twitter.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Instagram" label="Instagram" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Instagram.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Youtube" label="Youtube" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Youtube.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Linkedin" label="Linkedin" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Linkedin.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Thumblr" label="Thumblr" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Thumblr.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Pinterest" label="Pinterest" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Pinterest.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Vine" label="Vine" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Vine.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="Github" label="Github" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.Github.com" />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={'6'}>
                                            <Form.Item name="CompanyWebsite" label="Company Website" rules={[{ required: true, message: 'Field is required!' }]}>
                                                <Input className={'form-control ks-form-control'} placeholder="https://www.website.com" />
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

import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Upload, } from 'antd';
import { Editor } from '@tinymce/tinymce-react';

export default class PostJobStep3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fileList: []
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = ({ fileList: newFileList }) => {
        this.setState({
            fileList: newFileList
        });
    };


    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }


    render() {
        return (
            <>
                <Card className="border-0">
                    <Card.Title className="card-title mb-3">Step 3: Post Jobs</Card.Title>
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row>
                                <Col xl={12}>
                                    <Form.Item name="" label="">
                                        <div className={'uploadLifeAtVideo'}>
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture"
                                                fileList={this.state.fileList}
                                                onChange={this.onChange}
                                                multiple={false}
                                            >
                                                {this.state.fileList.length < 1 ?
                                                    <>
                                                        <button className={'btn-uploadLifeAtVideo'} type={'button'}>
                                                            <img alt={''} src={'assets/img/AntCloudOutlined.svg'} className={'img-fluid'} />
                                                            <h6 className={'mt-3'}>Upload Life at Work Video</h6>
                                                        </button>
                                                    </>

                                                    : null
                                                }
                                            </Upload>
                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="whoWeAre" label="Who We Are?">
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
                                <Col xl={12}>
                                    <Form.Item name="JobDescription" label="Job Description">
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
                                <Col xl={12}>
                                    <Form.Item name="KeyResponsibilities" label="Responsibilities">
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
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="JobRequirements" label="Job Requirements">
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
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="BonusPoints" label="Bonus Points">
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
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="GoalsAchieveInMonths" label="Goals to Achieve in Months">
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
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="Benefits" label="Benefits">
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
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="RequiredSkills" label="Required Skills">
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
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="SoftwareShouldKnow" label="Software should Know/Worked with">
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
                                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help'
                                            }}
                                            onEditorChange={this.handleEditorChange}
                                        />
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

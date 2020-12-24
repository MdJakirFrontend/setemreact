import React, { Component } from 'react'
import { Row, Col, Card, } from "react-bootstrap";
import { Form, Input, Checkbox , Upload } from 'antd';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import './PostJob.scss';


export default class PostJobStep5 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            screeningQuestionsItems: [
                { id: 0, label: 'Do you have the following license or certification?', name: 'Certification', visibilityStatusOnDom: true },
                { id: 1, label: 'Authorization', name: 'Work Authorization', visibilityStatusOnDom: false },
                { id: 2, label: 'Experience', name: 'Work Experience', visibilityStatusOnDom: false },
                { id: 3, label: 'Will you now or in the future require sponsorship for employment visa status? ', name: 'Visa', visibilityStatusOnDom: true },
                { id: 4, label: 'Do you Speak ', name: 'Language', visibilityStatusOnDom: true },
            ] ,
            fileList: []
        }

        this.addVisibilityStatusOnDom = this.addVisibilityStatusOnDom.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = ({ fileList: newFileList }) => {
        this.setState({
            fileList: newFileList
        });
    };

    // addVisibilityStatusOnDom
    addVisibilityStatusOnDom(e, id) {
        e.preventDefault();
        const screeningQuestionsItems = [];
        this.state.screeningQuestionsItems.map((item, index) => item.id === id ? screeningQuestionsItems.push({ id: id, label: item.label, name: item.name, visibilityStatusOnDom: !item.visibilityStatusOnDom }) : screeningQuestionsItems.push(item));
        this.setState({ screeningQuestionsItems });
    }


    render() {
        return (
            <>
                <Card className="border-0">
                    {/* <Card.Title className="card-title mb-3">Step 1: Post Jobs</Card.Title> */}
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row>
                                <Col xl={12}>
                                    {
                                        this.state.screeningQuestionsItems.map((item, index) => {
                                            if (item.visibilityStatusOnDom && item.name !== 'Visa') {
                                                return (
                                                    <div key={item.id} className={'formItemGroup border border-radius px-4 py-4 mb-4'}>
                                                        <Row className={'align-items-center'}>
                                                            <Col xl={7}>
                                                                <label className={'ks-label-control'}>{item.label}</label>
                                                            </Col>
                                                            <Col xl={4}>
                                                                <Form.Item name="" label="" rules={[{ required: true, message: 'field is required!' }]}>
                                                                    <Input className={'form-control ks-form-control rounded-0 border-top-0 border-left-0 border-right-0'} placeholder={item.name} />
                                                                </Form.Item>
                                                            </Col>
                                                            <Col xl={1}>
                                                                <button onClick={(e) => { this.addVisibilityStatusOnDom(e, item.id) }} className={'btn btn-light rounded-circle btn-sm float-right'} style={{ height: '40px', width: '40px' }}> <VscClose size={'1.5rem'} /> </button>
                                                            </Col>
                                                            <Col xl={12}>
                                                                <Form.Item className={'mb-0'} name="" valuePropName="">
                                                                    <Checkbox>Required Qualification</Checkbox>
                                                                    <span><strong>Ideal Answer : Yes</strong></span>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )
                                            } else if (item.visibilityStatusOnDom && item.name === 'Visa') {
                                                return (
                                                    <div key={item.id} className={'formItemGroup border border-radius px-4 py-4 mb-4'}>
                                                        <Row className={'align-items-center'}>
                                                            <Col xl={11}>
                                                                <label className={'ks-label-control'}>{item.label}</label>
                                                            </Col>
                                                            <Col xl={1}>
                                                                <button onClick={(e) => { this.addVisibilityStatusOnDom(e, item.id) }} className={'btn btn-light rounded-circle btn-sm float-right'} style={{ height: '40px', width: '40px' }}> <VscClose size={'1.5rem'} /> </button>
                                                            </Col>
                                                            <Col xl={12}>
                                                                <Form.Item className={'mb-0'} name="" valuePropName="">
                                                                    <Checkbox>Required Qualification</Checkbox>
                                                                    <span><strong>Ideal Answer : Yes</strong></span>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </Col>
                                <Col xl={12}>
                                    <Form.Item className={'border-top border-bottom pt-3 pb-1'} label="Add Screening Questions:">
                                        <ul className={'addScreeningQuestionsItems list-unstyled px-0'}>
                                            {
                                                this.state.screeningQuestionsItems.map((screeningItem, index) => {
                                                    return (
                                                        <li key={screeningItem.id}>
                                                            <button onClick={(e) => { this.addVisibilityStatusOnDom(e, screeningItem.id) }} className={'btn btn-adScreeningQuestion btn-light bg-white text-main-color py-2 px-3'}>
                                                                {screeningItem.name} {screeningItem.visibilityStatusOnDom ? <AiOutlineCheck className={'text-main-color'} size={'1.5rem'} /> : <BiPlus size={'1.5rem'} />}
                                                            </button>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <Form.Item name="" label="" className={'mt-4'}>
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
                                                            <h6 className={'mt-3'}>Do You Have Pre-employment Assessment?</h6>
                                                            <p>Upload Document</p>
                                                        </button>
                                                    </>

                                                    : null
                                                }
                                            </Upload>
                                        </div>
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

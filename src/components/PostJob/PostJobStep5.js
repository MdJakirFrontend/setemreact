import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Select as AntdSelect, Checkbox, Slider, InputNumber, } from 'antd';
import './PostJob.scss';

export default class PostJobStep6 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: 50,
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = value => {
        this.setState({
            inputValue: value,
        });
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
                                    <div className={'DailyBudgetSlider mb-4'}>
                                        <div className={'d-flex align-items-center mb-4'}>
                                            <label className={'ks-label-control mr-3 mb-0'}> Daily Budget</label>
                                            <div className="dailyBudgetGroup d-flex align-items-center">
                                                <span className="dailyBudgetGroupSymbol">$</span>
                                                <InputNumber
                                                    min={1}
                                                    max={200}
                                                    value={`${this.state.inputValue}`}
                                                    onChange={this.onChange}
                                                />
                                            </div>

                                        </div>
                                        <Slider
                                            min={1}
                                            max={200}
                                            onChange={this.onChange}
                                            value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
                                        />
                                        <p className={'mt-4'}>To reach enough candidates for this job post, we recommend $15.00 or more for your daily budget.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12}>
                                    <Form.Item className={'border-top border-bottom py-3'} name='' label="" valuePropName="checked">
                                        <Checkbox> <span className={'text-main-color'}>Can this be more of a PPC? Pay per click?</span> </Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <Form.Item name="KeepMyJobOpenUntil" label="Keep My Job Open Until" rules={[{ required: true, message: 'Keep My Job Open Until required !' }]}>
                                        <AntdSelect
                                            placeholder="Choose One"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <AntdSelect.Option checked value="1"> 30 Days </AntdSelect.Option>
                                            <AntdSelect.Option value="2">30 Days</AntdSelect.Option>
                                            <AntdSelect.Option value="3">30 Days</AntdSelect.Option>
                                        </AntdSelect>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12}>
                                    <div className={'py-3 px-2 bg-light mb-4'}>
                                        <ul>
                                            <li className={'mb-2'}>Your job will stay open until you close it. You can edit your budget or close your job post at any time.</li>
                                            <li className={'mb-2'}>Actual daily spend may be up to 30% higher than your $22.00 daily budget when your job post has the opportunity to get more views.</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Form>
                </Card>
            </>
        )
    }
}

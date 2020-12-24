import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Form, Input, Select as AntdSelect, } from 'antd';
import { VscChromeClose } from 'react-icons/vsc';
import Select from 'react-select';
import './PostJob.scss';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


export default class PostJobSte2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wholeSkillItems: [],
            skills: [
                {
                    id: 0,
                    text: 'Figma'
                },
                {
                    id: 1,
                    text: 'Photoshop'
                },
                {
                    id: 2,
                    text: 'Zeplin'
                },
            ],
            text: ''
        };

        this.handleChangeSingleSkill = this.handleChangeSingleSkill.bind(this);
        this.handleAddSingleSkill = this.handleAddSingleSkill.bind(this);
        this.filterSingleSkillItem = this.filterSingleSkillItem.bind(this);

        this.handleAddSkillPanel = this.handleAddSkillPanel.bind(this);
        this.FilterWholeSkillPanel = this.FilterWholeSkillPanel.bind(this);
    }



    // handleChangeSingleSkill
    handleChangeSingleSkill(e) {
        e.preventDefault();
        this.setState({ text: e.target.value });
    }


    // filterSingleSkillItem
    filterSingleSkillItem(e, id) {
        e.preventDefault();
        this.setState({
            skills: [...this.state.skills.filter(item => item.id !== id)]
        })
    }

    // FilterWholeSkillItem
    FilterWholeSkillPanel(e, id) {
        e.preventDefault();
        this.setState({
            wholeSkillItems: [...this.state.wholeSkillItems.filter(item => item.id !== id)]
        })
    }


    // handleAddSingleSkill
    handleAddSingleSkill(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return alert('please fill up the field !!');
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            skills: state.skills.concat(newItem),
            text: ''
        }));
    }

    // handleAddSingleSkill
    handleAddSkillPanel(e) {
        e.preventDefault();
        const newItem = {
            id: Date.now()
        };
        this.setState(state => ({
            wholeSkillItems: state.wholeSkillItems.concat(newItem),
        }));
    }


    render() {
        return (
            <>
                <Card className="border-0">
                    {/* <Card.Title className="card-title mb-3">Step 2: Job Function</Card.Title> */}
                    <Form layout="vertical">
                        <Card.Body className="px-0 py-0">
                            <Row>
                                <Col xl={12}>
                                    <Form.Item>
                                        <label className={'ks-label-control'}> Add Job Function (Up to 2)</label>
                                        <Select
                                            className={'ks-form-control'}
                                            isMulti
                                            components={animatedComponents}
                                            placeholder={'Add Job Function'}
                                            options={[
                                                { value: 'Design', label: 'Design' },
                                                { value: 'Coding', label: 'Coding' },
                                                { value: 'UI/UX', label: 'UI/UX' },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={6}>
                                    <Form.Item name="SelectEmploymentType" label="Employment Type" rules={[{ required: true, message: 'Employment Type required !' }]}>
                                        <AntdSelect
                                            placeholder="Select Employment Type"
                                            allowClear
                                            className={'form-control ks-form-control'}
                                        >
                                            <AntdSelect.Option checked value="1">Type 1 </AntdSelect.Option>
                                            <AntdSelect.Option value="2">Type 2</AntdSelect.Option>
                                        </AntdSelect>
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
                                <Col xl={12}>
                                    <Form.Item>
                                        <label className={'ks-label-control'}> Company Industry (Select up to 3) *</label>
                                        <Select
                                            className={'ks-form-control'}
                                            isMulti
                                            components={animatedComponents}
                                            placeholder={'Add Job Function'}
                                            options={[
                                                { value: 'creative', label: 'Creative Service' },
                                                { value: 'getweb', label: 'Getweb Inc' },
                                                { value: 'BdZone', label: 'Bangladesh Zone' },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xl={12}>
                                    <div className={'border-top pt-4 mt-4'}>
                                        <h6 className={'mb-4'}><strong>Skills</strong></h6>
                                        <Row>
                                            <Col>
                                                <Form.Item name="Category " label="Category" rules={[{ required: true, message: 'Category required !' }]}>
                                                    <AntdSelect
                                                        placeholder="Choose One"
                                                        allowClear
                                                        className={'form-control ks-form-control'}
                                                    >
                                                        <AntdSelect.Option checked value="1">Category 1 </AntdSelect.Option>
                                                        <AntdSelect.Option value="2">Category 2</AntdSelect.Option>
                                                    </AntdSelect>
                                                </Form.Item>
                                            </Col>
                                            <Col>
                                                <Form.Item name="YearExperience " label="Year of Experience" rules={[{ required: true, message: 'Seniority Level required !' }]}>
                                                    <AntdSelect
                                                        placeholder="Year of Experience"
                                                        allowClear
                                                        className={'form-control ks-form-control'}
                                                    >
                                                        <AntdSelect.Option checked value="1">5-7 </AntdSelect.Option>
                                                        <AntdSelect.Option value="2">7-10</AntdSelect.Option>
                                                        <AntdSelect.Option value="3">10-20</AntdSelect.Option>
                                                    </AntdSelect>
                                                </Form.Item>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Item name="Skills " label="Add Skill" rules={[{ required: true, message: 'Skills required !' }]}>
                                                    <div className={'control-block'}>
                                                        <Input className={'ks-form-control'} placeholder="Skills" onChange={(e) => { this.handleChangeSingleSkill(e) }} value={this.state.text} />
                                                        <button onClick={(e) => { this.handleAddSingleSkill(e) }} className="btn btn-custom px-4 py-2 btn-add text-light value-light">Add</button>
                                                    </div>
                                                    <ul className={'skillItem px-0 list-unstyled mt-3'}>
                                                        {this.state.skills.map(skill => (
                                                            <li key={skill.id}>
                                                                <span className={'btn-delete py-2 px-3'}>
                                                                    {skill.text}
                                                                    <button onClick={(e) => { this.filterSingleSkillItem(e, skill.id) }} className={'btn btn-sm btn-light bg-white text-main-color ml-1'}> <VscChromeClose size={'1rem'} />  </button>
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        {
                                            this.state.wholeSkillItems.map((singleItem , index) => {
                                                return (
                                                    <>
                                                        <Row key={index}>
                                                            <Col xs={12}>
                                                                <button style={{ boxShadow: 'none' }} className={'btn btn-light bg-white px-0 py-0 border-0 mb-4 float-right'} onClick={(e) => { this.FilterWholeSkillPanel(e, singleItem.id) }}>
                                                                    <strong className={'text-danger'}>Remove</strong>
                                                                </button>
                                                            </Col>
                                                            <Col>
                                                                <Form.Item name="Category " label="Category" rules={[{ required: true, message: 'Category required !' }]}>
                                                                    <AntdSelect
                                                                        placeholder="Choose One"
                                                                        allowClear
                                                                        className={'form-control ks-form-control'}
                                                                    >
                                                                        <AntdSelect.Option checked value="1">Category 1 </AntdSelect.Option>
                                                                        <AntdSelect.Option value="2">Category 2</AntdSelect.Option>
                                                                    </AntdSelect>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col>
                                                                <Form.Item name="YearExperience " label="Year of Experience" rules={[{ required: true, message: 'Seniority Level required !' }]}>
                                                                    <AntdSelect
                                                                        placeholder="Year of Experience"
                                                                        allowClear
                                                                        className={'form-control ks-form-control'}
                                                                    >
                                                                        <AntdSelect.Option checked value="1">5-7 </AntdSelect.Option>
                                                                        <AntdSelect.Option value="2">7-10</AntdSelect.Option>
                                                                        <AntdSelect.Option value="3">10-20</AntdSelect.Option>
                                                                    </AntdSelect>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col xl={12}>
                                                                <Form.Item name="Skills " label="Add Skill" rules={[{ required: true, message: 'Skills required !' }]}>
                                                                    <div className={'control-block'}>
                                                                        <Input className={'ks-form-control'} type="value" placeholder="Skills" onChange={(e) => { this.handleChangeSingleSkill(e) }} value={this.state.text} />
                                                                        <button onClick={(e) => { this.handleAddSingleSkill(e) }} className="btn btn-custom px-4 py-2 btn-add text-light value-light">Add</button>
                                                                    </div>
                                                                </Form.Item>
                                                                <ul className={'skillItem px-0 list-unstyled mt-3'}>
                                                                    {this.state.skills.map(skill => (
                                                                        <li key={skill.id}>
                                                                            <span className={'btn-delete py-2 px-3'}>
                                                                                {skill.text}
                                                                                <button onClick={(e) => { this.filterSingleSkillItem(e, skill.id) }} className={'btn btn-sm btn-light bg-white text-main-color ml-1'}> <VscChromeClose size={'1rem'} />  </button>
                                                                            </span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </>
                                                )
                                            })
                                        }
                                        <button style={{ boxShadow: 'none' }} className={'btn btn-light bg-white px-0 py-0 border-0 mb-4'} onClick={(e) => { this.handleAddSkillPanel(e) }}>
                                            <strong className={'text-main-color'}>+ Add New Skills</strong>
                                        </button>
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

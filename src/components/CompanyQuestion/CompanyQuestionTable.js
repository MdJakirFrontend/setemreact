import React, { Component } from 'react'
import { Table, thead, tbody, tr, td, } from 'react-bootstrap';
import { Checkbox, Form, Input, Button } from 'antd';
import './CompanyQuestionTable.scss';
// import { BiSortDown } from 'react-icons/bi';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default class CompanyQuestionTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: null,
            selectAll: false,
            isReplayFrom: {
                id: null,
                open: false
            },
            tableData: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
                { id: 7 },
            ]
        }

        this.handleOnAnswer = this.handleOnAnswer.bind(this);
        this.handleAllSelect = this.handleAllSelect.bind(this);
    }


    handleOnAnswer(id) {
        if (id === this.state.isReplayFrom.id) {
            this.setState({
                isReplayFrom: {
                    id: null,
                    open: false
                }
            })
        } else {
            this.setState({
                isReplayFrom: {
                    id: id,
                    open: true
                }
            })
        }
    }

    handleDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleAllSelect(e) {
        e.preventDefault();
        console.log(e.target.value)
    };

    render() {
        return (
            <>
                <div className={'CompanyQuestionTable-wrap'}>
                    <div className={'table-top d-flex align-items-center pl-4 mb-4 mt-5'}>
                        <Checkbox> Select All</Checkbox>
                        <Button className={'btn btn-light text-danger mr-3'} role={'button'}><strong>Delete</strong></Button>
                        <Button className={'btn btn-light text-danger'} role={'button'}><strong>Delete All</strong></Button>
                    </div>
                    <Table responsive="lg" className={'CompanyQuestionTable'}>
                        <thead>
                            <tr className={'bg-dark text-light'}>
                                <th style={{ width: '150px' }}>Number</th>
                                <th>Question</th>
                                <th style={{ width: '200px' }}>Date</th>
                                <th style={{ width: '100px' }}>Answer</th>
                            </tr>
                            <tr className="tableRowSpacer"><td colSpan={'4'}></td></tr>
                        </thead>
                        <tbody>

                            {
                                this.state.tableData.map((item, index) => {
                                    return (
                                        <>
                                            <tr key={index} className={`custom-boxShadow ${this.state.isReplayFrom.id === item.id && this.state.isReplayFrom.open ? 'bg-white' : ''}`}>
                                                <td>
                                                    <span className={'d-flex align-items-center mb-0'}>
                                                        <Checkbox> {item.id}</Checkbox>
                                                    </span>
                                                </td>
                                                <td>
                                                    <p className={`${this.state.isReplayFrom.id === item.id && this.state.isReplayFrom.open ? 'text-main-color' : ''}`}>Standard dummy text ever since the type and scrambled it to make?</p>
                                                    {
                                                        this.state.isReplayFrom.id === item.id && this.state.isReplayFrom.open ?
                                                            <Form className={'mt-4'}>
                                                                <Form.Item name="ReplayMessage" label="" rules={[{ required: true, message: 'Field required!' }]}>
                                                                    <label className={'ks-label-control'}><strong>Replay</strong></label>
                                                                    <Input.TextArea className={'ks-form-control ks-form-control-textarea'} rows={5} placeholder={'Type Your Answer...'} />
                                                                </Form.Item>
                                                                <Button htmlType="submit" className={'btn-custom text-light float-right'}>Submit</Button>
                                                            </Form> :
                                                            null
                                                    }
                                                </td>
                                                <td> 30 Sept 2020 </td>
                                                <td>
                                                    <Button className={`btn btn-success btn-answer ${this.state.isReplayFrom.id === item.id && this.state.isReplayFrom.open ? ' btn-custom text-light' : ''}`} onClick={() => { this.handleOnAnswer(item.id) }}>Answer</Button>
                                                </td>
                                            </tr>
                                            <tr key={`tableRowSpacer${index}`} className="tableRowSpacer"><td colSpan={'4'}></td></tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}

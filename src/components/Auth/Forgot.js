import React, { Component } from 'react'
import { Form, Input, Button, } from 'antd';
import './Auth.scss'


export default class Forgot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            passwordShow: false
        }
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <Form className={'auth-form'} onSubmit={(e) => { this.onSubmit(e) }}>
                    <h3 className={'mb-5 text-center'}>Forgot Password?</h3>
                    <Form.Item
                        label=""
                        name="emailAddress"
                        rules={[{ required: true, type : 'email', message: 'Please input your email address!' }]}
                    >
                        <Input className={'ks-form-control'} placeholder={'Enter Email'} />
                    </Form.Item>
                    <Form.Item >
                        <Button className={'btn-custom px-4 py-2 d-block w-100'} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

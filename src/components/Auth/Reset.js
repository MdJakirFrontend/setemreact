import React, { Component } from 'react'
import { Form, Input, Button, } from 'antd';
import './Auth.scss'


export default class Reset extends Component {
    constructor(props) {
        super(props)

        this.state = {
            passwordShow: false,
            newPasswordShow: false,
            confirmPasswordShow: false,
        }
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <Form className={'auth-form'} onSubmit={(e) => { this.onSubmit(e) }}>
                    <h3 className={'mb-5 text-center'}>Reset Password</h3>
                    <Form.Item
                        label=""
                        name="password"
                        rules={[{ required: true, message: 'Please input your current password!' }]}
                    >
                        <Input.Password className={'ks-form-control'} placeholder={'Current Password'} />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="newPassword"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input.Password className={'ks-form-control'} placeholder={'New Password'} />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Confirm password is required!' }]}
                    >
                        <Input.Password className={'ks-form-control'} placeholder={'Confirm Password'} />
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

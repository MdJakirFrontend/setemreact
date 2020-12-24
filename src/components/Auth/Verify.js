import React, { Component } from 'react'
import { Form, Input, Button, } from 'antd';
import './Auth.scss'


export default class Verify extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <Form className={'auth-form'}>
                    <h3 className={'mb-5 text-center'}>Verify Password</h3>
                    <Form.Item
                        label=""
                        name="text"
                        rules={[{ required: true, message: 'Please input your verification code!' }]}
                    >
                        <Input className={'ks-form-control'} placeholder={'Verification Code here'} />
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

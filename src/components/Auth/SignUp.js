import React, { Component } from 'react'
import { Form, Input, Button, Select, } from 'antd';
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { SiFacebook } from 'react-icons/si'
import './Auth.scss'


export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <Form className={'auth-form'} onSubmit={(e) => { this.onSubmit(e) }}>
                    <h3 className={'mb-5 text-center'}>Candidate Sign Up</h3>

                    <Form.Item
                        label=""
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please Input your email address!' }]}
                    >
                        <Input className={'ks-form-control'} placeholder={'Enter Email'} />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password className={'ks-form-control'} placeholder={'Password'} />
                    </Form.Item>
                    <Form.Item
                        label=""
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                    >
                        <Input.Password className={'ks-form-control'} placeholder={'Confirm Password'} />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="experience" label="" rules={[{ required: true,  message: 'Experience is required!' }]}>
                            <Select
                                placeholder="How did you hear about us?"
                                allowClear
                                className={'form-control ks-form-control'}
                            >
                                <Select.Option value="2">2 Year</Select.Option>
                                <Select.Option value="3">3 Year</Select.Option>
                                <Select.Option value="4">4 Year</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item >
                        <Button className={'btn-custom px-4 py-2 d-block w-100'} type="primary" htmlType="submit">
                            Create an account
                        </Button>
                    </Form.Item>
                    <Form.Item className={'SigninWith text-center'}>
                        <p className={'mb-1'}><small><strong>Create an account with</strong></small></p>
                        <Link to={'/'} className={'login-with-goggle mx-2'}> <FcGoogle size={'1.5rem'} /> </Link>
                        <Link to={'/'} className={'login-with-facebook mx-2'}> <SiFacebook size={'1.5rem'} /> </Link>
                    </Form.Item>
                    <Form.Item className={'haveAnAccount mt-3 text-center'}>
                        <p className={'mb-1'}><small><strong>Already have an account?</strong></small></p>
                        <Link to={'/signin'} className={'createAnAccountLink'}> <strong>Sign In</strong> </Link>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

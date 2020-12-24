import React, { Component } from 'react'
import { Form, Input, Button, } from 'antd';
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
                <Form className={'auth-form'}>
                    <h3 className={'mb-5 text-center'}>Candidate Sign In</h3>
                    <Form.Item
                        label=""
                        name="email"
                        rules={[{ required: true, message: 'Please input your email address!' }]}
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
                    <Form.Item className={'text-center'} >
                        <Link to={'/forgot'} className={'text-dark forgot'} style={{ fontSize: '12px' }} > <strong>Forgot Password?</strong></Link>
                    </Form.Item>
                    <Form.Item >
                        <Button className={'btn-custom px-4 py-2 d-block w-100'} type="primary" htmlType="submit">
                            Sign In
                        </Button>
                    </Form.Item>
                    <Form.Item className={'SigninWith text-center'}>
                        <p className={'mb-1'}><small><strong>Sign In with</strong></small></p>
                        <Link to={'/'} className={'login-with-goggle mx-2'}> <FcGoogle size={'1.5rem'} /> </Link>
                        <Link to={'/'} className={'login-with-facebook mx-2'}> <SiFacebook size={'1.5rem'} /> </Link>
                    </Form.Item>
                    <Form.Item className={'haveAnAccount mt-3 text-center'}>
                        <p className={'mb-1'}><small><strong>Don't have an account?</strong></small></p>
                        <Link to={'/signup'} className={'createAnAccountLink'}> <strong>Create an account</strong> </Link>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

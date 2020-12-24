import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import { Steps, Button, message } from 'antd';
import { AiOutlineLeft } from 'react-icons/ai';
import PostJobStep1 from '../components/PostJob/PostJobStep1'
import PostJobStep2 from '../components/PostJob/PostJobStep2'
import PostJobStep3 from '../components/PostJob/PostJobStep3'
import PostJobStep4 from '../components/PostJob/PostJobStep4'
import PostJobStep5 from '../components/PostJob/PostJobStep5'


const { Step } = Steps;
const steps = [
    {
        title: '',
        content: <PostJobStep1 />,
    },
    {
        title: '',
        content: <PostJobStep2 />,
    },
    {
        title: '',
        content: <PostJobStep3 />,
    },
    {
        title: '',
        content: <PostJobStep4 />,
    },
    {
        title: '',
        content: <PostJobStep5 />,
    },
];

export default class PostJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <>
                <main id="main-content">
                    <figure className={'main-content-inner'}>
                        <div className={'stepsGroup'}>
                            <div className={'my-4'}>
                                <Steps current={current}>
                                    {steps.map(item => (
                                        <Step key={item.title} title={item.title} />
                                    ))}
                                </Steps>
                            </div>
                            <div className={'stepsGroupContent border-0 bg-white px-4 py-4 custom-boxShadow border-radius'}>
                                <div className="steps-content d-block">
                                    {steps[current].content}
                                </div>
                                <div className="steps-action d-block mt-2 clearfix">
                                    {current > 0 && (
                                        <Button className={'btn-light px-4 py-2  float-left'} style={{ height: 'auto' }} onClick={() => this.prev()}>
                                            <AiOutlineLeft size={'1rem'} />  Back
                                        </Button>
                                    )}
                                    {current < steps.length - 1 && (
                                        <Button className={'btn-custom px-4 py-2 float-right'} type="primary" onClick={() => this.next()}>
                                            Continue
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <div className={'float-right d-flex'}>
                                            <Link to="/post-job-preview" className={'btn-custom px-4 py-2 mr-2'} type="primary">
                                                Preview
                                            </Link>
                                            <Link to="/" className={'btn-custom px-4 py-2'} type="primary">
                                                Proceed to checkout
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </figure>
                </main>
            </>
        );
    }
}
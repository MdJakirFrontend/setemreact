import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import { AiOutlineLeft } from 'react-icons/ai';
import CreateNewCompanyStepsForm1 from '../components/CreateNewCompanySteps/CreateNewCompanyStepsForm1'
import CreateNewCompanyStepsForm2 from '../components/CreateNewCompanySteps/CreateNewCompanyStepsForm2'
import CreateNewCompanyStepsForm3 from '../components/CreateNewCompanySteps/CreateNewCompanyStepsForm3'
import CreateNewCompanyStepsForm4 from '../components/CreateNewCompanySteps/CreateNewCompanyStepsForm4'


const { Step } = Steps;
const steps = [
    {
        title: '',
        content: <CreateNewCompanyStepsForm1 />,
    },
    {
        title: '',
        content: <CreateNewCompanyStepsForm2 />,
    },
    {
        title: '',
        content: <CreateNewCompanyStepsForm3 />,
    },
    {
        title: '',
        content: <CreateNewCompanyStepsForm4 />,
    },
];

export default class CreateNewCompanyProfile extends Component {
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
                    <h1 className={'page-title'}>Create New Company Profile</h1>
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
                                        <Button className={'btn-custom px-4 py-2 float-right'} type="primary" onClick={() => message.success('Processing complete!')}>
                                            Create New Profile
                                        </Button>
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

import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Result } from 'antd';

export default class Error404 extends Component {
    render() {
        return (
            <>
                <main id="main-content">
                    <div className="error-box">
                        <Result
                            status="404"
                            title="404"
                            subTitle="The page you are looking might have been removed had its name change or
                            temporarily unavailable."
                            extra={<Link to="/" className="btn btn-sm btn-primary rounded"> &#8592;  Back to home page</Link>}
                        />,
                    </div>
                </main>
            </>
        )
    }
}

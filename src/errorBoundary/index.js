import React, { Component } from 'react'
import { Result } from 'antd';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Result status="500" title="Caught By Error Boundary" subTitle="Sorry, something went wrong - please check the console to know briefly" />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary
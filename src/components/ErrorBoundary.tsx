import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  static getDerivedStateFromError(_: Error) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="note">
          <h1 className="notes">Oops! something went wrong</h1>
          <p className="notes">Try refreshing the page</p>
          <p className="notes">Or go back to another page</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

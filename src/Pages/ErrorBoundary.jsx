import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  // This lifecycle is invoked after an error has been thrown by a descendant component.
  // It receives the error that was thrown as a parameter and should return a value to update state.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // This lifecycle is invoked after an error has been thrown by a descendant component.
  // It is used for side-effects like logging the error.
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    // For example: logErrorToMyService(error, errorInfo);
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // You can also set the error state to display more info
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={styles.container}>
          <h1 style={styles.title}>🤕 Something went wrong.</h1>
          <p style={styles.message}>
            We're sorry, an unexpected error occurred. Please try refreshing the page.
          </p>
          <button onClick={() => window.location.reload()} style={styles.button}>
            Refresh Page
          </button>
          
          {/* This section is great for development. Consider removing it in production. */}
          <details style={styles.details}>
            <summary>Error Details</summary>
            <pre style={styles.pre}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    // If there's no error, render the children components
    return this.props.children;
  }
}

// Basic styling for the fallback UI
const styles = {
  container: {
    padding: '2rem',
    margin: '2rem',
    backgroundColor: '#fffbe6',
    border: '1px solid #ffe58f',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },
  title: {
    color: '#d46b08'
  },
  message: {
    fontSize: '1.1rem'
  },
  button: {
    padding: '0.7rem 1.5rem',
    margin: '1rem 0',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#005a9c',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  details: {
    marginTop: '1.5rem',
    textAlign: 'left',
    color: '#555'
  },
  pre: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    backgroundColor: '#f8f8f8',
    padding: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '0.5rem'
  }
};

export default ErrorBoundary;
import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render children when no error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Normal Content</div>
      </ErrorBoundary>
    );

    const normalContent = getByText('Normal Content');
    expect(normalContent).toBeInTheDocument();
  });

  it('should render an error message when an error occurs', () => {
    
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    const ThrowErrorComponent = () => {
      throw new Error('Test Error');
    };

    const { getByText } = render(
      <ErrorBoundary>
        <ThrowErrorComponent />
      </ErrorBoundary>
    );

    const errorMessage = getByText('Oops! something went wrong');
    expect(errorMessage).toBeInTheDocument();

    console.log = originalConsoleLog;
  });
});

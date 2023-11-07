import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render button with text and style', () => {
    const buttonText = 'Click me';
    const buttonStyle = { backgroundColor: 'blue' };
    const { getByText } = render(
      <Button text={buttonText} style={buttonStyle} />
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('background-color: blue');
  });

  it('should call onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={onClickMock} />);
    const buttonElement = getByText('Click me');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should render button with type "general"', () => {
    const { getByText } = render(<Button text="Click me" />);
    const buttonElement = getByText('Click me');

    expect(buttonElement).toHaveClass('button-general');
  });
});

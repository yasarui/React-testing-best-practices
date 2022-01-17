import { render, fireEvent, screen } from '@testing-library/react';
import { replaceCammelCaseWithSpaces } from './utils';
import App from './App';

describe('Color Component test Cases', () => {
  test('Initial State of a Button', () => {
    render(<App />);

    const buttonElement = screen.getByRole('button', { name: 'Change to blue' });

    // Checking weather the button with the Text Exist
    expect(buttonElement).toBeInTheDocument();

    // Checking weather button has a background style of red
    expect(buttonElement).toHaveStyle('backgroundColor: red');

    // Trigger a click event on the button
    fireEvent.click(buttonElement);

    // Check the button color is Changed
    expect(buttonElement).toHaveStyle('backgroundColor: blue');

    // Check weather the button text is also changed
    screen.getAllByRole('button', { name: 'Change to red' });
  });

  test('Initial Condition of the Button and the text', () => {
    render(<App />);
    // Checking weather the button is in clickable state
    const buttonElement = screen.getByRole('button', { name: 'Change to blue' });
    expect(buttonElement).toBeEnabled();

    // Checkbox is not checked
    const checkBox = screen.getByRole('checkbox', { name: 'Disable the button' });
    expect(checkBox).not.toBeChecked();
  });

  test('Button is disabled when Checkbox is checked', () => {
    render(<App />);
    // Clicking the checkbox
    const checkBox = screen.getByRole('checkbox', { name: 'Disable the button' });
    fireEvent.click(checkBox);

    // Sample Comment to check

    // Make sure the checkbox is checked
    expect(checkBox).toBeChecked();

    // Checking weather the button is disabled
    const buttonElement = screen.getByRole('button', { name: 'Change to blue' });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle('backgroundColor: grey');

    // UnCheck the Checkbox
    fireEvent.click(checkBox);

    // Make sure the button is enabled again
    expect(buttonElement).toBeEnabled();
  });
});

describe('Testing Util functions', () => {
  test('Works fine for no Capital letters', () => {
    expect(replaceCammelCaseWithSpaces('Red')).toBe('Red');
  });
  test('Works find with one Capital Letters', () => {
    expect(replaceCammelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works fine with one or more Captial Letters', () => {
    expect(replaceCammelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});

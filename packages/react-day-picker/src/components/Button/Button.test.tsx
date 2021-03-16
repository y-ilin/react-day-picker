import { screen } from '@testing-library/react';
import React from 'react';

import { customRender } from 'test';

import { Button } from 'components';

test('should render a button with type "button"', () => {
  customRender(<Button />);
  const button = screen.getByRole('button');
  expect(button).toHaveAttribute('type', 'button');
});

test('should render a button with the button class name', () => {
  customRender(<Button />);
  const button = screen.getByRole('button');
  expect(button.classList).toContain('rdp-button');
});

test('should render a button with the reset class name', () => {
  customRender(<Button />);
  const button = screen.getByRole('button');
  expect(button.classList).toContain('rdp-button_reset');
});

test('should add the class name from props', () => {
  customRender(<Button className="foo" />);
  const button = screen.getByRole('button');
  expect(button.classList).toContain('foo');
});

test('should add the inline style from props', () => {
  customRender(<Button style={{ color: 'red' }} />);
  const button = screen.getByRole('button');
  expect(button.style.color).toBe('red');
});

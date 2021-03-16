import { screen } from '@testing-library/react';
import React from 'react';

import { customRender } from 'test';
import tk from 'timekeeper';

import { Caption } from 'components';
import { DayPickerProps } from 'types';

const FrozenDate = new Date(2020, 5);

beforeEach(() => tk.freeze(FrozenDate));
afterEach(() => tk.reset());

describe('when navigation is disabled', () => {
  const dayPickerProps = { disableNavigation: true };
  customRender(<Caption />, { dayPickerProps });
  test('should render only the label', () => {
    const label = screen.getByText('April 2020');
    expect(label).toBeInTheDocument();
  });
});

describe('when the caption layout is "dropdown"', () => {
  const dayPickerProps: DayPickerProps = { captionLayout: 'dropdown' };
  let container: HTMLElement;
  beforeEach(() => {
    container = setup(dayPickerProps).container;
  });
  test('should render a dropdown with months and years', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  describe('when a month is selected from the month drop-down', () => {
    test.todo('should go to the selected month');
    test.todo('should cal the `onMonthChange` callback');
  });
  describe('when a year is selected from the year drop-down', () => {
    test.todo('should go to the selected month');
    test.todo('should cal the `onMonthChange` callback');
  });
});
describe('when the caption layout is "buttons"', () => {
  test.todo('should display the caption label');
  test.todo('should display the navigation');
  describe('when rendering multiple months', () => {
    describe('if is not the last month', () => {
      test.todo('should hide the next button');
    });
    describe('if is not the first month', () => {
      test.todo('should hide the previous button');
    });
  });
  describe('when clicking the previous button', () => {
    test.todo('should go to the previous month');
    test.todo('should call the `onMonthChange` callback');
    describe('if no previous month to navigate', () => {
      test.todo('should not change the month');
      test.todo('should not call the `onMonthChange` callback');
    });
    describe('if no next month to navigate', () => {
      test.todo('should not change the month');
      test.todo('should not call the `onMonthChange` callback');
    });
  });
  describe('when clicking the next button', () => {
    test.todo('should go to the next month');
    test.todo('should call the `onMonthChange` callback');
    describe('if no next month to navigate', () => {
      test.todo('should not change the month');
      test.todo('should not call the `onMonthChange` callback');
    });
    describe('if no next month to navigate', () => {
      test.todo('should not change the month');
      test.todo('should not call the `onMonthChange` callback');
    });
  });
});

tk.reset();

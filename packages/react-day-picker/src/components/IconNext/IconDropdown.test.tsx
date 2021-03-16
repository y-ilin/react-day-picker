import { RenderResult } from '@testing-library/react';
import React from 'react';

import { customRender } from 'test';

import { StyledComponentProps } from 'types';

import { IconNext } from './IconNext';

const setup = (props?: StyledComponentProps): RenderResult => {
  return customRender(<IconNext {...props} />);
};
test('should render correctly with style and class name', () => {
  const { container } = setup({ className: 'foo', style: { color: 'red' } });
  expect(container.firstChild).toMatchSnapshot();
});

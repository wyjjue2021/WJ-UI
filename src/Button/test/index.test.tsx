import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

describe('<Button />', () => {
  test('should render default', () => {
    const { container } = render(<Button>default</Button>);
    expect(container).toMatchSnapshot();
  });
});
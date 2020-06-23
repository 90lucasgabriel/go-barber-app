import React from 'react';
import { render } from 'react-native-testing-library';

import Signin from '../../pages/Signin';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('Sigin page', () => {
  it('should contains email/password inputs', () => {
    const { getByPlaceholder } = render(<Signin />);

    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});

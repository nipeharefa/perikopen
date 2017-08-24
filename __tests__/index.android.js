import 'react-native';
import React from 'react';
import { expect } from 'chai';
import AboutScreen from 'screens/about';
import Index from 'src';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AboutScreen />
  ).toJSON();
  expect(tree.type, 'View');
});

it('Apps Render Correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  console.log(tree);
});

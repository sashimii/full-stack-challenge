/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';

import NavigationBar from './containers/NavigationBar.react';
import Header from './ui/Header.react';

export const App = ({ a, b }: { a: string, b: string }): React$Element<> => (
  <div styleName="app-style">
    <NavigationBar />
    <Header heading="Admin Panel" subheading="The front end is incomplete" />
  </div>
);

export default CSSModules(App, styles);

import React from 'react';
// import Router from 'next/router';
import Link from 'next/link';
// import 'isomorphic-unfetch';

import Header from '../components/Header/Header';
import About from '../containers/About/About';

export default class MyLink extends React.Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

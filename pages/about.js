import React from 'react';

import Header from '../components/Header/Header';
import About from '../containers/About/About';

import getAbout from '../API/getAbout';

export default class extends React.Component {
  static async getInitialProps() {
    const json = await getAbout();
    return { data: json.data };
  }

  render() {
    return (
      <div>
        <Header />
        <About data={this.props.data} />
      </div>
    );
  }
}

import React from 'react';

import Header from '../components/Header/Header';
import App from '../containers/App/App';
export default class extends React.Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <div>
        <Header />
        <App />
      </div>
    );
  }
}

import React from 'react';

import Header from '../components/Header/Header';
import CanvasManagement from '../containers/CanvasManagement/CanvasManagement';

const canvasManagement1 = () => (
  <div>
    <Header />
    <CanvasManagement data={[]} />
  </div>
);

canvasManagement1.getInitialProps = async () => {
  return {};
};

export default canvasManagement1;

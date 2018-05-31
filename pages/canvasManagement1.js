import React from 'react';
import Link from 'next/link';

import Header from '../components/Header/Header';
import CanvasManagement from '../containers/CanvasManagement/CanvasManagement';

const canvasManagement1 = () => (
  <div>
    <Header />
    <CanvasManagement data={{ data: [] }} />
  </div>
);

const delay = interval => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};

canvasManagement1.getInitialProps = async () => {
  return {};
};

export default canvasManagement1;

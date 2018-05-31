import React from 'react';
import Link from 'next/link';

import Header from '../components/Header/Header';
import CanvasManagement from '../containers/CanvasManagement/CanvasManagement';

import fetch from 'node-fetch';

const url = 'http://localhost:3000/web/';
const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJfdXNlcl9pZCI6MTg4LCJjb21wYW55X2lkIjoxLCJ3b3Jrc3BhY2VfaWQiOjEsInJlbnRfdG8iOiIyMDE5LTAxLTAxVDAwOjAwOjAwLjAwMFoiLCJjb21wYW55X3Jvb3QiOmZhbHNlLCJpYXQiOjE1Mjc3MjkwMzF9.PLuoDFQaNLPblCUmFPoNvTqvp1-IiTkP92DIWdU1C-k'
};

const canvasManagement = ({ data }) => (
  <div>
    <Header />
    <CanvasManagement data={data} />
  </div>
);

const delay = interval => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};

canvasManagement.getInitialProps = async () => {
  const res = await fetch(`${url}content/getContent`, {
    method: 'POST',
    body: JSON.stringify({
      query: { content_type: 'I', file_type: '' },
      pagination: { current_page: 1, page_size: 10, total_number: 0 },
      sorter: { sort_field: 'update_time', sort_type: 'desc' }
    }),
    headers
  });
  const json = await res.json();

  // 等待五秒
  await delay(1000);

  return { data: json };
};

export default canvasManagement;

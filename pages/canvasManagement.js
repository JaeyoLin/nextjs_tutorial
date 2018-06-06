import React from 'react';
import Link from 'next/link';
import fetch from 'node-fetch';

import Header from '../components/Header/Header';
import CanvasManagement from '../containers/CanvasManagement/CanvasManagement';

import API from '../utility/API';

const canvasManagement = ({ data }) => (
  <div>
    <Header />
    <CanvasManagement data={data} />
  </div>
);

canvasManagement.getInitialProps = async () => {
  const response = await API.getContentList();
  const contentThumbnails = await API.getThumbnailInIds({
    contentIds: response.data.map(content => content.content_id)
  });

  const contentThumbnailObj = contentThumbnails.reduce(
    (obj, content) => ({ ...obj, [content.content_id]: content.thumbnail }),
    {}
  );

  const data = response.data.map(content => ({
    ...content,
    thumbnail: contentThumbnailObj[content.content_id]
  }));

  return { data };
};

export default canvasManagement;

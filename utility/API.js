import fetch from 'node-fetch';

const url = 'http://localhost:3000/web/';
const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJfdXNlcl9pZCI6MTg4LCJjb21wYW55X2lkIjoxLCJ3b3Jrc3BhY2VfaWQiOjEsInJlbnRfdG8iOiIyMDE5LTAxLTAxVDAwOjAwOjAwLjAwMFoiLCJjb21wYW55X3Jvb3QiOmZhbHNlLCJpYXQiOjE1MjgyNDk4Njl9.1Ymn5zGQpBrr25b61JXkPwadAfssUyRxwU8TKWZYh48'
};

const delay = interval => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};

/**
 * Get contents list
 *
 */
const getContentList = async () => {
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

  // await delay(2000);

  return json;
};

const getThumbnailInIds = async payload => {
  const res = await fetch(`${url}content/getThumbnailInIds`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers
  });
  const json = await res.json();

  // await delay(2000);

  return json;
};

const API = {
  getContentList,
  getThumbnailInIds
};

export default API;

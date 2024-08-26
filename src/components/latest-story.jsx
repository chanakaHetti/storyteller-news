import React from 'react';

import { timeCalculation } from '@/helpers/time-calculation';

// source: {
//   id: 'google-news',
//   name: 'Google News',
// },
// author: 'Xataka',
// title:
//   'Nuevo SUV de Xiaomi: fecha de lanzamiento, precio, modelos y todo lo que creemos saber sobre su próximo... - Xataka',
// description: null,
// url: 'https://news.google.com/rss/articles/CBMibkFVX3lxTFB4bTdQcDA5Q2tWd25FUWJpVnR1VGVsMTA2VEoxaTR0Rzl0S1BuSGQ5RmtNdFI3ckJJQnlzNTRZOWc2aHVXeFk5NlRSQjBSZVFVby02ektDSVNKUk4zWThvV1JZWDd1TVMyaTVXTzFn0gFzQVVfeXFMTlR1MnhRTHBCdUtLai0yc2EyRUZYMlB2eEd0M19haUk5c0tocnZ1ZnV0SzdPa0hYSk4zNk5lckpMU2Y0Y1VDZkNQd1RObnJzeHpjSEhJcy1CNnFiRlRVXzN0M3FsZHpvSHhMd0k2TjVKa3NUYw?oc=5',
// urlToImage: null,
// publishedAt: '2024-08-25T12:30:27Z',
// content: null,

const LatestStory = ({ story }) => {
  const { title, source, content, urlToImage, publishedAt } = story;

  return (
    <div className="latest-story">
      <div className="latest-story__breaking-news">Breaking News</div>
      <img
        className="latest-story__image"
        src={urlToImage || 'https://picsum.photos/200/300'}
        alt={title}
      />
      <div className="latest-story__source">{source.name}</div>
      <h2 className="latest-story__title">{title}</h2>
      <p className="latest-story__summary">{content}</p>
      <div className="latest-story__time">{timeCalculation(publishedAt)}</div>
    </div>
  );
};

export default LatestStory;

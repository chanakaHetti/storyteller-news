import React from 'react';

import { timeCalculation } from '@/helpers/time-calculation';

const LatestStory = ({ story }) => {
  const { title, source, content, urlToImage, publishedAt } = story;

  const newsContent = `${
    content ||
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industrys standard dummy text ever since'
  }`;

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
      <p className="latest-story__summary">{newsContent}</p>
      <div className="latest-story__time">{timeCalculation(publishedAt)}</div>
    </div>
  );
};

export default LatestStory;

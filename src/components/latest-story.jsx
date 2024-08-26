import React from 'react';

import { timeCalculation } from '@/helpers/time-calculation';
import { truncateText } from '@/helpers/truncate-text';

const LatestStory = ({ story, selectedCategory }) => {
  const { title, source, content, urlToImage, publishedAt } = story;

  const newsContent = `${
    content ||
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industrys standard dummy text ever since'
  }`;

  const newsTitle =
    selectedCategory === 'top-headlines'
      ? 'Breaking News'
      : `Latest ${selectedCategory} News`;

  const maxLength = 80;
  const truncatedTitle = truncateText(title, maxLength);

  return (
    <article className="latest-story">
      <div className="latest-story__news-title">{newsTitle}</div>
      <figure>
        <img
          className="latest-story__image"
          src={urlToImage || '/news-dummy.jpg'}
          alt={title}
        />
      </figure>
      <div className="latest-story__source">{source.name}</div>
      <a
        className="latest-story__title"
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {truncatedTitle}
      </a>
      <p className="latest-story__summary">{newsContent}</p>
      <div className="latest-story__time">{timeCalculation(publishedAt)}</div>
    </article>
  );
};

export default LatestStory;

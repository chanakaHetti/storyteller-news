import React from 'react';

import { formatDate } from '@/helpers/date-format';

const RecentStories = ({ stories }) => {
  return (
    <div className="recent-stories">
      {stories.map((story, index) => (
        <div
          key={index}
          className={`recent-stories__item ${
            index % 2 === 0 ? 'recent-stories__item--reverse' : ''
          }`}
        >
          <img
            className="recent-stories__item__image"
            // src={story.urlToImage}
            src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2167483461.jpg?q=w_1015,c_fill/f_webp"
            alt={story.title}
          />
          <div className="recent-stories__item__content">
            <div className="recent-stories__item__source">
              {story.source.name}
            </div>
            <h3 className="recent-stories__item__title">{story.title}</h3>
            <div className="recent-stories__item__meta">
              {story.author} . {formatDate(story.publishedAt)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentStories;

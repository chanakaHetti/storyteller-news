import React from 'react';

import { formatDate } from '@/helpers/date-format';

const RecentStories = ({ stories }) => {
  return (
    <section className="recent-stories">
      {stories.map((story, index) => (
        <article
          key={index}
          className={`recent-stories__item ${
            index % 2 === 0 ? 'recent-stories__item--reverse' : ''
          }`}
        >
          <figure>
            <img
              className="recent-stories__item__image"
              src={story.urlToImage || '/news-dummy.jpg'}
              alt={story.title}
            />
          </figure>

          <div className="recent-stories__item__content">
            <div className="recent-stories__item__source">
              {story.source.name}
            </div>
            <h3 className="recent-stories__item__title">{story.title}</h3>
            <div className="recent-stories__item__meta">
              {story.author} . {formatDate(story.publishedAt)}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default RecentStories;

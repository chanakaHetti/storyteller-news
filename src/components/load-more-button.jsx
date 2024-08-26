import React from 'react';

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <div className="load-more">
      <button className="load-more--button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;

'use client';

import React, { useEffect, useState } from 'react';

import Header from '@/components/header';
import CategoryMenu from '@/components/category-menu';
import LatestStory from '@/components/latest-story';
import RecentStories from '@/components/recent-stories';
import LoadMoreButton from '@/components/load-more-button';
import {
  fetchNewsByCategory,
  fetchNewsForAllCategories,
} from '@/services/news-service';
import { CATEGORY_KEYS } from '@/constants/categories';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('top-headlines');
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [latestStory, setLatestStory] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadStories = async () => {
      setLoading(true);

      if (selectedCategory !== 'top-headlines') {
        const fetchedStories = await fetchNewsByCategory(
          selectedCategory,
          page
        );
        if (page === 1) {
          setLatestStory(fetchedStories[0]);
          setStories(fetchedStories.slice(1));
        } else {
          setStories((prevStories) => [...prevStories, ...fetchedStories]);
        }
      } else {
        fetchNewsForAllCategories().then((results) => {
          results.forEach((data) => {
            if (page === 1) {
              setLatestStory(data[0]);
              setStories(data.slice(1));
            } else {
              setStories((prevStories) => [...prevStories, ...data]);
            }
          });
        });
      }

      setLoading(false);
    };

    loadStories();
  }, [selectedCategory, page]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <Header />
      <CategoryMenu
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      {latestStory && (
        <LatestStory story={latestStory} selectedCategory={selectedCategory} />
      )}
      <RecentStories stories={stories} />
      <LoadMoreButton onLoadMore={handleLoadMore} />
    </div>
  );
}

'use client';

import React, { useState } from 'react';

import Header from '@/components/header';
import CategoryMenu from '@/components/category-menu';
import LatestStory from '@/components/latest-story';
import RecentStories from '@/components/recent-stories';
import LoadMoreButton from '@/components/load-more-button';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('top-headlines');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <Header />
      <CategoryMenu
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <LatestStory />
      <RecentStories />
      <LoadMoreButton />
    </div>
  );
}

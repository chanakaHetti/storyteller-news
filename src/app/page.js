import Image from 'next/image';

import Header from '@/components/header';
import CategoryMenu from '@/components/category-menu';
import LatestStory from '@/components/latest-story';
import RecentStories from '@/components/recent-stories';
import LoadMoreButton from '@/components/load-more-button';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <CategoryMenu />
      <LatestStory />
      <RecentStories />
      <LoadMoreButton />
    </div>
  );
}

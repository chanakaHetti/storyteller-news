import { CATEGORY_KEYS } from '@/constants/categories';
import axios from 'axios';

export const fetchNewsByCategory = async (
  category,
  page = 1,
  pageSize = 10
) => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_NEWS_API_BASE_URL;

  let url = '';
  if (category === 'top-headlines') {
    url = `${BASE_URL}/top-headlines?category=Default&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  } else {
    url = `${BASE_URL}/top-headlines?category=${category.toLowerCase()}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  }

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching stories:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }

    return [];
  }
};

export const fetchNewsForAllCategories = async (page = 1, pageSize = 10) => {
  const promises = CATEGORY_KEYS.map((categoryKey) =>
    fetchNewsByCategory(categoryKey, page, pageSize)
  );

  try {
    const results = await Promise.all(promises);
    return results; // This will be an array of results for each category
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching stories:', error.message);
    } else {
      console.error('Error fetching news for all categories:', error);
    }

    return [];
  }
};

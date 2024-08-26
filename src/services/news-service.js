import axios from 'axios';

export const fetchNewsByCategory = async (category, page = 1) => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_NEWS_API_BASE_URL;

  let url = '';
  if (category === 'top-headlines') {
    url = `${BASE_URL}/top-headlines?page=${page}&pageSize=10&apiKey=${API_KEY}`;
  } else {
    url = `${BASE_URL}/top-headlines?category=${category.toLowerCase()}&page=${page}&pageSize=10&apiKey=${API_KEY}`;
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

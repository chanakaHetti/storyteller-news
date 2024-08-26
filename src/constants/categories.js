export const CATEGORIES = [
  {
    key: 'top-headlines',
    title: 'Top Headlines',
  },
  {
    key: 'business',
    title: 'Business',
  },
  {
    key: 'entertainment',
    title: 'Entertainment',
  },
  {
    key: 'general',
    title: 'General',
  },
  {
    key: 'health',
    title: 'Health',
  },
  {
    key: 'science',
    title: 'Science',
  },
  {
    key: 'sports',
    title: 'Sports',
  },
  {
    key: 'technology',
    title: 'Technology',
  },
];

export const CATEGORY_KEYS = CATEGORIES.map((category) => category.key).filter(
  (key) => key !== 'top-headlines'
);

import React from 'react';

import { CATEGORIES } from '@/constants/categories';

const CategoryMenu = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category">
      <nav className="category-menu" aria-label="Category Menu">
        {CATEGORIES.map((category) => (
          <div
            key={category.key}
            className={`category-menu__item ${
              selectedCategory === category.key
                ? 'category-menu__item--active'
                : ''
            }`}
            onClick={() => onSelectCategory(category.key)}
          >
            {category.title}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default CategoryMenu;

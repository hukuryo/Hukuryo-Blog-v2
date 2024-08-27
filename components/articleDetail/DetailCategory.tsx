import React from 'react';
import { FaClock } from 'react-icons/fa';

type CategoryArea = {
  category: string;
  createdDate: string;
};

export const DetailCategory = (props: CategoryArea) => {
  const { category, createdDate } = props;
  return (
    <div className="mb-12">
      <span className="text-sm rounded-full p-2 bg-gray-200 dark:bg-slate-700">
        {category}
      </span>
      <small className="text-gray-500 ml-2 dark:text-white">
        <FaClock className="mr-1 inline mb-1" />
        {createdDate}
      </small>
    </div>
  );
};

import React from 'react';
import { FaClock } from "react-icons/fa";

type CategoryArea = {
  category: string;
  createdDate: string;
};

export function DetailCategory(props: CategoryArea) {
  const { category, createdDate } = props;
  return (
    <div className="mb-12">
      <span className="text-sm rounded-full p-2 bg-gray-200">{category}</span>
      <small className="text-gray-500 ml-2">
        <FaClock className="mr-1 inline mb-1" />
        {createdDate}
      </small>
    </div>
  );
}

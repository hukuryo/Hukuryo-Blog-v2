import React from 'react';
import { FaClipboard } from 'react-icons/fa';

type DetailTitle = {
  title: string;
};

export const DetailTitle = (props: DetailTitle) => {
  const { title } = props;
  return (
    <h1 className="text-3xl font-bold pb-6">
      <FaClipboard className="mr-2 inline mb-1" />
      {title}
    </h1>
  );
};

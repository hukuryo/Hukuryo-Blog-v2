import React from 'react';
import { DetailImage } from './DetailImage';
import { DetailCategory } from './DetailCategory';
import { DetailTitle } from './DetailTitle';
import { BlogIdProps } from '../../types/article';
import { useArrangeDate } from '../../hooks/useArrangeDay';

export function DetailBody(props: BlogIdProps) {
  const { blog } = props;

  const createdDate = useArrangeDate(blog.publishedAt);

  return (
    <div className="mb-10 p-7 mx-auto w-10/12 lg:w-9/12 shadow-lg rounded-md bg-white dark:bg-slate-800">
      <DetailTitle title={blog.title} />
      <DetailCategory category={blog.category} createdDate={createdDate} />
      <DetailImage imageUrl={blog.imageUrl.url} />
      <div
        className="prose max-w-none mb-10"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
}

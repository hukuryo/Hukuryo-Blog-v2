import React from 'react';
import { DetailImage } from './DetailImage';
import { DetailCategory } from './DetailCategory';
import { DetailTitle } from './DetailTitle';
import { BlogIdProps } from '../../types/article';
import { formatDate } from '../../lib/utils';

export const DetailBody = (props: BlogIdProps) => {
  const { blog } = props;

  const createdDate = formatDate(blog.publishedAt);

  return (
    <div className="mb-10 p-7 mx-auto w-10/12 lg:w-9/12 shadow-lg rounded-md bg-white dark:bg-slate-800">
      <DetailTitle title={blog.title} />
      <DetailCategory category={blog.category} createdDate={createdDate} />
      <DetailImage imageUrl={blog.imageUrl.url} />
      <div
        className="prose prose-slate dark:prose-invert max-w-none mb-10 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-transparent prose-code:text-white prose-code:font-semibold prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
};

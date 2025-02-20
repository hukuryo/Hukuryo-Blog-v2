import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

import { ArticleContent } from '../types/article';
import { client } from '../lib/client';

async function fetchArticles(pass: string): Promise<ArticleContent[]> {
  const response = await client.get({
    endpoint: 'articles',
    queries: { filters: `kinds[contains]${pass}` },
  });

  return response.contents;
}

type ArticleCardProps = {
  article: ArticleContent;
  pass: string;
};

const ArticleCard: FC<ArticleCardProps> = ({ article, pass }) => (
  <Link href={`/articles/${pass}/${article.id}`} legacyBehavior>
    <a className="border-black">
      <article className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 bg-white dark:bg-slate-800">
        <div className="h-auto">
          <Image
            src={article.imageUrl.url}
            alt="見出し画像"
            width={40}
            height={60}
            className="w-full h-48 m-0 scale-100"
          />
        </div>
        <div className="p-4">
          <span className="text-sm rounded-full p-2 bg-slate-300 dark:bg-slate-600 mr-2">
            {article.category}
          </span>
          <FaClock className="h-3 mr-1 inline mb-1" />
          <small>
            {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })}
          </small>
          <h4 className="font-bold pt-2 transition-colors group-hover:text-primary-500">
            {article.title}
          </h4>
        </div>
      </article>
    </a>
  </Link>
);

export const ArticleList: FC<{ pass: string }> = async ({ pass }) => {
  try {
    const articles = await fetchArticles(pass);

    return (
      <ul className="mt-8 grid grid-cols-1 gap-6 w-full mr-5 md:grid-cols-2">
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleCard article={article} pass={pass} />
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error('Error fetching articles:', error);
    return <p>記事の読み込み中にエラーが発生しました。</p>;
  }
};

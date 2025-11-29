import React, { FC } from 'react';

import { ArticleContent } from '../types/article';
import { client } from '../lib/client';
import { ArticleCard } from './ArticleCard';

async function fetchArticles(pass: string): Promise<ArticleContent[]> {
  const response = await client.get({
    endpoint: 'articles',
    queries: { filters: `kinds[contains]${pass}` },
  });

  return response.contents;
}

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

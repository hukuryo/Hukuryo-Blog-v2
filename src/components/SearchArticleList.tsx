import React, { FC } from 'react';

import { ArticleContent } from '../types/article';
import { client } from '../lib/client';
import { ArticleCard } from './ArticleCard';

async function fetchArticles(searchQuery?: string): Promise<ArticleContent[]> {
  try {
    const response = await client.get({
      endpoint: 'articles',
      queries: { q: searchQuery },
    });
    return response.contents;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}

type SearchArticleProps = {
  searchQuery?: string;
};

export const SearchArticleList: FC<SearchArticleProps> = async ({
  searchQuery,
}) => {
  try {
    const articles = await fetchArticles(searchQuery);

    if (articles.length === 0) {
      return <div className="mt-10">該当する記事が見つかりませんでした。</div>;
    }

    return (
      <div>
        {searchQuery && (
          <p className="mb-4">
            「{searchQuery}」の検索結果: {articles.length}件
          </p>
        )}
        <ul className="mt-8 grid grid-cols-1 gap-6 w-full mr-5 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.id} className="h-full">
              <ArticleCard article={article} pass={article.kinds} />
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    return <div>記事の読み込み中にエラーが発生しました。</div>;
  }
};

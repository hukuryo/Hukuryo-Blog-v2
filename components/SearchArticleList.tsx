import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

import { ArticleContent } from '@/app/types/article';
import { client } from '@/app/lib/client';

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

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

interface ArticleCardProps {
  article: ArticleContent;
  pass: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, pass }) => (
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
            {new Date(article.publishedAt).toLocaleDateString(
              'ja-JP',
              DATE_FORMAT_OPTIONS,
            )}
          </small>
          <h4 className="font-bold pt-2 transition-colors group-hover:text-primary-500">
            {article.title}
          </h4>
        </div>
      </article>
    </a>
  </Link>
);

interface SearchArticleProps {
  searchQuery?: string;
}

const SearchArticleList: React.FC<SearchArticleProps> = async ({
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
            <li key={article.id}>
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

export default SearchArticleList;

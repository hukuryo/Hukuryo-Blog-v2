import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from "react-icons/fa";

import { ArticleContent } from '../types/article';
import { client } from '../lib/client';

interface SearchArticleProps {
  pass: string
}

const SearchArticleList: FC<SearchArticleProps> = async ({ pass }: SearchArticleProps) => {
  const articles = await client.get({
    endpoint: 'articles',
  });

  // const articlesByTypes: ArticleContent[] = articles.contents.filter(
  //   (article: ArticleContent) => article.title[0] === searchPass,
  // );

  console.log(articles)

  if(articles.length == 0){
    return(
      <>
        <div>
          該当する記事はありません。
        </div>
      </>
    )
  }


  return (
    <ul className="mt-8 grid grid-cols-1 gap-6 w-full mr-5 md:grid-cols-2">
      {articles.map((article: ArticleContent) => (
        <li key={article.id}>
          <Link href={`/${pass}/${article.id}`} legacyBehavior>
            <a className='border-black'>
              <article className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:opacity-80">
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
        </li>
      ))}
    </ul>
  );
};

export default SearchArticleList;

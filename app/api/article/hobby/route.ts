import { client } from '@/app/lib/client';
import { ArticleContent } from '@/types/article';
import { NextResponse } from 'next/server';

export async function GET() {
  const articles = await client.get({
    endpoint: 'articles',
  });

  const articlesByTypes: ArticleContent[] = articles.contents.filter(
    (article: ArticleContent) => article.kinds[0] === 'hobby',
  );

  return NextResponse.json(articlesByTypes);
}

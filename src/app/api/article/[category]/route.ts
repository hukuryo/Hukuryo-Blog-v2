import { NextResponse } from 'next/server';

import { client } from '../../../../lib/client';
import { ArticleContent } from '../../../../types/article';
import { isValidCategory } from '../../../../lib/categories';

type RouteContext = {
  params: {
    category: string;
  };
};

export async function GET(request: Request, context: RouteContext) {
  const { category } = context.params;

  if (!isValidCategory(category)) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }

  const articles = await client.get({
    endpoint: 'articles',
  });

  const articlesByTypes: ArticleContent[] = articles.contents.filter(
    (article: ArticleContent) => article.kinds[0] === category,
  );

  return NextResponse.json(articlesByTypes);
}

import { ArticleContent } from '../../types/article';
import { client } from './client';

export const blogDetailData = async (blogId: string) => {
  const blogDetailContent: ArticleContent = await client.get({
    endpoint: 'articles',
    contentId: blogId,
  });
  return blogDetailContent;
};

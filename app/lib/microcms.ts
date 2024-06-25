import { ArticleContent } from '../types/article';
import { client } from './client';

export const blodDetailData = async (blogId: string) => {
  const blodDetailContent: ArticleContent = await client.get({
    endpoint: 'articles',
    contentId: blogId,
  });
  return blodDetailContent;
};

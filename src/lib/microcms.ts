import { ArticleContent } from '../types/article';
import { ProfileContent } from '../types/profile';
import { client } from './client';

export const blogDetailData = async (blogId: string) => {
  const blogDetailContent: ArticleContent = await client.get({
    endpoint: 'articles',
    contentId: blogId,
  });
  return blogDetailContent;
};

export const getProfileData = async () => {
  const profile: ProfileContent = await client.get({
    endpoint: 'profile',
  });
  return profile;
};

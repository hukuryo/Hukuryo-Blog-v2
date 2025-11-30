type ProfileItem = {
  content: string;
};

export type ProfileContent = {
  contents: ProfileItem[];
  totalCount: number;
  offset: number;
  limit: number;
};

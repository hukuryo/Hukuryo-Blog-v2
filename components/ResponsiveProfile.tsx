import React from 'react';
import { SearchInputForm } from './SearchInputForm';
import { Profile } from './Profile';

export const ResponsiveProfile = () => {
  return (
    <div className="lg:hidden mt-20">
      <SearchInputForm />
      <Profile />
    </div>
  );
};

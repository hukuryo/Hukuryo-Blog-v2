import { Profile } from './Profile';
import { SearchInputForm } from './SearchInputForm';

export const SideBar = () => {
  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="h-full ml-10 hidden mb-5 lg:block"
      >
        <SearchInputForm />
        <Profile />
      </aside>
    </>
  );
};

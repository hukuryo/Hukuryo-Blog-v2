import { Profile } from './Profile';
import { SearchInputForm } from './SearchInputForm';

export const SideBar = () => {
  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="ml-10 hidden mb-5 lg:block"
      >
        <div className="h-full flex flex-col shadow-lg rounded-md bg-white dark:bg-slate-900 p-5">
          <SearchInputForm />
          <Profile />
        </div>
      </aside>
    </>
  );
};

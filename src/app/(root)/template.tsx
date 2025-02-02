import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return <div className="bg-slate-100 dark:bg-black">{children}</div>;
}

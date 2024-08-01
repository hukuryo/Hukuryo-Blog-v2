import React from 'react';
import Link from 'next/link';

import { FaHome, FaFolder, FaAngleRight } from 'react-icons/fa';
import { Tracking } from '../types/pageTracking';

export function PageTracking(props: Tracking) {
  const { pass, pageTitle, articleTitle, articlePass } = props;

  return (
    <div className="py-3 pl-3 bg-gray-200 dark:bg-slate-900">
      <Link href="/" legacyBehavior>
        <a className="mr-3 text-sm hover:underline">
          <FaHome className="mr-1 inline mb-1" />
          TOP
        </a>
      </Link>
      <FaAngleRight className="inline mb-1" />
      <Link href={`/articles/${pass}`} legacyBehavior>
        <a className="ml-3 text-sm hover:underline">
          <FaFolder className="mr-1 inline mb-1" />
          {pageTitle}
        </a>
      </Link>
      {articleTitle == null ? null : (
        <>
          <FaAngleRight className="ml-3 inline mb-1" />
          <Link href={`/articles/${pass}/${articlePass}`} legacyBehavior>
            <a className="ml-3 text-sm hover:underline">
              <FaFolder className="mr-1 inline mb-1" />
              {articleTitle}
            </a>
          </Link>
        </>
      )}
    </div>
  );
}

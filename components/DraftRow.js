import React from 'react';

const DraftRow = ({ draftTitle, description, level, onClick }) => {
  return (
    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800" onClick={onClick}>
      <td className="size-px whitespace-nowrap">
        <a className="block relative z-10" href="#">
          <div className="px-6 py-2">
            <div className="block text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">{draftTitle}</div>
          </div>
        </a>
      </td>
      <td className="h-px w-72 min-w-72">
        <a className="block relative z-10" href="#">
          <div className="px-6 py-2">
            <p className="text-sm text-gray-500 dark:text-neutral-500">{description}</p>
          </div>
        </a>
      </td>
      <td className="size-px whitespace-nowrap">
        <a className="block relative z-10" href="#">
          <div className="px-6 py-2">
            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-neutral-200">{level}</span>
          </div>
        </a>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-2">
          <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
            <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700" aria-labelledby="hs-table-dropdown-1">
              <div className="py-2 first:pt-0 last:pb-0">
                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">Actions</span>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Rename team</a>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Add to favorites</a>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Archive team</a>
              </div>
              <div className="py-2 first:pt-0 last:pb-0">
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default DraftRow;

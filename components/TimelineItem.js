import React from 'react';

const TimelineItem = ({ date, icon, name, explanation }) => {
  return (
    <div>
      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
          {date}
        </h3>
      </div>
      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <span className="flex shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
              {icon}
            </span>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <div className="border rounded-lg shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-700">
            <div className="bg-gray-100 dark:bg-neutral-800 p-2 rounded-t-lg">
              <strong className="block text-sm text-gray-600 dark:text-neutral-400">{name}</strong>
            </div>
            <div className="p-4 border-b dark:border-neutral-700">
              <p className="text-md text-gray-800 dark:text-neutral-200">{explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

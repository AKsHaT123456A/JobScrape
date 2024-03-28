// components/NewsFeed.tsx
import React from 'react';
import { Drawe } from './popover/popover';
import { Separator } from './ui/separator';

interface NewsItem {
  id: number;
  title: string;
}

interface Props {
  news: NewsItem[];
}

const NewsFeed: React.FC<Props> = ({ news }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">News Feed</h2>
      <Separator/>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 flex justify-center items-center flex-col">
        {news.map(item => (
          <li key={item.id} className="py-4 ">
            <Drawe />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;

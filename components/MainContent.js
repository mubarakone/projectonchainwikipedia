'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ArticleTab = dynamic(() => import('./ArticleTab'), { ssr: false });
const TalkTab = dynamic(() => import('./TalkTab'), { ssr: false });
const EditTab = dynamic(() => import('./EditTab'), { ssr: false });

export default function MainContent({ content, mdContent }) {
  const [selectedTab, setSelectedTab] = useState('Article');

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      console.log('Navigator is available:', navigator.userAgent);
    } else {
      console.log('Navigator is not available');
    }
  }, []);

  const renderTabContent = () => {
    if (typeof window === 'undefined') {
      return null; // Prevents rendering on the server side
    }

    switch (selectedTab) {
      case 'Article':
        return <ArticleTab content={content} />;
      case 'Talk':
        return <TalkTab switchToEditTab={() => setSelectedTab('Edit')} />;
      case 'Read':
        return <ArticleTab content={content} />;
      case 'Edit':
          return <EditTab content={mdContent} />
      default:
        return <ArticleTab content={content} />;
    }
  };

  return (
    <main className="box-border w-[80vw] pt-10 pl-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[2.5vw] font-normal font-serif">Project Onchain Wikipedia</h1>
        <div className="flex items-center font-bold gap-2">
          <a href="#">
            <img id="translate" className="h-6" src="/images/Translate.jpg" alt="Translate" />
          </a>
          <Link href="#"><span>1 Language</span></Link>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between leading-[2.5rem]">
        <div className="flex items-center gap-4">
          <span
            className={`cursor-pointer text-blue-500 hover:underline ${selectedTab === ('Article' || 'Read') ? 'font-bold text-black border-b-3 border-black' : ''}`}
            onClick={() => setSelectedTab('Article')}
          >
            Article
          </span>
          <span
            className={`cursor-pointer text-blue-500 hover:underline ${selectedTab === 'Talk' ? 'font-bold text-black border-b-3 border-black' : ''}`}
            onClick={() => setSelectedTab('Talk')}
          >
            Talk
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`cursor-pointer text-blue-500 hover:underline ${selectedTab === ('Article' || 'Read') ? 'font-bold text-black border-b-3 border-black' : ''}`}
            onClick={() => setSelectedTab('Read')}
          >
            Read
          </span>
          <span
            className={`cursor-pointer text-blue-500 hover:underline ${selectedTab === 'Edit' ? 'font-bold text-black border-b-3 border-black' : ''}`}
            onClick={() => setSelectedTab('Edit')}
          >
            Edit
          </span>
          <Link href="#"><span className="text-blue-500 hover:underline">View History</span></Link>
          <Link href="#"><span className="text-blue-500 hover:underline">Tools</span></Link>
        </div>
      </div>
      <hr />
      <div className="my-2 text-base text-gray-700">
        <p>From Wikipedia, the free encyclopedia</p>
      </div>
      <div className="w-auto">
        {renderTabContent()}
      </div>
    </main>
  );
}

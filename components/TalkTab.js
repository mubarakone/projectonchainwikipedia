'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs, doc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore';
import { useFirebase } from '../context/FirebaseContext';
import { useIsLoggedIn } from '@dynamic-labs/sdk-react-core';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import TimelineItem from './TimelineItem';
import TimelineComments from './TimelineComments';
import DraftRow from './DraftRow';
import { getButtonLabel, getButtonClass } from './utils';

export default function TalkTab({ switchToEditTab }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { db } = useFirebase();
  const [draftData, setDraftData] = useState([]);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [rowCount, setRowCount] = useState(0);
  const [comment, setComment] = useState('');

  const isLoggedIn = useIsLoggedIn();

  const name = "Alex Gregarov"
  const commentName = "Kevin"

  const getIcon = (name) => {
    if (!name || typeof name !== 'string') return '';
    return name.charAt(0).toUpperCase();
  };

  useEffect(() => {
    const fetchDraftData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'drafts'));
        const drafts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })).filter(draft => draft.title && draft.description);
        setDraftData(drafts);
        setRowCount(drafts.length);
      } catch (error) {
        console.error("Error fetching draft data: ", error);
      }
    };

    fetchDraftData();
  }, [db]);

  const selectedDraftData = draftData.find((draft) => draft.title === selectedDraft);

  const handleComment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    const draftRef = doc(db, 'drafts', selectedDraftData.id);

    const newComment = {
      createdAt: Timestamp.now(),
      explanation: comment,
    };

    try {
      await updateDoc(draftRef, {
        comments: arrayUnion(newComment),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Error saving draft:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {!isLoggedIn && (
        <div className="bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500" role="alert">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <div className="ms-4">
              <h3 className="text-sm text-red-700 font-semibold">
                You are not logged in.
              </h3>
              <div className="mt-1 text-sm text-black">
                Your IP address will be publicly visible if you make any edits. If you <Link className='text-sm text-semibold' href={"#"}>log in</Link> or <Link className='text-sm text-semibold' href={"#"}>create an account</Link>, your edits will be attributed to a username, among other <Link className='text-sm' href={"#"}>benefits</Link>.
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  {selectedDraft ? (
                    <>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">{selectedDraft}</h2>
                    </>
                  ) : (
                    <>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">Drafts</h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">Create drafts, discuss, edit and more.</p>
                      </div>
                      <div>
                        <div className="inline-flex gap-x-2">
                          <div className="hs-dropdown [--placement:bottom-right] relative inline-block" data-hs-dropdown-auto-close="inside">
                            <button id="hs-as-table-table-filter-dropdown" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                              <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18" />
                                <path d="M7 12h10" />
                                <path d="M10 18h4" />
                              </svg>
                              Filter
                              <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-full text-xs font-medium border border-gray-300 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">2</span>
                            </button>
                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-20 bg-white shadow-md rounded-lg mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700" aria-labelledby="hs-as-table-table-filter-dropdown">
                              <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                                <label htmlFor="hs-as-filters-dropdown-frequency" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-frequency" checked />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Frequency</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-status" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-status" checked />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Status</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-created" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-created" />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Created</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-due-date" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-due-date" />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Due Date</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-amount" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-amount" />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Amount</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <button onClick={switchToEditTab} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Create Draft</button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {selectedDraft ? (
                <div className="px-6 py-4">
                  <TimelineItem date={selectedDraftData.createdAt?.toDate().toLocaleDateString()} icon={getIcon(selectedDraftData?.address)} name={selectedDraftData?.address} explanation={selectedDraftData.explanation} />
                  {selectedDraftData.comments?.map((comment, index) => (
                    <TimelineComments key={index} date={comment.createdAt?.toDate().toLocaleDateString()} icon={getIcon(commentName)} name={commentName} explanation={comment.explanation} />))
                  }
                  <form onSubmit={handleComment} className="border rounded-lg shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-700">
                    <div htmlFor="comment-label" className="bg-gray-100 dark:bg-neutral-800 p-2 rounded-t-lg">
                      <strong className="block text-sm text-gray-600 dark:text-neutral-400">Add a comment:</strong>
                    </div>
                    <div className="p-4 border-b dark:border-neutral-700">
                      <SimpleMDE value={comment} onChange={setComment} placeholder='Add your comment here...' />
                    </div>
                    <div className='grid relative mt-3.5'>
                      <button type="submit" className={`mt-4 px-4 py-2 text-white rounded ${getButtonClass(isLoading, isSuccess, isError)}`} disabled={isLoading}>
                        {getButtonLabel(isLoading, isSuccess, isError)}
                      </button>
                    </div>
                  </form>
                </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                          <a className="group inline-flex items-center gap-x-2" href="#">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Title</span>
                            <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </a>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <a className="group inline-flex items-center gap-x-2" href="#">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Description</span>
                            <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </a>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <a className="group inline-flex items-center gap-x-2" href="#">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Level</span>
                            <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </a>
                        </th>
                        <th scope="col" className="px-6 py-3 text-end"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {draftData.map((draft, index) => (
                        <DraftRow key={index} draftTitle={draft.title} description={draft.description} level="2" onClick={() => setSelectedDraft(draft.title)} />
                      ))}
                    </tbody>
                  </table>
                )}
                {selectedDraft ? (
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                    <div>
                      <div className="inline-flex gap-x-2">
                        <button onClick={() => setSelectedDraft(null)} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">{rowCount}</span> results
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          Prev
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                          Next
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

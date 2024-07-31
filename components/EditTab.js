'use client'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link'
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useFirebase } from '../context/FirebaseContext'
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadString } from 'firebase/storage';
import { useIsLoggedIn, useDynamicContext } from '@dynamic-labs/sdk-react-core'; 

const MarkdownEditor = ({ value, setValue, isEditable }) => {

  const editorOptions = useMemo(() => ({
    spellChecker: false,
    readOnly: !isEditable,
  }), [isEditable]);

  return (
    <div className="container mx-auto">
      <div className="relative">
        <SimpleMDE
          value={value}
          onChange={setValue}
          options={editorOptions}
        />
        {!isEditable && (
          <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center pointer-events-auto">
          </div>
        )}
      </div>
    </div>
  );
};

export default function EditTab({ content }) {
  const [value, setValue] = useState(content);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { db, storage } = useFirebase();

  const { primaryWallet } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();

  const getButtonLabel = () => {
    if (isLoading) return 'Saving...';
    if (isSuccess) return 'Saved Successfully';
    if (isError) return 'Save Failed';
    return 'Save Draft';
  };

  const getButtonClass = () => {
    if (isLoading) return 'bg-gray-500';
    if (isSuccess) return 'bg-green-500';
    if (isError) return 'bg-red-500';
    return 'bg-blue-500 hover:bg-blue-600';
  };

  const handleEditorChange = useCallback((value) => {
    setValue(value);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    const draftId = Date.now().toString();
    const fileName = `${draftId}.md`;
    const fileRef = ref(storage, fileName);

    // Prepare data to be submitted
    const dataToSubmit = {
      title,
      description,
      explanation,
      address: primaryWallet?.address,
      comments : [],
    };

    try {
       // Only include markdown content if it has been edited
      if (value !== content) {
        await uploadString(fileRef, value);
        dataToSubmit.fileName = fileName;
      }

      // Save metadata to Firestore
      await addDoc(collection(db, 'drafts'), {
        ...dataToSubmit,
        createdAt: new Date(),
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
      <form onSubmit={handleSubmit} className='relative py-1'>
        {!isLoggedIn && (
          <div class="bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500" role="alert">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <div class="ms-4">
                <h3 class="text-sm text-red-700 font-semibold">
                  You are not logged in.
                </h3>
                <div class="mt-1 text-sm text-black">
                  Your IP address will be publicly visible if you make any edits. If you <Link className='text-sm text-semibold' href={"#"}>log in</Link> or <Link className='text-sm text-semibold' href={"#"}>create an account</Link>, your edits will be attributed to a username, among other <Link className='text-sm' href={"#"} >benefits</Link>.
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <div className="flex-1 py-2">
            <div class="max-w-full py-2">
              <label htmlFor="title-label" class="block text-lg font-semibold mb-2 dark:text-white">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title-label" class="py-3 px-4 bg-gray-100 block w-full border-1 border-black-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Insert a title for your topic, or edit" required />
            </div>
            <div class="max-w-full py-2">
              <label htmlFor="description-label" class="block text-lg font-semibold mb-2 dark:text-white">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description-label" class="py-3 px-4 bg-gray-100 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Give a quick description/summary of your topic, or edit..." required></textarea>
            </div>
          </div>
          <div className="flex-1 py-2">
            <div className='max-w-full max-h-full py-2'>
              <label htmlFor="explanation-label" class="block text-lg font-semibold mb-2 dark:text-white">Explanation</label>
              <SimpleMDE
                value={explanation}
                onChange={setExplanation}
                placeholder='Provide your in-depth explanation for your topic, or edit...'
              />
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className='py-2'><span className='text-lg font-semibold'>Edit </span>(Optional)</div>
          <input
            id="enableEditor"
            type="checkbox"
            className="mr-2"
            checked={isEditable}
            onChange={(e) => setIsEditable(e.target.checked)}
          />
          <label htmlFor="enableEditor" className="text-gray-700">
            Enable Editing
          </label>
          <MarkdownEditor value={value} setValue={handleEditorChange} isEditable={isEditable} />
        </div>
        <div className='grid relative justify-items-end mt-3.5'>
          <button
            type="submit"
            className={`mt-4 px-4 py-2 text-white rounded ${getButtonClass()}`}
            disabled={isLoading}
          >
            {getButtonLabel()}
          </button>
        </div>
      </form>
    );
}
  
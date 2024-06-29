import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

async function getDraftContent(id) {
  // Fetch the draft content from the database or temporary storage
  // For simplicity, we'll simulate fetching the draft content
  if (id === '12345') { // Simulate a valid draft ID
    return {
      markdown: 'Simulated draft content for ' + id,
      title: 'Simulated Title',
      description: 'Simulated Description',
      tags: 'Simulated, Tags'
    };
  } else {
    return null;
  }
}

export default async function DraftPage({ params }) {
  const { id } = params;
  const draftContent = await getDraftContent(id);

  if (!draftContent) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Draft {id}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Title:</h2>
        <p>{draftContent.title}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Description:</h2>
        <p>{draftContent.description}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Tags:</h2>
        <p>{draftContent.tags}</p>
      </div>
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{draftContent.markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

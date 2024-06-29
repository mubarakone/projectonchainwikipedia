import { NextResponse } from 'next/server';

export async function POST(request) {
  const { markdown, title, description, explaination } = await request.json();

  // Save the markdown content to a database or temporary storage
  // For simplicity, we'll simulate saving and returning a draft ID
  const draftId = Date.now().toString(); // Simulate a draft ID

  return NextResponse.json({ success: true, draftId, title, description, explaination });
}

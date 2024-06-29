import { marked } from 'marked';

export function parseMarkdown(content) {
  const headings = [];

  const renderer = new marked.Renderer();

  renderer.heading = (text) => {
    const depth = text.depth;

    // Ensure depth is parsed correctly
    if (typeof depth !== 'number') {
      return ''; // Ignore invalid heading levels
    }

    const headingText = typeof text === 'string' ? text : text.text || '';
    const id = headingText.toLowerCase().replace(/[^\w]+/g, '-');

    // Apply custom styling only to level 2 headings
    if (depth === 2) {
      headings.push({ text: headingText, level: 2, id }); // Hard-code level as 2
      return `
        <div id="${id}" class="font-serif font-normal text-[2vw] mt-8 grid grid-cols-1">
          ${headingText}
          <hr class="w-full h-px bg-gray-300 mt-2">
        </div>`;
    } else {
      // Return other headings without custom styling
      return `<h${depth} id="${id}">${headingText}</h${depth}>`;
    }
  };

  const tokens = marked.lexer(content);
  const htmlContent = marked.parser(tokens, { renderer });
  return { htmlContent, headings, content };
}
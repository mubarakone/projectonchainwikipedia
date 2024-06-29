import { marked } from 'marked'

export function extractHeadings(markdown) {
  const headings = []

  const renderer = new marked.Renderer()
  renderer.heading = function (text, level, raw) {
    const id = raw.toLowerCase().replace(/[^\w]+/g, '-')
    headings.push({ text, level, id })
    return `<h${level} id="${id}">${text}</h${level}>`
  }

  const html = marked(markdown, { renderer })

  return { html, headings }
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { visit } from 'unist-util-visit'

const contentDirectory = path.join(process.cwd(), 'content')

export function getAllArticles() {
  const fileNames = fs.readdirSync(contentDirectory)
  return fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data
    }
  })
}

export async function getArticleData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const headings = []
  const processor = remark()
    .use(() => (tree) => {
      visit(tree, 'heading', (node) => {
        const text = node.children[0].value
        const id = text.toLowerCase().replace(/\s+/g, '-')
        headings.push({ text, id, level: node.depth })
        node.children = [{ type: 'text', value: text }]
        node.data = { hProperties: { id } }
      })
    })
    .use(html)

  const processedContent = await processor.process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    headings,
    ...matterResult.data
  }
}
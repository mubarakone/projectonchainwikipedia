import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MainContent from '../../components/MainContent'
import Footer from '../../components/Footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { parseMarkdown } from '../../utils/parseMarkdown'

async function fetchMarkdownContent(id) {
  const filePath = path.join(process.cwd(), 'articles', `${id}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContents)
  return parseMarkdown(content)
}

export default async function Article({ params }) {
  const { id } = params
  const { htmlContent, headings } = await fetchMarkdownContent(id)

  return (
    <div className="box-border h-full w-[90vw] mx-auto text-[1vw] font-sans">
      <div className="box-border flex">
        <Sidebar headings={headings} />
        <MainContent content={htmlContent} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'articles')
  const filenames = fs.readdirSync(articlesDir)

  return filenames.map(filename => ({
    id: filename.replace(/\.md$/, '')
  }))
}

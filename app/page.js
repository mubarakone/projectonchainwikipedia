import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { parseMarkdown } from '../utils/parseMarkdown'

async function fetchMarkdownContent() {
  const filePath = path.join(process.cwd(), 'articles', 'main-article.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContents)
  return parseMarkdown(content)
}

export default async function Home() {
  const { htmlContent, headings, content } = await fetchMarkdownContent()

  return (
    <div className="box-border h-full w-[90vw] mx-auto text-[1vw] font-sans">
      <Header />
      <div className="box-border flex">
        <Sidebar headings={headings} />
        <MainContent content={htmlContent} mdContent={content} />
      </div>
      <Footer />
    </div>
  )
}

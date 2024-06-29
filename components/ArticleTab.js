'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ArticleTab({ content }) {

  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    setHtmlContent(content)
  }, [content])

  return (
    <div>
      <div className="border border-gray-300 bg-gray-50 box-border h-fit w-[20vw] p-2 float-right mb-4 ml-4">
        <div className="text-center py-3">
          <h1 className="text-xl font-bold">Project Onchain Wikipedia</h1>
          <div className="flex items-center justify-center">
            {/* Placeholder for logo image */}
            <img id="logo" className="h-full w-full" src="/images/blue-wikipedia-logo.png" alt="Project Onchain Wikipedia logo" />
          </div>
          <p>Decentralized Knowledge Sharing Platform</p>
        </div>
        <div className="py-4">
          <div className="table w-full leading-8">
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Author</div>
              <div className="table-cell">
                <span>Mubarak Usmane</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Developer(s)</div>
              <div className="table-cell py-3 leading-6 ">
                <span>Project Onchain Wikipedia Organization</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Released</div>
              <div className="table-cell">
                <span>TBA</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4 leading-6 py-3">Latest Release Version</div>
              <div className="table-cell">
                <span>Proof Of Concept</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4 leading-6 py-3">Latest Release Date</div>
              <div className="table-cell">
                <span>TBA</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Written in</div>
              <div className="table-cell leading-6 py-3">
                <span>Next, Tailwind, Solidity, JavaScript</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4 leading-6 py-3">Operating System</div>
              <div className="table-cell">
                <span>Cross-platform</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Platform</div>
              <div className="table-cell">
                <span>Ethereum, Base (Layer 2)</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Size</div>
              <div className="table-cell">
                <span>TBA</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Language</div>
              <div className="table-cell">
                <span>Multilingual</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Genre</div>
              <div className="table-cell leading-6 py-3">
                <span>Decentralized Application (DApp)</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">License</div>
              <div className="table-cell">
                <span>Open-source (MIT License)</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell font-bold pr-4">Website</div>
              <div className="table-cell">
                <a href="https://projectonchainwikipedia.org" target="_blank" className="text-blue-500">projectonchainwikipedia.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto leading-9" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

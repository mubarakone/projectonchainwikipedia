export default function Sidebar({ headings }) {
  return (
    <aside className="box-border sticky top-20 mt-20 p-1 h-fit w-[20vw]">
      <h1 className="mb-4 border-b border-gray-200 leading-[2.5em]">Contents</h1>
      <ul id="shortcuts" className="mt-4 list-none pl-0">
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`} className="block py-2 text-blue-500 text-[1vw] hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

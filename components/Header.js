import Link from 'next/link'

export default function Header() {
  return (
    <header className="box-border flex items-center justify-between py-1.25">
      <div className="flex items-center justify-center gap-2.5">
        <div className="h-full w-[2vw]">
          <a href="#">
            <img id="triple-bar-icon" className="h-full w-full" src="/images/Tripple Bar Icon.jpg" alt="Triple Bar Icon" />
          </a>
        </div>
        <div className="h-full w-[13vw]">
          <Link href="https://en.wikipedia.org/wiki/Main_Page">
            <img id="wikipedia-logo-icon" className="h-full w-full" src="/images/Wikipedia Logo Icon.jpg" alt="Wikipedia Logo Icon" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="border border-gray-300 h-10 w-[40vw] flex">
          <img id="search-logo" className="h-auto w-auto m-2" src="/images/Search Logo.jpg" alt="Search Logo" />
          <input id="search-bar" className="border-none h-full w-4/5 text-[1vw] px-1" type="text" placeholder="Search Wikipedia" />
          <button id="search-btn" className="border-none border-l border-gray-300 h-full w-[6vw] font-bold cursor-pointer">Search</button>
        </div>
      </div>
      <div className="flex items-center justify-center mx-3">
        <div className="flex items-center justify-center">
          <Link href="https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=Main+Page">Create account</Link>
          <Link href="https://en.wikipedia.org/w/index.php?returnto=Main+Page&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in">Log in</Link>
          <a href="#">
            <img id="three-dots" className="h-full w-[1.5vw]" src="/images/Three Dots.jpg" alt="Three Dots" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default function Footer() {
  return (
    <footer className="mt-10 pt-2.5 pb-10 border-t border-gray-400 text-[0.5px] leading-6 text-gray-600">
      <p>&copy; 2024 Wikipedia Clone. All rights reserved.</p>
      <br />
      <p>
        ProjectOnchainWikipedia is available under the 
        <a href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License" className="text-blue-500 hover:underline"> Creative Commons Attribution-ShareAlike License 4.0</a>
        ; additional terms may apply. By using this site, you agree to the 
        <a href="https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use" className="text-blue-500 hover:underline"> Terms of Use </a> and 
        <a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy" className="text-blue-500 hover:underline"> Privacy Policy</a>. Wikipedia® is a registered trademark of the 
        <a href="https://wikimediafoundation.org/" className="text-blue-500 hover:underline"> Wikimedia Foundation, Inc.</a>, a non-profit organization.
      </p>
      <br />
      <div className="flex justify-between">
        <div className="flex gap-8">
          <a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy" className="text-blue-500 hover:underline">Privacy policy</a>
          <a href="https://en.wikipedia.org/wiki/Wikipedia:About" className="text-blue-500 hover:underline">About Wikipedia</a>
          <a href="https://en.wikipedia.org/wiki/Wikipedia:General_disclaimer" className="text-blue-500 hover:underline">Disclaimers</a>
          <a href="https://en.wikipedia.org/wiki/Wikipedia:Contact_us" className="text-blue-500 hover:underline">Contact Wikipedia</a>
          <a href="https://foundation.wikimedia.org/wiki/Policy:Universal_Code_of_Conduct" className="text-blue-500 hover:underline">Code of Conduct</a>
          <a href="https://developer.wikimedia.org" className="text-blue-500 hover:underline">Developers</a>
          <a href="https://stats.wikimedia.org/#/en.wikipedia.org" className="text-blue-500 hover:underline">Statistics</a>
          <a href="https://foundation.wikimedia.org/wiki/Policy:Cookie_statement" className="text-blue-500 hover:underline">Cookie statement</a>
          <a href="#" className="text-blue-500 hover:underline">Mobile view</a>
        </div>
        <div className="flex gap-2.5">
          <a href="https://wikimediafoundation.org">
            <img id="wikimedia" className="h-8 w-8" src="/images/Wikimedia.jpg" alt="Wikimedia" />
          </a>
          <a href="https://www.mediawiki.org/wiki/MediaWiki">
            <img id="mediawiki" className="h-8 w-8" src="/images/MediaWiki.jpg" alt="MediaWiki" />
          </a>
        </div>
      </div>
    </footer>
  )
}

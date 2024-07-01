export default function Footer() {
  return (
    <footer className="bottom">
      <p>&copy; 2024 Wikipedia Clone. All rights reserved.</p>
      <br></br>
      <p>
        ProjectOnchainWikipedia is available under the 
        <a href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License"> Creative Commons Attribution-ShareAlike License 4.0</a>
        ; additional terms may apply. By using this site, you agree to the 
        <a href="https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use"> Terms of Use </a> and 
        <a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy"> Privacy Policy</a>. Wikipedia® is a registered trademark of the 
        <a href="https://wikimediafoundation.org/"> Wikimedia Foundation, Inc.</a>, a non-profit organization.
      </p>
      <br></br>
      <div className="last-anchor-line">
        <div className="last-anchor">
          <a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy">Privacy policy</a>
          <a href="https://en.wikipedia.org/wiki/Wikipedia:About">About Wikipedia</a>
          <a href="https://en.wikipedia.org/wiki/Wikipedia:General_disclaimer">Disclaimers</a>
          <a href="https://en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact Wikipedia</a>
          <a href="https://foundation.wikimedia.org/wiki/Policy:Universal_Code_of_Conduct">Code of Conduct</a>
          <a href="https://developer.wikimedia.org">Developers</a>
          <a href="https://stats.wikimedia.org/#/en.wikipedia.org">Statistics</a>
          <a href="https://foundation.wikimedia.org/wiki/Policy:Cookie_statement">Cookie statement</a>
          <a href="#">Mobile view</a>
        </div>
        <div className="last-anchor-icons">
          <a href="https://wikimediafoundation.org">
            <img id="wikimedia" src="/images/Wikimedia.jpg" alt="Wikimedia" />
          </a>
          <a href="https://www.mediawiki.org/wiki/MediaWiki">
            <img id="mediawiki" src="/images/MediaWiki.jpg" alt="MediaWiki" />
          </a>
        </div>
      </div>
    </footer>
  )
}

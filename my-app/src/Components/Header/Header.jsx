import "./header.css";

const Header = () => {
  return (
    <div>
        <header className="">
            <h1 className="logo">QotSite</h1>
            <ul className="unordered">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>

            <button className="btn">Subscribe</button>
        </header>
        
    </div>
  )
}

export default Header;
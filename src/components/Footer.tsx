import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="rn-footer">
    <div className="rn-container">
      <div>
        <Link to="/" className="rn-nav-logo" aria-label="Request Network home">
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="rn-footer-bottom">
        <span className="rn-footer-legal">&copy; 2026 Request Network. All rights reserved.</span>
        <ul className="rn-footer-links">
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/cookies">Cookie Policy</Link></li>
        </ul>
        <div className="rn-footer-social">
          <a href="https://x.com/RequestNetwork" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6 1h2.2L9.8 6.8 16 15h-4.8l-3.5-4.6L3.8 15H1.6l5.3-6.1L1 1h4.9l3.2 4.2L12.6 1zm-.8 12.6h1.2L5.3 2.3H4L11.8 13.6z"/></svg>
          </a>
          <a href="https://discord.com/invite/FsVAR3ny3f" aria-label="Discord" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.5 3.2A12.5 12.5 0 0010.3 2a9 9 0 00-.4.8 11.6 11.6 0 00-3.8 0A9 9 0 005.7 2a12.5 12.5 0 00-3.2 1.2A14 14 0 00.1 12.4a12.7 12.7 0 004 2 9.3 9.3 0 00.8-1.3 8.1 8.1 0 01-1.3-.6l.3-.3a8.9 8.9 0 007.8 0l.3.3a8.1 8.1 0 01-1.3.6 9.3 9.3 0 00.8 1.3 12.7 12.7 0 004-2A14 14 0 0013.5 3.2zM5.7 10.5a1.5 1.5 0 01-1.4-1.6A1.5 1.5 0 015.7 7.3a1.5 1.5 0 011.4 1.6 1.5 1.5 0 01-1.4 1.6zm4.6 0a1.5 1.5 0 01-1.4-1.6 1.5 1.5 0 011.4-1.6 1.5 1.5 0 011.4 1.6 1.5 1.5 0 01-1.4 1.6z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/11247783/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.65c.032.682 0 7.225 0 7.225h2.401z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

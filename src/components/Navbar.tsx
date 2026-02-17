import { Link } from "react-router-dom";

const DOCS_URL = "https://docs.request.network/";
const CONTACT_URL = "https://2deywy.share-eu1.hsforms.com/2b92phs9LR_eJdeZoxzmoMA?utm_source=(direct)&utm_medium=(none)&landing_page=https%3A%2F%2Frequest.network%2F";

const Navbar = () => (
  <nav className="rn-nav" role="navigation" aria-label="Main navigation">
    <div className="rn-nav-inner">
      <Link to="/" className="rn-nav-logo" aria-label="Request Network home">
        <img src="/logo.svg" alt="" />
      </Link>
      <div className="rn-nav-actions">
        <a href={DOCS_URL} className="rn-btn rn-btn-ghost rn-btn-sm">Documentations</a>
        <a href={CONTACT_URL} className="rn-btn rn-btn-primary rn-btn-sm">Get in touch</a>
      </div>
    </div>
  </nav>
);

export default Navbar;

import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cookies = () => (
  <>
    <TopBanner />
    <Navbar />
    <div className="rn-legal-page">
      <div className="rn-container">
        <h1>Cookie Policy</h1>
        <p className="rn-legal-updated">Last updated: February 16, 2026</p>

        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.</p>

        <h2>2. How We Use Cookies</h2>
        <p>Request Network uses cookies and similar technologies for the following purposes:</p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
          <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Functional cookies:</strong> Enable enhanced functionality and personalization, such as remembering your preferences.</li>
        </ul>

        <h2>3. Types of Cookies We Use</h2>
        <p>We use the following categories of cookies:</p>
        <ul>
          <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser.</li>
          <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them.</li>
          <li><strong>First-party cookies:</strong> Set by Request Network directly.</li>
          <li><strong>Third-party cookies:</strong> Set by third-party services we use, such as analytics providers.</li>
        </ul>

        <h2>4. Third-Party Cookies</h2>
        <p>We may use third-party services that set their own cookies, including:</p>
        <ul>
          <li>Google Analytics — for website usage analysis</li>
          <li>HubSpot — for form handling and marketing automation</li>
        </ul>
        <p>These third parties have their own privacy policies governing their use of cookies.</p>

        <h2>5. Managing Cookies</h2>
        <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
        <ul>
          <li>View what cookies are stored and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        <p>Please note that blocking or deleting cookies may impact your experience on our website and limit certain functionalities.</p>

        <h2>6. Changes to This Policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with the revised date.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about our use of cookies, please reach out to us through our website or community channels.</p>
      </div>
    </div>
    <Footer />
  </>
);

export default Cookies;

import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => (
  <>
    <TopBanner />
    <Navbar />
    <div className="rn-legal-page">
      <div className="rn-container">
        <h1>Terms of Service</h1>
        <p className="rn-legal-updated">Last updated: February 16, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Request Network's website and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Services.</p>

        <h2>2. Description of Services</h2>
        <p>Request Network provides a decentralized payment infrastructure that enables users to accept, manage, and automate crypto payments across multiple blockchain networks. Our Services include APIs, dashboards, and related tools.</p>

        <h2>3. Eligibility</h2>
        <p>You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our Services. By using the Services, you represent and warrant that you meet these eligibility requirements.</p>

        <h2>4. Account Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to use the Services for any unlawful purposes, including but not limited to:</p>
        <ul>
          <li>Money laundering or terrorist financing</li>
          <li>Fraud or deception</li>
          <li>Violation of any applicable laws or regulations</li>
          <li>Infringement of intellectual property rights</li>
          <li>Distribution of malicious software</li>
        </ul>

        <h2>6. Non-Custodial Nature</h2>
        <p>Request Network is a non-custodial platform. We never hold, control, or have access to your funds. All payments are processed directly between wallets on the blockchain. You are solely responsible for the security of your private keys and wallet access.</p>

        <h2>7. Fees</h2>
        <p>Certain Services may be subject to fees, which will be disclosed to you before you incur them. Blockchain transaction fees (gas fees) are separate from our fees and are determined by the respective blockchain networks.</p>

        <h2>8. Intellectual Property</h2>
        <p>All content, trademarks, and intellectual property on the Services are owned by Request Network or its licensors. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>The Services are provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not guarantee the accuracy, completeness, or reliability of any content or services.</p>

        <h2>10. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Request Network shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services, including but not limited to loss of funds, data, or profits.</p>

        <h2>11. Modifications</h2>
        <p>We reserve the right to modify these Terms at any time. We will provide notice of material changes through our website or other communication channels. Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.</p>

        <h2>12. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Request Network is incorporated, without regard to conflict of law principles.</p>

        <h2>13. Contact</h2>
        <p>For questions about these Terms, please contact us through our website or community channels.</p>
      </div>
    </div>
    <Footer />
  </>
);

export default Terms;

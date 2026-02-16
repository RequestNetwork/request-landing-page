import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LegalNotice = () => (
  <>
    <TopBanner />
    <Navbar />
    <div className="rn-legal-page">
      <div className="rn-container">
                <h1>Legal Notice</h1>

        <p>Request Network is a Swiss Stiftung, whose headquarters is located at Baarerstrasse 82, ℅ Abafin Treuhand AG - 6302 Zug, Switzerland; registered under No. CHE-422.666.391, and represented by its Chairman of the Foundation Board, Mr. Lassuyt Christophe. 
        </p>
        <p>Request Network is the editor of this website and application.</p>
        <p><b>Director of the publication :</b></p>
        <p>Mr. Lassuyt Christophe, Chairman of the Foundation Board.</p>
        <p>You can contact us at hello@request.network.</p>
      </div>
    </div>
    <Footer />
  </>
);

export default LegalNotice;

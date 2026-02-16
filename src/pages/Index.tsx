import { useEffect } from "react";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CONTACT_URL = "https://2deywy.share-eu1.hsforms.com/2b92phs9LR_eJdeZoxzmoMA?utm_source=(direct)&utm_medium=(none)&landing_page=https%3A%2F%2Frequest.network%2F";
const DOCS_URL = "https://docs.request.network/?_gl=1*mar8iq*_gcl_au*NzYyMTM0MTgyLjE3NjUzNTY5ODQuNzIwNTQ4MjU5LjE3Njc3MDUzNzcuMTc2NzcwNTQ2Mg..*_ga*MTM5MDgyNjI0MC4xNzY1MzU2OTg0*_ga_F4XSSNMEN6*czE3NzA5ODI2MDgkbzkwJGcwJHQxNzcwOTgyNjA4JGo2MCRsMCRoMA..";

const trustLogos = [
  { src: "/images/allora.png", alt: "Allora logo" },
  { src: "/images/dial.png", alt: "Dial logo" },
  { src: "/images/0finance.png", alt: "0Finance logo" },
  { src: "/images/kreatorverse.png", alt: "Kreatorverse logo" },
  { src: "/images/kryptos.png", alt: "Kryptos logo" },
  { src: "/images/requestfinance.png", alt: "Request Finance logo" },
  { src: "/images/taq.png", alt: "TAQ logo" },
];

const chains = [
  { letter: "E", color: "#627EEA", name: "Ethereum" },
  { letter: "T", color: "#B23416", name: "Tron" },
  { letter: "P", color: "#8247E5", name: "Polygon" },
  { letter: "O", color: "#FF0420", name: "Optimism" },
  { letter: "A", color: "#28A0F0", name: "Arbitrum" },
  { letter: "Av", color: "#E84142", name: "Avalanche" },
  { letter: "B", color: "#1969FF", name: "Base" },
  { letter: "G", color: "#13AA52", name: "Gnosis" },
  { letter: "zK", color: "#7B3FE4", name: "zkSync" },
  { letter: "F", color: "#FF8C00", name: "Fantom" },
  { letter: "N", color: "#2BBDF7", name: "Near" },
];

const CheckIcon = ({ color = "#5DC086", bg = "rgba(93,192,134,0.12)" }: { color?: string; bg?: string }) => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="6" fill={bg} />
    <path d="M5.5 8l2 2 3-3.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".rn-nav") as HTMLElement | null;
      if (!nav) return;
      if (window.scrollY > 10) {
        nav.style.boxShadow = "0 1px 3px rgba(10,37,64,0.06)";
        nav.style.borderBottomColor = "rgba(10,37,64,0.06)";
      } else {
        nav.style.boxShadow = "none";
        nav.style.borderBottomColor = "rgba(10,37,64,0.04)";
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBanner />
      <Navbar />

      {/* Hero */}
      <section className="rn-hero">
        <div className="rn-hero-stripe" aria-hidden="true" />
        <div className="rn-container">
          <div className="rn-hero-grid">
            <div className="rn-hero-content section-animate">
              <h1>
                Accept crypto payments <span className="accent">without intermediaries</span>
              </h1>
              <p className="rn-hero-sub">
                Accept crypto, manage funds, automate payments, all in one platform, via API or dashboard.
              </p>
              <div className="rn-hero-ctas">
                <a href={CONTACT_URL} className="rn-btn rn-btn-primary">
                  Get in touch <ArrowIcon />
                </a>
                <a href={DOCS_URL} className="rn-btn rn-btn-secondary">Explore API docs</a>
              </div>
            </div>
            <div className="rn-hero-mockup section-animate" style={{ "--stagger": 1 } as React.CSSProperties}>
              <div className="rn-hero-float-card rn-hero-float-1" aria-hidden="true">
                <div className="rn-float-row">
                  <div className="rn-float-icon rn-float-icon-green">
                    <svg width="14" height="14" fill="none" viewBox="0 0 16 16"><path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div className="rn-float-text">Payment Received</div>
                    <div className="rn-float-subtext">5,000 USDC</div>
                  </div>
                </div>
              </div>
              <div className="rn-hero-float-card rn-hero-float-2" aria-hidden="true">
                <div className="rn-float-row">
                  <div className="rn-float-icon rn-float-icon-blue">
                    <svg width="14" height="14" fill="none" viewBox="0 0 16 16"><path d="M8 2v12M4 6l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div className="rn-float-text">Payment Request #1041 Sent</div>
                  </div>
                </div>
              </div>
              <div className="rn-hero-mockup-card">
                <div className="rn-mockup-header">
                  <div className="rn-mockup-header-left">
                    <div className="rn-mockup-avatar">A</div>
                    <div><div className="rn-mockup-title">Payment Request #1041</div></div>
                  </div>
                  <span className="rn-mockup-badge rn-mockup-badge-paid">Paid</span>
                </div>
                <div className="rn-mockup-row"><span className="rn-mockup-row-label">Network</span><span className="rn-mockup-row-value">Ethereum</span></div>
                <div className="rn-mockup-row"><span className="rn-mockup-row-label">Currency</span><span className="rn-mockup-row-value">USDC</span></div>
                <div className="rn-mockup-row"><span className="rn-mockup-row-label">Due Date</span><span className="rn-mockup-row-value">Feb 15, 2026</span></div>
                <div className="rn-mockup-row">
                  <span className="rn-mockup-row-label">Status</span>
                  <span className="rn-mockup-row-value">
                    <svg width="12" height="12" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#00D084" /><path d="M5.5 8l2 2 3-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Confirmed
                  </span>
                </div>
                <div className="rn-mockup-amount">
                  <span className="rn-mockup-amount-label">Total Amount</span>
                  <span>5,000 USDC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="rn-trust-band section-animate">
        <div className="rn-container">
          <div className="rn-trust-band-label">Trusted by</div>
          <div className="rn-trust-slider" aria-label="Partner logos">
            <div className="rn-trust-track">
              {trustLogos.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} />
              ))}
              {trustLogos.map((logo) => (
                <img key={logo.alt + "-dup"} src={logo.src} alt="" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="rn-stats-border-wrapper">
        <section className="rn-stats-section">
          <div className="rn-stats-grid">
            <div className="rn-stat-item"><dd className="rn-stat-value">26+</dd><dt className="rn-stat-label">Chains Supported</dt></div>
            <div className="rn-stat-item"><dd className="rn-stat-value">$1B+</dd><dt className="rn-stat-label">Volume Processed</dt></div>
            <div className="rn-stat-item"><dd className="rn-stat-value">2017</dd><dt className="rn-stat-label">Founded In</dt></div>
          </div>
        </section>
      </div>

      {/* Products */}
      <section className="rn-products-section" id="products">
        <div className="rn-container">
          <div className="rn-section-heading section-animate">
            <h2 style={{ fontSize: "48px" }}>Explore our products</h2>
          </div>
          <div className="rn-products-grid">
            {/* Invoicing */}
            <div className="rn-product-card rn-product-card-invoicing section-animate">
              <div className="rn-product-card-icon">
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" /><path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.15" /><path d="M15 16l1 1 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Accept crypto payments</h3>
              <p className="rn-product-card-desc">Let customers pay you in any crypto, on any chain. Payments are detected automatically and funds go straight to your wallet.</p>
              <div className="rn-product-card-mockup">
                <div className="rn-mini-mockup-row">
                  <div className="rn-mini-mockup-left"><div className="rn-mini-mockup-dot" style={{ background: "#5DC086" }} /><span className="rn-mini-mockup-text">REQ-1041</span></div>
                  <span className="rn-mini-mockup-amount">5,000 USDC</span>
                  <span className="rn-mini-mockup-status rn-status-paid">Paid</span>
                </div>
                <div className="rn-mini-mockup-row">
                  <div className="rn-mini-mockup-left"><div className="rn-mini-mockup-dot" style={{ background: "#FFB020" }} /><span className="rn-mini-mockup-text">REQ-1042</span></div>
                  <span className="rn-mini-mockup-amount">2,500 DAI</span>
                  <span className="rn-mini-mockup-status rn-status-pending">Pending</span>
                </div>
                <div className="rn-mini-mockup-row">
                  <div className="rn-mini-mockup-left"><div className="rn-mini-mockup-dot" style={{ background: "#FF4D4F" }} /><span className="rn-mini-mockup-text">REQ-1043</span></div>
                  <span className="rn-mini-mockup-amount">750 USDT</span>
                  <span className="rn-mini-mockup-status rn-status-overdue">Overdue</span>
                </div>
              </div>
              <ul className="rn-product-card-features">
                <li><CheckIcon /> Recipients get paid in preferred currency and chain.</li>
                <li><CheckIcon /> Payments across 26+ networks.</li>
                <li><CheckIcon /> No intermediaries. No custody.</li>
                <li><CheckIcon /> Accept crypto payments your way.</li>
              </ul>
              <a href={CONTACT_URL} className="rn-btn rn-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Get in touch <ArrowIcon />
              </a>
            </div>

            {/* Finance */}
            <div className="rn-product-card rn-product-card-finance section-animate">
              <div className="rn-product-card-icon">
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" /><path d="M6 12h3M6 16h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><rect x="14" y="10" width="5" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="currentColor" opacity="0.1" /><path d="M2 9h20" stroke="currentColor" strokeWidth="1.4" /></svg>
              </div>
              <h3>Manage crypto funds</h3>
              <p className="rn-product-card-desc">Send payouts and move funds out of crypto with confidence. Pay vendors, suppliers, or freelancers, and route funds to the wallets you choose.</p>
              <div className="rn-product-card-mockup">
                <div className="rn-mini-dashboard">
                  <div className="rn-mini-dash-card">
                    <div className="rn-mini-dash-label">Monthly Payouts</div>
                    <div className="rn-mini-dash-value">$284K</div>
                    <div className="rn-mini-dash-change rn-mini-dash-positive">+12.4%</div>
                  </div>
                  <div className="rn-mini-dash-card">
                    <div className="rn-mini-dash-label">Pending Payments</div>
                    <div className="rn-mini-dash-value">47</div>
                    <div className="rn-mini-dash-change" style={{ color: "var(--color-text-muted)" }}>3 approvals needed</div>
                  </div>
                  <div className="rn-mini-dash-chart" aria-hidden="true">
                    {[30,50,35,65,45,80,60,70,55,90,75,85].map((h, i) => (
                      <div key={i} className="rn-mini-bar" style={{ height: `${h}%`, background: i === 9 ? "var(--color-accent-secondary)" : `rgba(0,180,255,${0.2 + (h/300)})` }} />
                    ))}
                  </div>
                </div>
              </div>
              <ul className="rn-product-card-features">
                <li><CheckIcon color="#00B4FF" bg="rgba(0,180,255,0.12)" /> Send crypto to thousands in one click.</li>
                <li><CheckIcon color="#00B4FF" bg="rgba(0,180,255,0.12)" /> Convert crypto to fiat.</li>
                <li><CheckIcon color="#00B4FF" bg="rgba(0,180,255,0.12)" /> Shared wallets with defined roles.</li>
                <li><CheckIcon color="#00B4FF" bg="rgba(0,180,255,0.12)" /> Total oversight of your crypto funds.</li>
              </ul>
              <a href={CONTACT_URL} className="rn-btn" style={{ width: "100%", justifyContent: "center", background: "var(--color-accent-secondary)", color: "white", border: "none" }}>
                Get in touch <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="rn-integrations-section section-animate">
        <div className="rn-container">
          <div className="rn-section-heading">
            <h2 style={{ fontSize: "48px" }}>Deployed on 25+ blockchains</h2>
          </div>
          <div className="rn-chains-grid">
            {chains.map((c) => (
              <span key={c.name} className="rn-chain-chip">
                <span className="rn-chain-icon" style={{ background: c.color }}>{c.letter}</span> {c.name}
              </span>
            ))}
            <span className="rn-chain-chip" style={{ background: "rgba(93,192,134,0.06)", borderColor: "rgba(93,192,134,0.15)", color: "var(--color-accent-primary-600)", fontWeight: 600 }}>
              + 15 more networks
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="rn-features-section" id="features">
        <div className="rn-container">
          <div className="rn-section-heading section-animate">
            <h2 style={{ fontSize: "48px" }}>The smartest way to accept crypto payments</h2>
          </div>
          <div className="rn-features-grid">
            <div className="rn-feature-card section-animate">
              <div className="rn-feature-icon rn-feature-icon-green">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M4 10c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>One integration. <br /> Every major chain.</h3>
              <p>Accept crypto payments across all major blockchains.</p>
            </div>
            <div className="rn-feature-card section-animate">
              <div className="rn-feature-icon rn-feature-icon-blue">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="5" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M3 9h14" stroke="currentColor" strokeWidth="1.4" /><circle cx="7" cy="12.5" r="1.5" fill="currentColor" opacity="0.3" /></svg>
              </div>
              <h3>The lowest fees on the market.</h3>
              <p>No hidden costs.</p>
            </div>
            <div className="rn-feature-card section-animate">
              <div className="rn-feature-icon rn-feature-icon-purple">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2v4M10 14v4M18 10h-4M6 10H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" /></svg>
              </div>
              <h3>No custody. <br />Full control.</h3>
              <p>Payments go directly to your wallet. We never hold your funds.</p>
            </div>
            <div className="rn-feature-card section-animate">
              <div className="rn-feature-icon rn-feature-icon-orange">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Real-time payment detection.</h3>
              <p>Instantly know when payments arrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rn-cta-section">
        <div className="rn-container">
          <div className="rn-cta-box">
            <div className="rn-cta-content">
              <h2 className="rn-cta-title">Speak to us to find the best solution for you.</h2>
              <div className="rn-cta-buttons">
                <a href={CONTACT_URL} className="rn-btn rn-btn-gradient">
                  Get in touch <ArrowIcon />
                </a>
                <a href={DOCS_URL} className="rn-btn-outline-light">Explore API Docs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;

import { BUSINESS } from "../config/business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="zn-footer">
        <div className="zn-footer-wrap">
          <div className="zn-footer-grid">
            <div className="zn-footer-brand">
              <div className="zn-footer-head">
                <div className="zn-footer-logo">Z</div>
                <div>
                  <h3>{BUSINESS.name}</h3>
                  <span>{BUSINESS.tagline}</span>
                </div>
              </div>

              <p>Experience premium wellness therapies, luxury spa treatments, body scrubs and relaxing massage services in Whitefield, Bengaluru.</p>

              <div className="zn-footer-social">
                <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href={BUSINESS.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                  <XIcon />
                </a>
                <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YouTubeIcon />
                </a>
              </div>
            </div>

            <div className="zn-footer-col">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#therapies">Therapies</a>
              <a href="#scrubs">Scrubs</a>
              <a href="#membership">Membership</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="zn-footer-col">
              <h4>Our Therapies</h4>
              <a href="#swedish-therapy">Swedish Therapy</a>
              <a href="#deep-tissue-therapy">Deep Tissue</a>
              <a href="#hot-stone-therapy">Hot Stone</a>
              <a href="#aroma-therapy">Aromatherapy</a>
              <a href="#thai-therapy">Thai Massage</a>
              <a href="#couple-massage-therapy">Couple Massage</a>
            </div>

            <div className="zn-footer-col zn-contact-col">
              <h4>Contact Info</h4>
              <div className="zn-contact-row">
                <LocationIcon />
                <p>{BUSINESS.address}</p>
              </div>
              <div className="zn-contact-row">
                <PhoneIcon />
                <a href={`tel:${BUSINESS.phone}`}>+91 {BUSINESS.phone}</a>
              </div>
              <div className="zn-contact-row">
                <ClockIcon />
                <p>{BUSINESS.openingHours}</p>
              </div>
            </div>
          </div>

          <div className="zn-footer-bottom">
            <p>
              © {year} {BUSINESS.name}. All Rights Reserved.
            </p>
            <p>
              Designed & Developed by <strong>BR30 Web Services</strong>
            </p>
          </div>
        </div>
      </footer>

      <style>{`.zn-footer{padding:48px 7% 14px;background:#0d0417;border-top:1px solid rgba(212,175,55,.13);position:relative;overflow:hidden;}.zn-footer::before{content:"";position:absolute;left:-180px;bottom:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,.08),transparent 68%);}.zn-footer-wrap{max-width:1500px;margin:auto;position:relative;z-index:2;}.zn-footer-grid{display:grid;grid-template-columns:1.45fr 1fr 1fr 1.45fr;gap:55px;padding-bottom:30px;border-bottom:1px solid rgba(212,175,55,.16);}.zn-footer-head{display:flex;align-items:center;gap:14px;}.zn-footer-logo{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#d4af37,#ffe37a);color:#16091d;font-size:24px;font-weight:900;box-shadow:0 0 0 5px rgba(212,175,55,.08),0 12px 22px rgba(212,175,55,.18);}.zn-footer-head h3{margin:0;color:#fff;font-size:24px;font-weight:800;line-height:1.1;}.zn-footer-head span{display:block;margin-top:4px;color:#d4af37;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;}.zn-footer-brand p{max-width:360px;margin:22px 0 0;color:#c9bfd8;font-size:16px;line-height:1.75;}.zn-footer-social{display:flex;align-items:center;gap:14px;margin-top:22px;flex-wrap:wrap;}.zn-footer-social a{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(212,175,55,.08);border:1px solid rgba(212,175,55,.25);color:#d4af37;text-decoration:none;transition:.35s;}.zn-footer-social a svg{width:20px;height:20px;}.zn-footer-social a:hover{background:#d4af37;color:#111;transform:translateY(-5px);}.zn-footer-col h4{margin:0 0 18px;color:#d4af37;font-size:20px;font-weight:700;font-family:Georgia,serif;letter-spacing:.5px;}.zn-footer-col a,.zn-footer-col p{display:block;margin:0 0 13px;color:#c3bad2;font-size:16px;line-height:1.7;text-decoration:none;transition:.3s;}.zn-footer-col a:hover{color:#d4af37;transform:translateX(5px);}.zn-contact-row{display:grid;grid-template-columns:28px 1fr;gap:12px;margin-bottom:16px;align-items:flex-start;}.zn-contact-row svg{width:20px;height:20px;color:#d4af37;margin-top:2px;}.zn-contact-row p,.zn-contact-row a{margin:0;color:#c3bad2;font-size:16px;line-height:1.65;}.zn-footer-bottom{padding-top:12px;display:flex;align-items:center;justify-content:space-between;gap:18px;}.zn-footer-bottom p{margin:0;color:#9e95ad;font-size:13px;line-height:1.6;}.zn-footer-bottom strong{color:#d4af37;font-weight:800;}@media(max-width:1180px){.zn-footer-grid{grid-template-columns:repeat(2,1fr);gap:40px;}}@media(max-width:768px){.zn-footer{padding:42px 22px 14px;}.zn-footer-grid{grid-template-columns:1fr 1fr;gap:28px 18px;padding-bottom:22px;}.zn-footer-brand,.zn-contact-col{grid-column:1/-1;}.zn-footer-logo{width:46px;height:46px;font-size:22px;}.zn-footer-head h3{font-size:22px;}.zn-footer-head span{font-size:10px;}.zn-footer-brand p{margin-top:18px;font-size:15px;}.zn-footer-social{margin-top:18px;gap:12px;}.zn-footer-social a{width:42px;height:42px;}.zn-footer-social a svg{width:18px;height:18px;}.zn-footer-col h4{font-size:18px;margin-bottom:14px;}.zn-footer-col a,.zn-footer-col p,.zn-contact-row p,.zn-contact-row a{font-size:14px;margin-bottom:10px;}.zn-contact-row{grid-template-columns:22px 1fr;gap:9px;margin-bottom:12px;}.zn-contact-row svg{width:17px;height:17px;}.zn-footer-bottom{padding-top:10px;flex-direction:column;gap:3px;text-align:center;}.zn-footer-bottom p{font-size:12px;}}@media(max-width:480px){.zn-footer-grid{grid-template-columns:1fr 1fr;gap:22px 14px;}.zn-footer-brand,.zn-contact-col{grid-column:1/-1;}.zn-footer-logo{width:44px;height:44px;font-size:20px;}.zn-footer-head h3{font-size:20px;}.zn-footer-col h4{font-size:17px;}.zn-footer-social a{width:40px;height:40px;}`}</style>
    </>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.28-.04-1.27-.12-2.4-.12-2.38 0-4 1.45-4 4.1v2.3H8.1V14h2.7v8h2.7z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 7.2s-.22-1.55-.9-2.24c-.86-.9-1.82-.9-2.26-.96C16.68 3.77 12 3.77 12 3.77s-4.68 0-7.84.23c-.44.06-1.4.06-2.26.96C1.22 5.65 1 7.2 1 7.2S.77 9.03.77 10.86v1.72C.77 14.4 1 16.24 1 16.24s.22 1.55.9 2.24c.86.9 1.99.87 2.49.97 1.8.17 7.61.22 7.61.22s4.69 0 7.85-.24c.44-.05 1.4-.05 2.26-.95.67-.69.9-2.24.9-2.24s.22-1.83.22-3.66v-1.72C23.23 9.03 23 7.2 23 7.2zM9.9 14.9V8.55l6.02 3.19L9.9 14.9z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.78L23.2 22h-6.25l-4.9-6.4L6.45 22H3.33l7.28-8.32L2.93 2h6.4l4.42 5.85L18.9 2zm-1.1 17.85h1.72L8.39 4.03H6.55l11.25 15.82z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9 10.72a16 16 0 0 0 4.28 4.28l1.29-1.28a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

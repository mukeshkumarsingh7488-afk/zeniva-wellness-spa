import { BUSINESS } from "../config/business";

const highlights = [
  {
    title: "Professional Therapists",
    text: "Experienced wellness professionals focused on comfort, relaxation, and care.",
  },
  {
    title: "Hygienic Environment",
    text: "Clean, calm, and well-maintained rooms designed for a premium spa experience.",
  },
  {
    title: "Easy Appointment",
    text: "Quick booking through WhatsApp and phone call support.",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="zn-section zn-about">
        <div className="zn-section-head">
          <p>About Us</p>
          <h2>Wellness, Comfort & Luxury in One Place</h2>
          <span />
        </div>

        <div className="zn-about-grid">
          <div className="zn-about-image">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80" alt={BUSINESS.name} />
            <div className="zn-rating-card">
              <strong>{BUSINESS.rating}★</strong>
              <p>{BUSINESS.totalReviews} Google Reviews</p>
            </div>
          </div>

          <div className="zn-about-content">
            <p className="zn-eyebrow">Located in {BUSINESS.locationShort}</p>

            <h3>Your personal space for relaxation and rejuvenation</h3>

            <p>{BUSINESS.name} offers premium wellness therapies, relaxing massage services, luxury body scrubs, and curated wellness packages for customers looking for peace, comfort, and complete refreshment.</p>

            <p>Whether you want to reduce stress, refresh your body, or enjoy a peaceful wellness session, our spa experience is designed to help you feel relaxed and renewed.</p>

            <div className="zn-highlight-list">
              {highlights.map((item) => (
                <div className="zn-highlight-card" key={item.title}>
                  <div className="zn-check">✓</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="zn-about-address">
              <strong>Visit Us</strong>
              <p>{BUSINESS.address}</p>
            </div>
          </div>
        </div>
      </section>
      <style>{`
.zn-about{padding:110px 7%;background:linear-gradient(180deg,#12081c 0%,#1a0d28 100%);position:relative;overflow:hidden;}.zn-section-head{text-align:center;margin-bottom:70px;}.zn-section-head p{color:#d4af37;text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:700;}.zn-section-head h2{margin-top:18px;color:#fff;font-size:48px;line-height:1.2;font-weight:700;}.zn-section-head span{display:block;width:90px;height:4px;background:#d4af37;border-radius:999px;margin:22px auto 0;}.zn-about-grid{display:grid;grid-template-columns:520px 1fr;gap:80px;align-items:center;}.zn-about-image{position:relative;}.zn-about-image img{width:100%;height:650px;object-fit:cover;border-radius:28px;display:block;box-shadow:0 30px 60px rgba(0,0,0,.45);}.zn-rating-card{position:absolute;left:30px;bottom:30px;padding:18px 24px;border-radius:22px;background:rgba(255,255,255,.12);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.12);}.zn-rating-card strong{display:block;color:#d4af37;font-size:36px;font-weight:700;}.zn-rating-card p{margin-top:8px;color:#fff;font-size:14px;}.zn-eyebrow{color:#d4af37;text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:700;}.zn-about-content h3{margin:18px 0 28px;color:#fff;font-size:48px;line-height:1.2;font-weight:700;}.zn-about-content>p{margin-bottom:20px;color:#c8bfd7;font-size:17px;line-height:1.9;}.zn-highlight-list{display:grid;gap:18px;margin-top:40px;}.zn-highlight-card{display:flex;gap:18px;padding:22px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);transition:.35s;}.zn-highlight-card:hover{transform:translateY(-6px);border-color:#d4af37;background:rgba(255,255,255,.08);}.zn-check{width:52px;height:52px;border-radius:50%;background:#d4af37;color:#111;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;flex-shrink:0;}.zn-highlight-card h4{margin-bottom:8px;color:#fff;font-size:20px;}.zn-highlight-card p{color:#bfb6cf;font-size:15px;line-height:1.7;}.zn-about-address{margin-top:40px;padding:28px;border-radius:24px;background:linear-gradient(135deg,#2b173c,#1c1129);border:1px solid rgba(212,175,55,.25);}.zn-about-address strong{display:block;margin-bottom:12px;color:#d4af37;font-size:18px;}.zn-about-address p{color:#d9d1e6;line-height:1.8;}@media(max-width:1100px){.zn-about-grid{grid-template-columns:1fr;gap:50px;}.zn-about-image img{height:520px;}}@media(max-width:768px){.zn-about{padding:80px 22px;}.zn-section-head{margin-bottom:45px;}.zn-section-head h2{font-size:34px;}.zn-about-content h3{font-size:32px;}.zn-about-image img{height:420px;}.zn-rating-card{left:18px;right:18px;bottom:18px;}.zn-highlight-card{padding:18px;}}@media(max-width:480px){.zn-about-image img{height:340px;}.zn-about-content h3{font-size:28px;}.zn-section-head h2{font-size:28px;}.zn-check{width:44px;height:44px;font-size:18px;}}
`}</style>
    </>
  );
}

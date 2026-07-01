import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";

export default function Hero() {
  return (
    <>
      <section id="home" className="zn-hero">
        <div className="zn-hero-bg" />
        <div className="zn-hero-glow zn-glow-one" />
        <div className="zn-hero-glow zn-glow-two" />

        <div className="zn-hero-content">
          <p className="zn-eyebrow">{BUSINESS.category}</p>

          <h1>{BUSINESS.name}</h1>

          <div className="zn-hero-divider">
            <span />
            <p>{BUSINESS.tagline}</p>
            <span />
          </div>

          <p className="zn-hero-text">Premium spa and wellness experience in {BUSINESS.locationShort}. Enjoy relaxing therapies, luxury body scrubs, wellness packages, and easy appointment booking.</p>

          <div className="zn-hero-actions">
            <a href={whatsappBookingLink()} target="_blank" rel="noreferrer" className="zn-primary-btn">
              Book on WhatsApp
            </a>

            <a href={callLink} className="zn-outline-btn">
              Call Now
            </a>
          </div>

          <div className="zn-hero-stats">
            <div>
              <strong>{BUSINESS.rating}★</strong>
              <span>Google Rating</span>
            </div>

            <div>
              <strong>{BUSINESS.totalReviews}</strong>
              <span>Customer Reviews</span>
            </div>

            <div>
              <strong>7 Days</strong>
              <span>Open Weekly</span>
            </div>
          </div>
        </div>
      </section>
      <style>{`
.zn-hero{min-height:100vh;padding:140px 7% 80px;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;background:#0d0615;box-sizing:border-box;}.zn-hero *{box-sizing:border-box;}.zn-hero-bg{position:absolute;inset:0;background:linear-gradient(rgba(13,6,21,.68),rgba(13,6,21,.9)),url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;transform:scale(1.04);}.zn-hero-glow{position:absolute;width:360px;height:360px;border-radius:50%;filter:blur(80px);opacity:.32;pointer-events:none;}.zn-glow-one{top:12%;left:-90px;background:#d4af37;}.zn-glow-two{right:-110px;bottom:8%;background:#8b5cf6;}.zn-hero-content{position:relative;z-index:2;width:100%;max-width:1050px;margin:auto;animation:znHeroFade .9s ease both;}.zn-eyebrow{display:inline-block;margin-bottom:22px;color:#d4af37;font-size:14px;font-weight:800;letter-spacing:3px;text-transform:uppercase;}.zn-hero h1{margin:0;color:#fff;font-size:clamp(46px,8vw,104px);line-height:1.04;font-weight:800;letter-spacing:3px;text-transform:uppercase;text-shadow:0 20px 60px rgba(0,0,0,.55);}.zn-hero-divider{display:flex;align-items:center;justify-content:center;gap:22px;margin:24px 0 30px;}.zn-hero-divider span{width:100px;height:2px;background:linear-gradient(90deg,transparent,#d4af37,transparent);}.zn-hero-divider p{margin:0;color:#f5d76e;font-size:22px;font-weight:600;letter-spacing:2px;}.zn-hero-text{max-width:820px;margin:0 auto 38px;color:#e6ddec;font-size:19px;line-height:1.9;}.zn-hero-actions{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;margin-bottom:50px;}.zn-primary-btn,.zn-outline-btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 30px;border-radius:999px;font-size:16px;font-weight:800;text-decoration:none;transition:.35s;box-sizing:border-box;}.zn-primary-btn{background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;box-shadow:0 18px 35px rgba(212,175,55,.25);}.zn-primary-btn:hover{transform:translateY(-4px);box-shadow:0 25px 45px rgba(212,175,55,.35);}.zn-outline-btn{border:1px solid rgba(212,175,55,.7);color:#fff;background:rgba(255,255,255,.06);backdrop-filter:blur(12px);}.zn-outline-btn:hover{transform:translateY(-4px);background:#d4af37;color:#111;}.zn-hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:780px;margin:auto;}.zn-hero-stats div{padding:20px;border-radius:22px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(16px);}.zn-hero-stats strong{display:block;color:#d4af37;font-size:30px;font-weight:900;}.zn-hero-stats span{display:block;margin-top:6px;color:#d9d0e6;font-size:14px;}@keyframes znHeroFade{from{opacity:0;transform:translateY(35px);}to{opacity:1;transform:translateY(0);}}@media(max-width:768px){.zn-hero{min-height:auto;padding:150px 22px 70px;align-items:flex-start;}.zn-hero-content{max-width:100%;}.zn-hero h1{font-size:44px;letter-spacing:1px;line-height:1.08;}.zn-hero-divider{gap:12px;margin:20px 0 26px;}.zn-hero-divider span{width:45px;}.zn-hero-divider p{font-size:17px;line-height:1.35;}.zn-hero-text{font-size:16px;line-height:1.8;margin-bottom:34px;}.zn-hero-actions{display:flex;flex-direction:column;align-items:center;gap:16px;margin-bottom:34px;width:100%;}.zn-primary-btn,.zn-outline-btn{width:min(100%,360px);min-height:48px;padding:0 22px;font-size:15px;}.zn-hero-stats{grid-template-columns:1fr;gap:14px;width:100%;max-width:360px;}.zn-hero-stats div{width:100%;padding:18px 16px;}.zn-glow-two{right:-180px;bottom:4%;}}@media(max-width:480px){.zn-hero{padding:142px 18px 58px;}.zn-hero h1{font-size:37px;letter-spacing:.5px;}.zn-eyebrow{font-size:12px;letter-spacing:2px;margin-bottom:18px;max-width:260px;line-height:1.5;}.zn-hero-divider p{font-size:17px;max-width:230px;}.zn-hero-text{font-size:15px;line-height:1.75;margin-bottom:30px;}.zn-primary-btn,.zn-outline-btn{width:calc(100% - 24px);max-width:320px;min-height:46px;font-size:14px;margin:0 auto;}.zn-hero-stats{max-width:320px;}.zn-hero-stats strong{font-size:26px;}.zn-hero-stats span{font-size:13px;}}@media(max-width:390px){.zn-hero h1{font-size:34px;}.zn-primary-btn,.zn-outline-btn,.zn-hero-stats{max-width:300px;}}
`}</style>
    </>
  );
}

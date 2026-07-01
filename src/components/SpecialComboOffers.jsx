import { whatsappBookingLink } from "../config/business";

const comboOffers = [
  {
    title: "Ultimate Rejuvenation",
    description: "Complete spa experience with massage, scrub, and aromatherapy",
    duration: "2.5 Hours",
    price: "₹5,000",
    includes: ["Full Body Massage", "Body Scrub", "Face Therapy", "Aromatherapy"],
  },
  {
    title: "Tranquil Essence Fusion",
    description: "Perfect blend of relaxation and rejuvenation therapies",
    duration: "90 Minutes",
    price: "₹5,000",
    includes: ["Swedish Massage", "Hot Stones", "Herbal Steam", "Foot Therapy"],
  },
];

export default function SpecialComboOffers() {
  return (
    <>
      <section id="combo-offers" className="zn-combo-section">
        <div className="zn-combo-head">
          <p className="zn-combo-tag">Premium Packages</p>
          <h2>Special Combo Offers</h2>
          <span />
          <p className="zn-combo-subtitle">Experience multiple therapies in one luxurious session</p>
        </div>

        <div className="zn-combo-grid">
          {comboOffers.map((item) => (
            <article className="zn-combo-card" key={item.title}>
              <div className="zn-offer-badge">✣ Special Offer</div>

              <h3>{item.title}</h3>
              <p className="zn-combo-desc">{item.description}</p>

              <div className="zn-combo-meta">
                <span>◷ {item.duration}</span>
                <i />
                <strong>{item.price}</strong>
              </div>

              <div className="zn-includes-box">
                <h4>Includes:</h4>
                <ul>
                  {item.includes.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <a href={whatsappBookingLink(item.title)} target="_blank" rel="noreferrer" className="zn-combo-btn">
                Book This Package
              </a>
            </article>
          ))}
        </div>
      </section>

      <style>{`
.zn-combo-section{padding:105px 7%;background:#1b0a31;position:relative;overflow:hidden;}.zn-combo-head{text-align:center;margin-bottom:70px;}.zn-combo-tag{margin:0 0 18px!important;color:#d4af37!important;font-family:Georgia,"Times New Roman",serif!important;font-size:14px!important;font-weight:700!important;line-height:1!important;letter-spacing:5px!important;text-transform:uppercase!important;}.zn-combo-head h2{margin:0;color:#fff;font-size:58px;line-height:1.05;font-weight:700;font-family:Georgia,"Times New Roman",serif;}.zn-combo-head span{display:block;width:120px;height:5px;margin:24px auto;border-radius:999px;background:#d4af37;}.zn-combo-subtitle{margin:0!important;color:#d7cce6!important;font-family:Inter,Arial,sans-serif!important;font-size:21px!important;font-weight:400!important;line-height:1.7!important;letter-spacing:0!important;text-transform:none!important;}.zn-combo-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:30px;max-width:1220px;margin:auto;}.zn-combo-card{position:relative;padding:70px 38px 38px;border-radius:18px;background:#170528;border:1px solid rgba(212,175,55,.32);box-shadow:0 20px 50px rgba(0,0,0,.22);}.zn-offer-badge{position:absolute;top:-20px;left:38px;display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 24px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-family:Inter,Arial,sans-serif;font-size:16px;font-weight:800;}.zn-combo-card h3{margin:0 0 22px;color:#d4af37;font-size:34px;line-height:1.2;font-weight:500;font-family:Georgia,"Times New Roman",serif;text-transform:uppercase;font-variant:small-caps;}.zn-combo-desc{margin:0 0 30px;color:#d5cbe0;font-family:Inter,Arial,sans-serif;font-size:19px;line-height:1.55;font-weight:500;}.zn-combo-meta{display:flex;align-items:center;gap:20px;margin-bottom:32px;color:#e3d9ec;font-family:Inter,Arial,sans-serif;}.zn-combo-meta span{font-size:19px;font-weight:600;}.zn-combo-meta i{width:1px;height:26px;background:rgba(212,175,55,.35);}.zn-combo-meta strong{color:#d4af37;font-family:Inter,Arial,sans-serif;font-size:30px;font-weight:800;line-height:1;font-variant-numeric:lining-nums tabular-nums;white-space:nowrap;}.zn-includes-box{padding:22px 20px;border-radius:10px;background:rgba(255,255,255,.055);margin-bottom:30px;}.zn-includes-box h4{margin:0 0 15px;color:#fff;font-family:Inter,Arial,sans-serif;font-size:20px;font-weight:800;}.zn-includes-box ul{list-style:none;margin:0;padding:0;display:grid;gap:12px;}.zn-includes-box li{position:relative;padding-left:17px;color:#d2c8dc;font-family:Inter,Arial,sans-serif;font-size:17px;font-weight:500;}.zn-includes-box li::before{content:"";position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:50%;background:#d4af37;}.zn-combo-btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:54px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;text-decoration:none;font-family:Inter,Arial,sans-serif;font-size:16px;font-weight:800;transition:.35s;}.zn-combo-btn:hover{transform:translateY(-4px);box-shadow:0 18px 36px rgba(212,175,55,.28);}@media(max-width:992px){.zn-combo-grid{grid-template-columns:1fr;gap:34px;}.zn-combo-head h2{font-size:44px;}.zn-combo-subtitle{font-size:18px!important;}}@media(max-width:768px){.zn-combo-section{padding:80px 22px;}.zn-combo-head{margin-bottom:52px;}.zn-combo-tag{font-size:12px!important;letter-spacing:4px!important;margin-bottom:14px!important;}.zn-combo-head h2{font-size:36px;}.zn-combo-subtitle{font-size:16px!important;}.zn-combo-card{padding:60px 24px 28px;border-radius:18px;}.zn-offer-badge{left:24px;top:-18px;min-height:36px;padding:0 18px;font-size:14px;}.zn-combo-card h3{font-size:28px;}.zn-combo-desc{font-size:16px;}.zn-combo-meta span{font-size:16px;}.zn-combo-meta strong{font-size:26px;}.zn-includes-box li{font-size:15px;}.zn-combo-btn{min-height:50px;font-size:15px;}}@media(max-width:480px){.zn-combo-head h2{font-size:31px;}.zn-combo-card h3{font-size:24px;}.zn-combo-meta{gap:14px;}.zn-combo-meta strong{font-size:24px;}.zn-combo-btn{min-height:48px;}}
`}</style>
    </>
  );
}

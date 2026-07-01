import { whatsappBookingLink } from "../config/business";

const friendsOffers = [
  { duration: "3 Hours", price: "₹4,000" },
  { duration: "4 Hours", price: "₹5,000" },
  { duration: "6 Hours", price: "₹7,000" },
];

const annualPlans = [
  { duration: "3 Hours", price: "₹5,000" },
  { duration: "7 Hours", price: "₹10,000", popular: true },
  { duration: "13 Hours", price: "₹15,000" },
  { duration: "17 Hours", price: "₹20,000" },
];

export default function Membership() {
  return (
    <>
      <section id="membership" className="zn-section zn-membership">
        <div className="zn-section-head">
          <p>Wellness Packages</p>
          <h2>Membership Plans</h2>
          <span />
          <p className="zn-membership-subtitle">Choose the perfect plan for your wellness journey.</p>
        </div>

        <div className="zn-membership-grid">
          <PlanColumn title="Friends Offers" plans={friendsOffers} />
          <PlanColumn title="Annual Membership" plans={annualPlans} />
        </div>

        <div className="zn-membership-cta">
          <h3>Need help choosing the right plan?</h3>
          <p>Chat with us and our team will guide you with the best wellness package.</p>
          <a href={whatsappBookingLink("membership plan")} target="_blank" rel="noreferrer" className="zn-primary-btn">
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <style>{`.zn-membership{padding:110px 7%;background:linear-gradient(180deg,#1a0d28 0%,#12081c 100%);position:relative;overflow:hidden;}.zn-membership-subtitle{max-width:760px;margin:22px auto 0;color:#c9bfd8!important;font-family:Inter,Arial,sans-serif!important;font-size:20px!important;font-weight:400!important;line-height:1.7!important;letter-spacing:0!important;text-transform:none!important;text-align:center;}.zn-membership-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:35px;margin-top:60px;}.zn-plan-column{padding:35px;border-radius:28px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);box-shadow:0 20px 45px rgba(0,0,0,.3);transition:.35s;}.zn-plan-column:hover{transform:translateY(-8px);border-color:#d4af37;}.zn-plan-column h3{margin:0 0 30px;font-size:30px;font-weight:800;color:#fff;text-align:center;}.zn-plan-list{display:flex;flex-direction:column;gap:18px;}.zn-plan-card{position:relative;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:20px;padding:22px 28px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);transition:.35s;overflow:visible;}.zn-plan-card:hover{background:rgba(255,255,255,.08);transform:translateY(-4px);border-color:#d4af37;}.zn-plan-card.popular{border:2px solid #d4af37;background:linear-gradient(135deg,rgba(212,175,55,.16),rgba(255,255,255,.05));box-shadow:0 18px 40px rgba(212,175,55,.15);}.zn-popular-badge{position:absolute;top:-13px;right:20px;padding:6px 13px;border-radius:999px;background:#d4af37;color:#111;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.8px;line-height:1;box-shadow:0 10px 22px rgba(212,175,55,.22);z-index:2;}.zn-plan-card>div{display:flex;flex-direction:column;justify-content:center;}.zn-plan-card>div:last-child{align-items:flex-end;text-align:right;}.zn-plan-card small{display:block;margin:0 0 10px;color:#b8adc8;font-size:13px;font-weight:600;line-height:1;text-transform:uppercase;letter-spacing:1px;}.zn-plan-card strong{display:block;margin:0;color:#d4af37;font-family:Inter,Arial,sans-serif!important;font-size:26px;font-weight:900;line-height:1;letter-spacing:0;font-variant-numeric:lining-nums tabular-nums;white-space:nowrap;text-shadow:0 2px 12px rgba(212,175,55,.18);}.zn-membership-cta{margin-top:62px;padding:38px 34px;border-radius:30px;background:linear-gradient(135deg,#2a163d,#1a1027);border:1px solid rgba(212,175,55,.25);text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.3);}.zn-membership-cta h3{margin:0;color:#fff;font-size:38px;font-weight:800;}.zn-membership-cta p{max-width:720px;margin:14px auto 26px;color:#c7bdd7;font-size:16px;line-height:1.8;}.zn-primary-btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 24px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-size:14px;font-weight:900;text-decoration:none;transition:.35s;box-shadow:0 14px 30px rgba(212,175,55,.22);}.zn-primary-btn:hover{transform:translateY(-3px);box-shadow:0 18px 36px rgba(212,175,55,.32);}@media(max-width:992px){.zn-membership-grid{grid-template-columns:1fr;gap:28px;}.zn-membership-cta h3{font-size:32px;}}@media(max-width:768px){.zn-membership{padding:80px 22px;}.zn-membership-subtitle{font-size:16px!important;line-height:1.7!important;padding:0 12px;}.zn-plan-column{padding:24px;border-radius:24px;}.zn-plan-column h3{font-size:26px;margin-bottom:24px;}.zn-plan-card{grid-template-columns:1fr 1fr;padding:18px 20px;gap:18px;}.zn-plan-card small{font-size:11px;margin:0 0 8px;line-height:1;}.zn-plan-card strong{font-size:22px;line-height:1;font-family:Inter,Arial,sans-serif!important;color:#d4af37;}.zn-popular-badge{top:-11px;right:14px;font-size:9px;padding:5px 10px;}.zn-membership-cta{margin-top:46px;padding:28px 18px;border-radius:24px;}.zn-membership-cta h3{font-size:26px;}.zn-membership-cta p{font-size:14px;margin-bottom:22px;}.zn-primary-btn{min-height:42px;padding:0 20px;font-size:13px;}}@media(max-width:480px){.zn-plan-card{grid-template-columns:1fr 1fr;align-items:center;}.zn-plan-card>div:last-child{align-items:flex-end;text-align:right;}.zn-membership-cta h3{font-size:23px;line-height:1.25;}.zn-primary-btn{width:auto;max-width:100%;min-height:40px;padding:0 18px;}}`}</style>
    </>
  );
}

function PlanColumn({ title, plans }) {
  return (
    <div className="zn-plan-column">
      <h3>{title}</h3>

      <div className="zn-plan-list">
        {plans.map((plan) => (
          <div className={`zn-plan-card ${plan.popular ? "popular" : ""}`} key={plan.duration + plan.price}>
            {plan.popular && <span className="zn-popular-badge">Most Popular</span>}

            <div>
              <small>Duration</small>
              <strong>{plan.duration}</strong>
            </div>

            <div>
              <small>Price</small>
              <strong>{plan.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

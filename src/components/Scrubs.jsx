import { whatsappBookingLink } from "../config/business";

const scrubs = [
  {
    title: "Whitening Scrub",
    price: "₹2,000",
    image: "https://images.unsplash.com/photo-1758356345661-49276f7b3100?auto=format&fit=crop&w=900&q=80",
    description: "A premium brightening scrub designed to refresh your skin and add a natural glow.",
  },
  {
    title: "Aloe Vera Scrub",
    price: "₹2,000",
    image: "https://images.unsplash.com/photo-1613392083740-cbec15906d25?auto=format&fit=crop&w=900&q=80",
    description: "Soothing aloe vera extracts help hydrate, cool and soften your skin naturally.",
  },
  {
    title: "Wine Scrub",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1737091941364-9862c695dec1?auto=format&fit=crop&w=900&q=80",
    description: "Antioxidant-rich wine extracts help rejuvenate, tone and revive tired-looking skin.",
  },
  {
    title: "Chocolate Scrub",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    description: "A luxurious cocoa-based scrub that nourishes your skin with a soft smooth finish.",
  },
];

export default function Scrubs() {
  return (
    <>
      <section id="scrubs" className="zn-section zn-scrubs">
        <div className="zn-section-head">
          <p>Body Care</p>
          <h2>Luxury Body Scrubs</h2>
          <span />
          <p className="zn-scrub-subtitle">Exfoliate and revitalize your skin with our premium natural scrubs.</p>
        </div>

        <div className="zn-scrub-grid">
          {scrubs.map((item) => (
            <article className="zn-scrub-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="zn-therapy-footer">
                  <strong>{item.price}</strong>

                  <a href={whatsappBookingLink(item.title)} target="_blank" rel="noreferrer">
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
.zn-scrubs{padding:110px 7%;background:linear-gradient(180deg,#12081c 0%,#1b1028 100%);position:relative;overflow:hidden;}.zn-section-head{text-align:center;}.zn-scrub-subtitle{max-width:760px;margin:22px auto 0;color:#c9bfd8!important;font-size:20px!important;font-weight:400!important;line-height:1.7!important;text-align:center;letter-spacing:0!important;text-transform:none!important;font-family:Inter,Arial,sans-serif!important;}.zn-scrub-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:60px;}.zn-scrub-card{display:flex;flex-direction:column;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:26px;overflow:hidden;backdrop-filter:blur(16px);box-shadow:0 20px 45px rgba(0,0,0,.3);transition:.4s;}.zn-scrub-card:hover{transform:translateY(-10px);border-color:#d4af37;box-shadow:0 30px 55px rgba(212,175,55,.18);}.zn-scrub-card img{width:100%;height:260px;object-fit:cover;transition:transform .6s ease;}.zn-scrub-card:hover img{transform:scale(1.08);}.zn-scrub-card>div{padding:26px;display:flex;flex-direction:column;flex:1;}.zn-scrub-card h3{margin:0 0 14px;color:#fff;font-size:24px;font-weight:800;}.zn-scrub-card p{margin:0;color:#c9bfd8;font-size:15px;line-height:1.8;flex:1;}.zn-therapy-footer{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08);}.zn-therapy-footer strong{color:#d4af37;font-family:Inter,Arial,sans-serif;font-size:24px;font-weight:900;line-height:1;letter-spacing:0;font-variant-numeric:lining-nums tabular-nums;white-space:nowrap;}.zn-therapy-footer a{display:inline-flex;align-items:center;justify-content:center;height:46px;padding:0 22px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-size:14px;font-weight:800;text-decoration:none;transition:.35s;box-shadow:0 12px 25px rgba(212,175,55,.2);box-sizing:border-box;}.zn-therapy-footer a:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(212,175,55,.3);}.zn-scrubs::before{content:"";position:absolute;left:-180px;top:-180px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,.08),transparent 70%);}.zn-scrubs::after{content:"";position:absolute;right:-180px;bottom:-180px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,.08),transparent 70%);}@media(max-width:1200px){.zn-scrub-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.zn-scrubs{padding:80px 22px;}.zn-scrub-subtitle{font-size:16px!important;line-height:1.7!important;padding:0 12px;}.zn-scrub-grid{grid-template-columns:1fr;gap:22px;}.zn-scrub-card img{height:240px;}.zn-scrub-card>div{padding:22px;}.zn-scrub-card h3{font-size:22px;}.zn-therapy-footer{flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:18px;}.zn-therapy-footer strong{width:100%;font-size:22px;text-align:center;}.zn-therapy-footer a{display:flex;align-items:center;justify-content:center;width:calc(100% - 24px);height:50px;margin:0 auto;padding:0;box-sizing:border-box;}}@media(max-width:480px){.zn-scrub-card img{height:220px;}.zn-therapy-footer{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:18px;width:100%;}.zn-therapy-footer strong{display:block;width:100%;text-align:center;font-size:22px;}.zn-therapy-footer a{display:flex;align-items:center;justify-content:center;width:calc(100% - 24px);height:50px;margin:0 auto;padding:0;box-sizing:border-box;}}
`}</style>
    </>
  );
}

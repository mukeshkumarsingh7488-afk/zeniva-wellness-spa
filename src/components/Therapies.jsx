import { useEffect } from "react";
import { whatsappBookingLink } from "../config/business";

const therapies = [
  {
    id: "aroma-therapy",
    title: "Aroma Therapy",
    duration: "60 / 90 Minutes",
    price: "₹2,500 / ₹3,500",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80",
    description: "Relax your body and mind with calming essential oils and soothing massage techniques.",
  },
  {
    id: "swedish-therapy",
    title: "Swedish Therapy",
    duration: "60 / 90 Minutes",
    price: "₹2,500 / ₹3,500",
    image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=900&q=80",
    description: "A gentle full-body massage designed to improve circulation and relieve stress.",
  },
  {
    id: "balinese-therapy",
    title: "Balinese Therapy",
    duration: "60 / 90 Minutes",
    price: "₹3,000 / ₹4,000",
    image: "https://images.unsplash.com/photo-1677682692998-7db8c3245bc9?auto=format&fit=crop&w=900&q=80",
    description: "Traditional Indonesian therapy combining stretching, acupressure and aromatherapy.",
  },
  {
    id: "thai-therapy",
    title: "Thai Therapy",
    duration: "90 Minutes",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?auto=format&fit=crop&w=900&q=80",
    description: "Ancient body stretching therapy that improves flexibility and energy flow.",
  },
  {
    id: "lomi-lomi-therapy",
    title: "Lomi Lomi Therapy",
    duration: "60 / 90 Minutes",
    price: "₹2,500 / ₹3,500",
    image: "https://images.unsplash.com/photo-1767350510090-137a6ce252c0?auto=format&fit=crop&w=900&q=80",
    description: "Traditional Hawaiian massage with flowing hand movements for complete relaxation.",
  },
  {
    id: "deep-tissue-therapy",
    title: "Deep Tissue Therapy",
    duration: "60 / 90 Minutes",
    price: "₹3,000 / ₹4,000",
    image: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?auto=format&fit=crop&w=900&q=80",
    description: "Perfect for muscle stiffness, chronic pain and deep muscle recovery.",
  },
  {
    id: "hot-stone-therapy",
    title: "Hot Stone Therapy",
    duration: "60 / 90 Minutes",
    price: "₹4,000 / ₹5,000",
    image: "https://images.unsplash.com/photo-1617995815236-7f06f6e53180?auto=format&fit=crop&w=900&q=80",
    description: "Heated volcanic stones provide deep muscle relaxation and stress relief.",
  },
  {
    id: "potli-therapy",
    title: "Potli Therapy",
    duration: "60 / 90 Minutes",
    price: "₹4,000 / ₹5,000",
    image: "https://images.unsplash.com/photo-1611920629515-3f76f8c36b37?auto=format&fit=crop&w=900&q=80",
    description: "Warm herbal pouches infused with natural herbs for holistic wellness.",
  },
  {
    id: "zeniva-signature-therapy",
    title: "Zeniva Signature Therapy",
    duration: "60 / 90 Minutes",
    price: "₹5,000 / ₹6,000",
    image: "https://images.unsplash.com/photo-1591622777589-8d2679d24627?auto=format&fit=crop&w=900&q=80",
    description: "An exclusive premium therapy combining our most loved wellness techniques.",
  },
  {
    id: "couple-massage-therapy",
    title: "Couple Massage Therapy",
    duration: "60 Minutes",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1660735699008-b6e0492f6b49?auto=format&fit=crop&w=900&q=80",
    description: "Share a relaxing spa experience with your partner in a peaceful environment.",
  },
];

export default function Therapies() {
  useEffect(() => {
    const highlightCard = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;

      const card = document.getElementById(id);
      if (!card) return;

      card.classList.remove("zn-focus");
      void card.offsetWidth;
      card.classList.add("zn-focus");

      setTimeout(() => {
        card.classList.remove("zn-focus");
      }, 1800);
    };

    highlightCard();
    window.addEventListener("hashchange", highlightCard);

    return () => window.removeEventListener("hashchange", highlightCard);
  }, []);

  return (
    <>
      <section id="therapies" className="zn-section">
        <div className="zn-section-head">
          <p>Premium Services</p>
          <h2>Luxury Spa Therapies</h2>
          <span />
          <p className="zn-section-subtitle">Choose from our curated collection of world-class massage therapies.</p>
        </div>

        <div className="zn-therapy-grid">
          {therapies.map((item) => (
            <article id={item.id} className="zn-therapy-card" key={item.id}>
              <div className="zn-therapy-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="zn-duration">{item.duration}</div>
              </div>

              <div className="zn-therapy-body">
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
.zn-section{padding:110px 7%;background:linear-gradient(180deg,#12081c 0%,#1b1028 100%);position:relative;overflow:hidden;}.zn-section-head{text-align:center;}.zn-section-subtitle{max-width:760px;margin:22px auto 0;color:#c9bfd8!important;font-size:20px!important;font-weight:400!important;line-height:1.7!important;text-align:center;letter-spacing:0!important;text-transform:none!important;font-family:Inter,Arial,sans-serif!important;}.zn-therapy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:60px;}.zn-therapy-card{scroll-margin-top:110px;display:flex;flex-direction:column;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:26px;overflow:hidden;backdrop-filter:blur(16px);box-shadow:0 20px 45px rgba(0,0,0,.3);transition:.4s;}.zn-therapy-card:hover{transform:translateY(-10px);border-color:#d4af37;box-shadow:0 30px 60px rgba(212,175,55,.18);}.zn-therapy-card.zn-focus{animation:znCardFocus 1.8s ease;}.zn-therapy-card.zn-focus .zn-therapy-image img{transform:scale(1.08);}.zn-therapy-image{position:relative;overflow:hidden;}.zn-therapy-image img{width:100%;height:260px;object-fit:cover;display:block;transition:transform .7s ease;}.zn-therapy-card:hover .zn-therapy-image img{transform:scale(1.08);}.zn-duration{position:absolute;top:18px;left:18px;padding:8px 14px;border-radius:999px;background:rgba(13,6,21,.78);backdrop-filter:blur(12px);border:1px solid rgba(212,175,55,.3);color:#d4af37;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;}.zn-therapy-body{padding:26px;display:flex;flex-direction:column;flex:1;}.zn-therapy-body h3{margin:0 0 14px;color:#fff;font-size:24px;font-weight:800;line-height:1.3;}.zn-therapy-body p{margin:0;color:#c9bfd8;font-size:15px;line-height:1.8;flex:1;}.zn-therapy-footer{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08);}.zn-therapy-footer strong{color:#d4af37;font-family:Inter,Arial,sans-serif;font-size:22px;font-weight:900;line-height:1;letter-spacing:0;font-variant-numeric:lining-nums tabular-nums;white-space:nowrap;}.zn-therapy-footer a{display:inline-flex;align-items:center;justify-content:center;height:46px;padding:0 22px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-size:14px;font-weight:800;text-decoration:none;transition:.35s;box-shadow:0 12px 25px rgba(212,175,55,.22);white-space:nowrap;}.zn-therapy-footer a:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(212,175,55,.32);}.zn-section::before{content:"";position:absolute;left:-180px;top:-180px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,.08),transparent 70%);}.zn-section::after{content:"";position:absolute;right:-180px;bottom:-180px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,.08),transparent 70%);}@keyframes znCardFocus{0%{transform:translateY(0);border-color:rgba(255,255,255,.08);box-shadow:0 20px 45px rgba(0,0,0,.3);}45%{transform:translateY(-12px);border-color:#d4af37;box-shadow:0 0 0 2px rgba(212,175,55,.45),0 30px 70px rgba(212,175,55,.32);}100%{transform:translateY(0);border-color:rgba(255,255,255,.08);box-shadow:0 20px 45px rgba(0,0,0,.3);}}@media(max-width:1200px){.zn-therapy-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.zn-section{padding:80px 22px;}.zn-section-subtitle{font-size:16px!important;line-height:1.7!important;padding:0 12px;}.zn-therapy-grid{grid-template-columns:1fr;gap:22px;}.zn-therapy-card{scroll-margin-top:95px;}.zn-therapy-image img{height:240px;}.zn-therapy-body{padding:22px;}.zn-therapy-body h3{font-size:22px;}.zn-therapy-footer strong{font-size:20px;}}@media(max-width:480px){.zn-therapy-image img{height:220px;}.zn-therapy-footer{flex-direction:column;align-items:center;text-align:center;gap:18px;}.zn-therapy-footer strong{text-align:center;width:100%;}.zn-therapy-footer a{width:100%;}}
`}</style>
    </>
  );
}

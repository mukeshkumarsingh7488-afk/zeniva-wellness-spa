import { BUSINESS } from "../config/business";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Very relaxing experience. The ambience was peaceful and the therapist was professional.",
  },
  {
    name: "Rahul Verma",
    text: "Clean rooms, good service and smooth appointment experience. Recommended for wellness therapy.",
  },
  {
    name: "Ananya Reddy",
    text: "The spa session felt premium and refreshing. Perfect place to relax after a busy week.",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="zn-section zn-testimonials">
        <div className="zn-section-head">
          <p>Customer Love</p>
          <h2>{BUSINESS.rating}★ Rated Wellness Experience</h2>
          <span />
          <p className="zn-testimonial-subtitle">Hear what our valued clients have to say about their relaxing spa experience.</p>
        </div>

        <div className="zn-testimonial-grid">
          {testimonials.map((item) => (
            <article className="zn-testimonial-card" key={item.name}>
              <div className="zn-stars">★★★★★</div>
              <p>“{item.text}”</p>

              <div className="zn-client">
                <div>{item.name.charAt(0)}</div>
                <span>{item.name}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <style>{`.zn-testimonials{padding:110px 7%;background:linear-gradient(180deg,#1a0d28 0%,#12081c 100%);position:relative;overflow:hidden;}.zn-testimonials .zn-section-head>p:not(.zn-testimonial-subtitle){margin:0 0 18px;color:#d4af37!important;font-family:Georgia,"Times New Roman",serif!important;font-size:14px!important;font-weight:700!important;letter-spacing:4px!important;text-transform:uppercase!important;background:none!important;padding:0!important;border-radius:0!important;display:block;text-align:center;}.zn-testimonial-subtitle{max-width:760px;margin:22px auto 0;color:#c9bfd8!important;font-family:Inter,Arial,sans-serif!important;font-size:20px!important;font-weight:400!important;line-height:1.7!important;letter-spacing:0!important;text-transform:none!important;text-align:center;background:none!important;padding:0!important;border-radius:0!important;}.zn-testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:60px;}.zn-testimonial-card{position:relative;padding:34px;border-radius:26px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);box-shadow:0 20px 45px rgba(0,0,0,.3);transition:.4s;overflow:hidden;}.zn-testimonial-card::before{content:"❝";position:absolute;top:18px;right:22px;font-size:70px;color:rgba(212,175,55,.12);font-weight:700;line-height:1;}.zn-testimonial-card:hover{transform:translateY(-10px);border-color:#d4af37;box-shadow:0 30px 55px rgba(212,175,55,.18);}.zn-stars{margin-bottom:20px;color:#f5c542;font-size:22px;letter-spacing:4px;}.zn-testimonial-card p{margin:0;color:#d4cbdf;font-size:16px;line-height:1.9;}.zn-client{display:flex;align-items:center;gap:16px;margin-top:30px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08);}.zn-client div{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-size:22px;font-weight:800;box-shadow:0 12px 30px rgba(212,175,55,.25);}.zn-client span{color:#fff;font-size:18px;font-weight:700;}.zn-testimonials::before{content:"";position:absolute;left:-180px;top:-180px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,.08),transparent 70%);}.zn-testimonials::after{content:"";position:absolute;right:-180px;bottom:-180px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,.08),transparent 70%);}@media(max-width:1100px){.zn-testimonial-grid{grid-template-columns:repeat(2,1fr);}}@media(max-width:768px){.zn-testimonials{padding:80px 22px;}.zn-testimonials .zn-section-head>p:not(.zn-testimonial-subtitle){font-size:12px!important;letter-spacing:3px!important;margin-bottom:14px;}.zn-testimonial-subtitle{font-size:16px!important;line-height:1.7!important;padding:0 12px;}.zn-testimonial-grid{grid-template-columns:1fr;gap:22px;}.zn-testimonial-card{padding:26px;}.zn-client div{width:50px;height:50px;font-size:20px;}.zn-client span{font-size:17px;}}@media(max-width:480px){.zn-stars{font-size:18px;letter-spacing:2px;}.zn-testimonial-card p{font-size:15px;line-height:1.8;}.zn-client{gap:12px;}.zn-client div{width:46px;height:46px;font-size:18px;}}`}</style>
    </>
  );
}

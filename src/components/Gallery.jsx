const galleryImages = [
  "https://images.unsplash.com/photo-1761602866012-ae9f888255dc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1677682693087-711e24efaa69?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1591622777589-8d2679d24627?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1696841212541-449ca29397cc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1762636927320-373ce79cdb67?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1665824249476-a7951ab0aaaa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1611073692875-702830900b0d?auto=format&fit=crop&w=900&q=80",
];

export default function Gallery() {
  return (
    <>
      <section id="gallery" className="zn-section zn-gallery">
        <div className="zn-section-head">
          <p>Gallery</p>
          <h2>Inside Zeniva Wellness Spa</h2>
          <span />
          <p className="zn-gallery-subtitle">Step inside Zeniva Wellness Spa and experience luxury redefined.</p>
        </div>

        <div className="zn-gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="zn-gallery-item" key={image}>
              <img src={image} alt={`Zeniva Wellness Spa Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <style>{`.zn-gallery{padding:110px 7%;background:linear-gradient(180deg,#12081c 0%,#1b0f2b 100%);position:relative;overflow:hidden;}.zn-gallery-subtitle{max-width:760px;margin:22px auto 0;color:#c9bfd8!important;font-family:Inter,Arial,sans-serif!important;font-size:20px!important;font-weight:400!important;line-height:1.7!important;letter-spacing:0!important;text-transform:none!important;text-align:center;}.zn-gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:60px;}.zn-gallery-item{position:relative;border-radius:26px;overflow:hidden;cursor:pointer;background:#1b1128;border:1px solid rgba(255,255,255,.08);box-shadow:0 20px 45px rgba(0,0,0,.35);transition:.45s;}.zn-gallery-item:nth-child(1){grid-column:span 2;grid-row:span 2;}.zn-gallery-item:nth-child(5){grid-column:span 2;}.zn-gallery-item img{width:100%;height:100%;min-height:280px;display:block;object-fit:cover;transition:transform .7s ease,filter .4s ease;}.zn-gallery-item::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55),transparent 55%);opacity:0;transition:.4s;z-index:1;}.zn-gallery-item::after{content:"Luxury Spa";position:absolute;left:24px;bottom:22px;color:#fff;font-size:20px;font-weight:700;letter-spacing:1px;opacity:0;transform:translateY(20px);transition:.4s;z-index:2;}.zn-gallery-item:hover img{transform:scale(1.12);filter:brightness(.9);}.zn-gallery-item:hover::before,.zn-gallery-item:hover::after{opacity:1;transform:translateY(0);}.zn-gallery-item:hover{transform:translateY(-10px);border-color:#d4af37;box-shadow:0 25px 55px rgba(212,175,55,.18);}.zn-gallery::before{content:"";position:absolute;top:-180px;left:-180px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(212,175,55,.08),transparent 70%);}.zn-gallery::after{content:"";position:absolute;right:-180px;bottom:-180px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(140,80,255,.08),transparent 70%);}@media(max-width:1200px){.zn-gallery-grid{grid-template-columns:repeat(3,1fr);}.zn-gallery-item:nth-child(1),.zn-gallery-item:nth-child(5){grid-column:span 1;grid-row:span 1;}}@media(max-width:768px){.zn-gallery{padding:80px 22px;}.zn-gallery-subtitle{font-size:16px!important;line-height:1.7!important;padding:0 12px;}.zn-gallery-grid{grid-template-columns:repeat(2,1fr);gap:16px;}.zn-gallery-item img{min-height:220px;}.zn-gallery-item::after{font-size:16px;left:16px;bottom:16px;}}@media(max-width:480px){.zn-gallery-grid{grid-template-columns:1fr;}.zn-gallery-item img{min-height:260px;}.zn-gallery-item{border-radius:20px;}}`}</style>
    </>
  );
}

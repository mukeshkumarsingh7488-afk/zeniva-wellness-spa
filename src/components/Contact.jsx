import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";

export default function Contact() {
  return (
    <>
      <section id="contact" className="zn-section zn-contact">
        <div className="zn-section-head">
          <p>Contact Us</p>

          <h2>Book Your Wellness Experience</h2>

          <span />
          <p className="zn-contact-subtitle">Ready to begin your wellness journey? Contact us today.</p>
        </div>

        <div className="zn-contact-grid">
          {/* LEFT */}

          <div className="zn-contact-info">
            <div className="zn-contact-card">
              <h3>Visit Our Spa</h3>

              <p>{BUSINESS.address}</p>
            </div>

            <div className="zn-contact-card">
              <h3>Call Us</h3>

              <a href={callLink}>+91 {BUSINESS.phone}</a>
            </div>

            <div className="zn-contact-card">
              <h3>Opening Hours</h3>

              <p>{BUSINESS.openingHours}</p>
            </div>

            <div className="zn-contact-card">
              <iframe title={BUSINESS.name} src={BUSINESS.mapUrl} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* RIGHT */}

          <div className="zn-contact-form">
            <h3>Book Appointment</h3>

            <p>Fill your basic details and continue instantly on WhatsApp.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = new FormData(e.target);

                const name = form.get("name");
                const phone = form.get("phone");
                const service = form.get("service");
                const message = form.get("message");

                const text = `Hello ${BUSINESS.name}

Name : ${name}

Phone : ${phone}

Service : ${service}

Message : ${message}`;

                window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

                e.target.reset();
              }}>
              <input type="text" name="name" placeholder="Full Name" required />

              <input type="tel" name="phone" placeholder="Phone Number" required />

              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select Therapy
                </option>

                <option>Aroma Therapy</option>

                <option>Swedish Therapy</option>

                <option>Deep Tissue Therapy</option>

                <option>Thai Therapy</option>

                <option>Hot Stone Therapy</option>

                <option>Body Scrub</option>

                <option>Membership</option>
              </select>

              <textarea name="message" rows="5" placeholder="Additional Information (Optional)" />

              <button type="submit" className="zn-primary-btn">
                Continue on WhatsApp
              </button>
            </form>

            <a href={whatsappBookingLink()} target="_blank" rel="noreferrer" className="zn-contact-whatsapp">
              Chat Directly on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <style>{`.zn-contact{padding:110px 7%;background:linear-gradient(180deg,#1a0d28 0%,#12081c 100%);overflow:hidden;}.zn-contact *{box-sizing:border-box;}.zn-contact a{text-decoration:none;}.zn-contact-subtitle{max-width:760px;margin:22px auto 0;color:#c9bfd8!important;font-family:Inter,Arial,sans-serif!important;font-size:20px!important;font-weight:400!important;line-height:1.7!important;letter-spacing:0!important;text-transform:none!important;text-align:center;background:none!important;padding:0!important;border-radius:0!important;}.zn-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}.zn-contact-info{display:flex;flex-direction:column;gap:22px;}.zn-contact-card{padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(14px);transition:.35s;}.zn-contact-card:hover{transform:translateY(-6px);border-color:#d4af37;box-shadow:0 20px 40px rgba(0,0,0,.35);}.zn-contact-card h3{margin-bottom:14px;font-size:22px;color:#fff;}.zn-contact-card p,.zn-contact-card a{color:#c9bfd8;font-size:16px;line-height:1.8;word-break:break-word;text-decoration:none;}.zn-contact-card a:hover{color:#d4af37;text-decoration:none;}.zn-contact-card iframe{width:100%;height:320px;border:0;border-radius:18px;display:block;}.zn-contact-form{width:100%;max-width:100%;padding:38px;border-radius:28px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px);overflow:hidden;}.zn-contact-form h3{font-size:34px;color:#fff;margin-bottom:12px;}.zn-contact-form>p{color:#bfb6cf;line-height:1.8;margin-bottom:28px;}.zn-contact-form form{width:100%;display:flex;flex-direction:column;gap:18px;}.zn-contact-form input,.zn-contact-form select,.zn-contact-form textarea{width:100%;max-width:100%;min-width:0;padding:16px 18px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.06);color:#fff;font-size:15px;outline:none;transition:.3s;box-sizing:border-box;display:block;}.zn-contact-form textarea{resize:vertical;}.zn-contact-form input::placeholder,.zn-contact-form textarea::placeholder{color:#b6aac7;}.zn-contact-form input:focus,.zn-contact-form select:focus,.zn-contact-form textarea:focus{border-color:#d4af37;box-shadow:0 0 0 4px rgba(212,175,55,.12);}.zn-contact-form select option{background:#1d122a;color:#fff;}.zn-primary-btn{margin-top:8px;padding:17px;border:none;border-radius:50px;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-size:16px;font-weight:700;cursor:pointer;transition:.35s;text-decoration:none;}.zn-primary-btn:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(212,175,55,.3);text-decoration:none;}.zn-contact-whatsapp{display:flex;align-items:center;justify-content:center;margin-top:22px;padding:16px;border-radius:16px;background:#25d366;color:#fff;font-weight:700;transition:.3s;text-decoration:none;}.zn-contact-whatsapp:hover{background:#1fb759;transform:translateY(-3px);text-decoration:none;}.zn-contact-whatsapp::before{content:"💬";margin-right:10px;font-size:18px;}@media(max-width:1100px){.zn-contact-grid{grid-template-columns:1fr;gap:45px;}.zn-contact-card iframe{height:280px;}}@media(max-width:768px){.zn-contact{padding:80px 22px;}.zn-contact-subtitle{font-size:16px!important;line-height:1.7!important;padding:0 12px!important;}.zn-contact-form{padding:26px;}.zn-contact-form h3{font-size:28px;}.zn-contact-card{padding:22px;}.zn-contact-card iframe{height:240px;}}@media(max-width:480px){.zn-contact{padding:70px 18px;}.zn-contact-form{padding:22px 18px;border-radius:24px;}.zn-contact-form h3{font-size:24px;}.zn-contact-form input,.zn-contact-form select,.zn-contact-form textarea{padding:14px 16px;font-size:14px;}.zn-primary-btn,.zn-contact-whatsapp{padding:14px 12px;font-size:14px;}}`}</style>
    </>
  );
}

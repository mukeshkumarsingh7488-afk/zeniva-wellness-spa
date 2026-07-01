import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

export default function FloatingButtons() {
  return (
    <>
      <div className="zn-floating-actions">
        <a href={whatsappBookingLink()} target="_blank" rel="noreferrer" className="zn-floating-btn zn-floating-whatsapp" aria-label={`Chat with ${BUSINESS.name} on WhatsApp`}>
          <FaWhatsapp size={28} />
        </a>

        <a href={callLink} className="zn-floating-btn zn-floating-call" aria-label={`Call ${BUSINESS.name}`}>
          <LuPhoneCall size={26} />
        </a>
      </div>

      <style>{`
.zn-floating-actions{position:fixed;right:26px;bottom:26px;display:flex;flex-direction:column;gap:16px;z-index:9999;}
.zn-floating-btn{width:62px;height:62px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#fff;box-shadow:0 18px 40px rgba(0,0,0,.35);transition:.35s ease;position:relative;overflow:hidden;}
.zn-floating-btn svg{width:28px;height:28px;}
.zn-floating-btn::before{content:"";position:absolute;inset:0;background:rgba(255,255,255,.18);opacity:0;transition:.35s;}
.zn-floating-btn:hover::before{opacity:1;}
.zn-floating-btn:hover{transform:translateY(-6px) scale(1.08);}
.zn-floating-whatsapp{background:linear-gradient(135deg,#25D366,#128C7E);}
.zn-floating-call{background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;}
.zn-floating-btn::after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:11px;font-weight:700;letter-spacing:.5px;opacity:0;transition:.3s;white-space:nowrap;}
.zn-floating-whatsapp:hover::after{content:"WhatsApp";opacity:1;top:-22px;color:#fff;}
.zn-floating-call:hover::after{content:"Call";opacity:1;top:-22px;color:#fff;}
@keyframes znPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55);}70%{box-shadow:0 0 0 18px rgba(37,211,102,0);}100%{box-shadow:0 0 0 0 rgba(37,211,102,0);}}
.zn-floating-whatsapp{animation:znPulse 2.5s infinite;}
@media(max-width:768px){.zn-floating-actions{right:18px;bottom:18px;gap:12px;}.zn-floating-btn{width:56px;height:56px;}.zn-floating-btn svg{width:24px;height:24px;}}
@media(max-width:480px){.zn-floating-btn{width:52px;height:52px;}.zn-floating-btn svg{width:22px;height:22px;}}
`}</style>
    </>
  );
}

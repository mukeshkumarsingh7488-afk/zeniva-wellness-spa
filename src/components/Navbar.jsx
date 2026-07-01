import { useEffect, useState } from "react";
import { BUSINESS, whatsappBookingLink } from "../config/business";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Therapies", href: "#therapies" },
  { label: "Scrubs", href: "#scrubs" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`zn-navbar ${scrolled ? "zn-navbar-scrolled" : ""}`}>
        <div className="zn-container">
          {/* Logo */}

          <a href="#home" className="zn-logo">
            <div className="zn-logo-circle">Z</div>

            <div>
              <h2>{BUSINESS.shortName}</h2>

              <span>{BUSINESS.category}</span>
            </div>
          </a>

          {/* Desktop */}

          <nav className="zn-nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}

          <a href={whatsappBookingLink()} target="_blank" rel="noreferrer" className="zn-book-btn">
            Book Appointment
          </a>

          {/* Mobile */}

          <button className="zn-menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}

        <div className={`zn-mobile-menu ${open ? "show" : ""}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a href={whatsappBookingLink()} target="_blank" rel="noreferrer" className="zn-mobile-btn">
            Book Appointment
          </a>
        </div>
      </header>
      <style>{`
.zn-navbar{position:fixed;top:0;left:0;width:100%;z-index:1000;padding:14px 4%;transition:.35s;background:transparent;box-sizing:border-box;}.zn-navbar *{box-sizing:border-box;}.zn-navbar-scrolled{background:rgba(13,6,21,.9);backdrop-filter:blur(18px);box-shadow:0 10px 35px rgba(0,0,0,.3);}.zn-container{width:100%;max-width:1500px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:18px;}.zn-logo{display:flex;align-items:center;gap:13px;text-decoration:none;min-width:max-content;}.zn-logo-circle{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-size:23px;font-weight:900;box-shadow:0 12px 30px rgba(212,175,55,.3);transition:.35s;flex:0 0 auto;}.zn-logo:hover .zn-logo-circle{transform:rotate(8deg) scale(1.08);}.zn-logo h2{margin:0;color:#fff;font-size:23px;font-weight:850;line-height:1;}.zn-logo span{display:block;margin-top:5px;color:#d4af37;font-size:10.5px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;}.zn-nav-links{display:flex;align-items:center;justify-content:center;gap:26px;flex:1;min-width:0;}.zn-nav-links a{position:relative;color:#e7dff3;font-size:14px;font-weight:700;text-decoration:none;transition:.3s;white-space:nowrap;}.zn-nav-links a:hover{color:#d4af37;}.zn-nav-links a::after{content:"";position:absolute;left:0;bottom:-8px;width:0;height:2px;background:#d4af37;border-radius:50px;transition:.3s;}.zn-nav-links a:hover::after{width:100%;}.zn-book-btn,.zn-mobile-btn{display:inline-flex;align-items:center;justify-content:center;height:46px;padding:0 22px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f5d76e);color:#111;font-size:14px;font-weight:900;text-decoration:none;transition:.35s;box-shadow:0 14px 28px rgba(212,175,55,.22);white-space:nowrap;flex:0 0 auto;}.zn-book-btn:hover,.zn-mobile-btn:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(212,175,55,.3);}.zn-menu-btn{display:none;width:48px;height:48px;border:none;border-radius:14px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;transition:.3s;align-items:center;justify-content:center;flex:0 0 auto;}.zn-menu-btn:hover{background:#d4af37;color:#111;}.zn-mobile-menu{position:absolute;top:100%;left:0;width:100%;display:flex;flex-direction:column;gap:16px;padding:0 22px;max-height:0;overflow:hidden;background:rgba(13,6,21,.98);backdrop-filter:blur(20px);transition:max-height .4s ease,padding .35s ease;}.zn-mobile-menu.show{max-height:500px;padding:24px 22px;}.zn-mobile-menu a{color:#fff;text-decoration:none;font-size:16px;font-weight:700;padding:8px 0;transition:.3s;}.zn-mobile-menu a:hover{color:#d4af37;padding-left:8px;}@media(max-width:1240px){.zn-navbar{padding:14px 3%;}.zn-nav-links{gap:20px;}.zn-nav-links a{font-size:13.5px;}.zn-book-btn{height:44px;padding:0 18px;font-size:13px;}.zn-logo-circle{width:48px;height:48px;}.zn-logo h2{font-size:22px;}}@media(max-width:980px){.zn-nav-links,.zn-book-btn{display:none;}.zn-menu-btn{display:flex;}.zn-container{gap:12px;}}@media(min-width:981px){.zn-mobile-menu{display:none;}}@media(max-width:768px){.zn-navbar{padding:12px 18px;}.zn-container{max-width:100%;}.zn-logo-circle{width:46px;height:46px;font-size:22px;}.zn-logo h2{font-size:21px;}.zn-logo span{font-size:10px;letter-spacing:.8px;}.zn-menu-btn{width:46px;height:46px;border-radius:14px;}}@media(max-width:420px){.zn-navbar{padding:12px 16px;}.zn-logo{gap:11px;}.zn-logo-circle{width:44px;height:44px;font-size:21px;}.zn-logo h2{font-size:20px;}.zn-logo span{font-size:9.5px;max-width:210px;overflow:hidden;text-overflow:ellipsis;}.zn-menu-btn{width:44px;height:44px;}}
`}</style>
    </>
  );
}

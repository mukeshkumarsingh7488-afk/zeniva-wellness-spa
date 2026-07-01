export const BUSINESS = {
  name: "Zeniva Wellness Spa",
  shortName: "Zeniva",
  tagline: "Relax • Rejuvenate • Refresh",
  category: "Premium Spa & Wellness Center",

  phone: "8792889474",
  whatsapp: "918792889474",
  email: "contact@zenivawellnessspa.com",

  address: "Immadihalli Main Rd, Immadihalli, Whitefield, Bengaluru, Karnataka 560066",

  locationShort: "Whitefield, Bengaluru",
  openingHours: "Monday – Sunday | 10:00 AM – 10:00 PM",

  rating: "4.9",
  totalReviews: "30",

  mapUrl: "https://www.google.com/maps?q=Immadihalli%20Main%20Rd%2C%20Immadihalli%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560066&output=embed",

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    twitter: "#",
  },

  seo: {
    title: "Zeniva Wellness Spa | Premium Spa in Whitefield, Bengaluru",
    description: "Zeniva Wellness Spa offers premium spa therapies, body scrubs, wellness packages, and appointment booking in Whitefield, Bengaluru.",
    keywords: "Zeniva Wellness Spa, spa in Whitefield, wellness spa Bengaluru, massage therapy Whitefield, body scrub spa, spa appointment Bengaluru",
  },
};

export const whatsappBookingLink = (service = "spa appointment") => {
  const message = `Hello ${BUSINESS.name}, I want to book a ${service}. Please share availability.`;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const callLink = `tel:${BUSINESS.phone}`;

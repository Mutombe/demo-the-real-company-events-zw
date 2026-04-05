export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "The Real Company Events", legalName: "The Real Company Events", tagline: "Real Events. Real Magic. Real Memories.",
    description: "Real Events. Real Magic. Real Memories.",
    phone: "+263 77 412 6656", phoneRaw: "+263774126656", whatsappNumber: "263774126656", email: "info@realcompanyevents.co.zw",
    address: "6 Ipwa Close, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 5.0, ratingRounded: 5, reviewCount: 18, established: "2019", yearsExperience: "5+", projectsCompleted: "250+", employees: "10+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "the-real-company-events-zw-consent",
    socialLinks: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "The", logoLine2: "Real Company" },
  hero: {
    badge: "Harare's Award-Worthy Event Creators",
    titleParts: [{ text: "REAL EVENTS. " }, { text: "REAL MAGIC.", highlight: true }, { text: " REAL MEMORIES." }],
    subtitle: "Real Events.",
    ctaPrimary: "Start Planning", ctaSecondary: "View Our Work", trustBadge: "250+ Events",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "The Real Company Events - professional service" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "The Real Company Events - professional service" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "The Real Company Events - professional service" }
    ],
  },
  stats: [
    { number: "250+", label: "Events Styled" },
    { number: "5+", label: "Years of Excellence" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3+", label: "Locations" }
  ],
  servicesPreview: [
    { title: "Wedding Decor", desc: "From intimate garden ceremonies to grand ballroom receptions -- we create wedding environments that tell your love story.", icon: "Heart" },
    { title: "Corporate Events", desc: "Sophisticated event styling that communicates authority, innovation, and impeccable taste to every attendee.", icon: "Star" },
    { title: "Birthday Celebrations", desc: "Custom-themed birthday experiences that make the guest of honour feel absolutely extraordinary.", icon: "Buildings" },
    { title: "Decor & Equipment Hire", desc: "Premium furniture, linen, crockery, and decor items available for hire at competitive rates.", icon: "Lightbulb" },
    { title: "Floral Design", desc: "Botanical artistry from cascading centerpieces to architectural installations that redefine what flowers can become.", icon: "Rocket" },
    { title: "Custom Installations", desc: "Bespoke structural pieces -- suspended gardens, light sculptures, and immersive entrance experiences.", icon: "Target" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "Wedding Decor", slug: "wedding-decor", desc: "From intimate garden ceremonies to grand ballroom receptions -- we create wedding environments that tell your love story. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
      { title: "Corporate Events", slug: "corporate-events", desc: "Sophisticated event styling that communicates authority, innovation, and impeccable taste to every attendee. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" },
      { title: "Birthday Celebrations", slug: "birthday-celebrations", desc: "Custom-themed birthday experiences that make the guest of honour feel absolutely extraordinary. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" },
      { title: "Decor & Equipment Hire", slug: "decor-equipment-hire", desc: "Premium furniture, linen, crockery, and decor items available for hire at competitive rates. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
      { title: "Floral Design", slug: "floral-design", desc: "Botanical artistry from cascading centerpieces to architectural installations that redefine what flowers can become. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" },
      { title: "Custom Installations", slug: "custom-installations", desc: "Bespoke structural pieces -- suspended gardens, light sculptures, and immersive entrance experiences. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "Grand Wedding Reception", slug: "grand--wedding--reception", category: "Wedding", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"] },
      { title: "Corporate Gala Night", slug: "corporate--gala--night", category: "Corporate", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"] },
      { title: "Golden Birthday Party", slug: "golden--birthday--party", category: "Birthday", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"] },
      { title: "Business Conference", slug: "business--conference", category: "Conference", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"] },
      { title: "Floral Installation", slug: "floral--installation", category: "Floral", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"] },
      { title: "Custom Stage Design", slug: "custom--stage--design", category: "Installation", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"] },
      { title: "Anniversary Celebration", slug: "anniversary--celebration", category: "Gala", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", images: ["https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"] },
      { title: "Product Launch", slug: "product--launch", category: "Private Event", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", images: ["https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from The Real Company Events. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using The Real Company Events for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. The Real Company Events sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at The Real Company Events went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred The Real Company Events to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. The Real Company Events sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["The Real Company Events launched in 2019 with a conviction that every event deserves to feel extraordinary. No shortcuts, no generic setups -- just real creativity and real dedication.", "250+ events and a perfect 5.0 Google rating later, our clients know what 'real' means: real attention to detail, real creativity, and real memories that last a lifetime.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why The Real Company", points: [{ title: "Perfect 5.0 Rating", desc: "Every single client gives us five stars. That is not luck -- it is standards." },{ title: "Creative Direction", desc: "Original concepts, not Pinterest copies. Your event will be uniquely yours." },{ title: "Full Production", desc: "Design, hire, logistics, setup, and on-the-day coordination." },{ title: "Transparent Pricing", desc: "Detailed quotes with no hidden costs. You know exactly what you are paying for." }] },
  featuredProjects: [{ title: "Grand Wedding Reception", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", category: "Wedding" },{ title: "Corporate Gala Night", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", category: "Corporate" },{ title: "Golden Birthday Party", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", category: "Birthday" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "6 Ipwa Close, Harare, Zimbabwe", phone: "+263 77 412 6656", email: "info@realcompanyevents.co.zw" },
  ] },
  homeCta: {
    title: "MAKE IT UNFORGETTABLE.", subtitle: "Weddings, corporate events, birthdays, and celebrations designed with real creativity and real passion.",
    ctaPrimary: "Start Planning", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Real Company Events! I'd like to plan an event.",
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85",
  },
  footer: { description: "Harare's award-worthy event creators since 2019.", copyright: "The Real Company Events" },
};

export default siteData;

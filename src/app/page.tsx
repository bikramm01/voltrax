"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, Variants } from "framer-motion";
import { Autoplay } from "swiper/modules";

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const tagline = "Powering the Future with High-Performance Lithium Batteries";
const features = [
  "Fast Charging",
  "Long-Lasting Life",
  "Eco-Friendly",
  "Premium Safety Standards",
];

export default function Page() {
  const products = [
    "/Upcoming/Voltrax-EV-Scooty.png",
    "/Upcoming/Voltrax-Solar-Panel.png",
    "/Upcoming/Voltrax-Solar-Street-Light.png",
    "/Upcoming/Voltrax-BLDC-Fan.png",
    "/Upcoming/VOLTRAX-FAN.png",
    "/Upcoming/Voltrax-Farata-Fan.png",
    "/Upcoming/Voltrax-E-Rickshaw.png",
  ];

  const gallery = [
    "/gallery/1.png",
    "/gallery/2.png",
    "/gallery/3.png",
    "/gallery/4.png",
    "/gallery/5.png",
    "/gallery/6.png",
    "/gallery/7.png",
    "/gallery/8.png",
  ];

  // Typing Effect Component
  function TypingEffect({ text, speed = 50 }: { text: string; speed?: number }) {
    const [displayedText, setDisplayedText] = useState("");
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        if (index === text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, [text, speed]);
    return <span>{displayedText}</span>;
  }

  return (
    <main className="min-h-screen flex flex-col">

      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center bg-green-800 text-white">
        <Image
          src="/voltraxbattery-hero.png"
          alt="VoltraX"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 px-4 md:px-16 lg:px-24 w-full max-w-2xl flex flex-col justify-center text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-tight leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            VoltraX
          </motion.h1>

          <motion.p
            className="mt-4 text-xl md:text-2xl text-white/90 font-semibold h-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <TypingEffect text={tagline} />
          </motion.p>

          <motion.ul
            className="mt-6 space-y-2 text-lg md:text-xl font-medium"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {features.map((feat, idx) => (
              <motion.li
                key={idx}
                className="before:content-['•'] before:text-yellow-400 before:mr-2"
                variants={fadeUp}
              >
                {feat}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <a
              href="#contact"
              className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform inline-block"
            >
              Enquire for Dealership / Purchase
            </a>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section id="upcoming-products" className="py-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-green-700"
            variants={fadeUp}
          >
            Upcoming Products
          </motion.h2>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{ 768: { slidesPerView: 4 } }}
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {products.map((src, idx) => (
              <SwiperSlide key={idx}>
                <motion.div variants={fadeUp}>
                  <Image
  src={src}
  alt={`Product ${idx + 1}`}
  width={400}
  height={300}
  className="rounded-xl shadow-lg object-contain w-full border-2 border-yellow-400 bg-white"
/>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
{/* Intro Video Background Section */}
<section className="relative h-[100vh] flex items-end justify-center">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/intro.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/0"></div>

  {/* Foreground Content */}
  <motion.div
    className="relative z-10 text-center px-4 max-w-3xl mx-auto pb-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {/* Headline */}
    <motion.h2
      className="text-3xl md:text-5xl font-extrabold mb-3 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 drop-shadow-xl"
      animate={{
        scale: [1, 1.03, 1],
        textShadow: [
          "0px 0px 4px #FFD700",
          "0px 0px 12px #FF4500",
          "0px 0px 4px #FFD700",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      Powering the Future with{" "}
      <span className="text-yellow-300">VoltraX</span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-base md:text-lg text-white/90 drop-shadow-lg mb-5"
      animate={{ opacity: [0.85, 1, 0.85], y: [0, -4, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      High-performance lithium batteries built for{" "}
      <span className="text-yellow-300 font-semibold">speed</span>,{" "}
      <span className="text-yellow-300 font-semibold">safety</span>, and{" "}
      <span className="text-yellow-300 font-semibold">sustainability</span>.
    </motion.p>

    {/* CTA Button */}
    <motion.a
      href="#contact"
      className="inline-block border-2 border-yellow-400 text-yellow-400 font-bold px-5 py-2 md:px-8 md:py-3 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition-all duration-300 shadow-md text-sm md:text-base"
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 6px #FFD700",
          "0 0 14px #FFD700",
          "0 0 6px #FFD700",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      Enquire Now
    </motion.a>
  </motion.div>
</section>

{/* Product Section */}
<section id="products" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-green-700">
      Our Products
    </h2>
    <p className="text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
      Explore VoltraX’s range of high-performance EV batteries designed for India’s future mobility.
    </p>
{/* Product Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {/* Product Card 1 - Actual Product */}
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
   <Image
  src="/products/Voltrax-Lithium-Batery.jpeg"
  alt="VoltraX EV Battery"
  width={160}
  height={160}
  className="object-contain mb-4"
/>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Voltrax Lithium Batery</h3>
    <p className="text-gray-600 mb-4">
      Reliable EV battery with optimized performance for e-rickshaw vehicles.
    </p>
    <a
      href="#contact"
      className="mt-auto inline-flex items-center gap-2 bg-green-700 text-white font-bold px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12V12" />
      </svg>
      Enquire
    </a>
  </div>

  {/* Product Card 2 - Coming Soon */}
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
    <Image
  src="/products/Voltrax-Farrata-Fan-20.png"
  alt="VoltraX EV Battery"
  width={160}
  height={160}
  className="object-contain mb-4"
/>

    <h3 className="text-lg font-semibold text-gray-800 mb-2">Voltrax Farrata Fan 20</h3>
    <p className="text-gray-500 mb-4">High-capacity EV fan launching soon.</p>
    <a
      href="#contact"
      className="mt-auto inline-flex items-center gap-2 bg-green-700 text-white font-bold px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12V12" />
      </svg>
      Enquire
    </a>
  </div>

  {/* Product Card 3 - Coming Soon */}
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
    <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10v8H7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8l10 8M7 16l10-8" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Coming Soon</h3>
    <p className="text-gray-500 mb-4">Ultra-lightweight EV toto coming soon.</p>
    <a
      href="#contact"
      className="mt-auto inline-flex items-center gap-2 bg-green-700 text-white font-bold px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12V12" />
      </svg>
      Enquire
    </a>
  </div>
</div>

  </div>
</section>

{/* Why Choose Section */}
<section id="about" className="py-20 bg-gray-50">
  <motion.div
    className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
   {/* Left Column - VoltraX Advantages */}
<motion.div variants={fadeUp} className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-between">
  <div>
    <h2 className="text-3xl font-extrabold mb-6 text-green-700">
      Why Choose <span className="text-yellow-500">VoltraX?</span>
    </h2>
    <ul className="space-y-3 text-gray-700 text-lg">
      <li>✔️ 24/7 Support</li>
      <li>✔️ Home Service</li>
      <li>✔️ Stepney Support</li>
      <li>✔️ Affordable Pricing</li>
      <li>✔️ Quick Response Time</li>
      <li>✔️ Experienced Professionals</li>
      <li>✔️ 100% Service Guarantee</li>
      <li>✔️ Eco-Friendly Solutions</li>
    </ul>
  </div>

  {/* Wide image */}
  <div className="mt-8">
    <Image
      src="/voltrax-advantages-banner.png" // <-- replace with your actual image path
      alt="VoltraX Advantages"
      width={600}
      height={250}
      className="rounded-lg shadow-md w-full object-cover"
    />
  </div>
</motion.div>

    {/* Right Column - Lithium Battery Advantages */}
   {/* Right Column - Lithium Battery Advantages */}
<motion.div variants={fadeUp} className="bg-white shadow-lg rounded-xl p-8">
  <h2 className="text-3xl font-extrabold mb-6 text-yellow-500">
    Advantages of <span className="text-green-700">VoltraX Lithium</span> over Acid Batteries
  </h2>

  {/* Comparison Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 text-gray-800 text-sm md:text-base rounded-lg overflow-hidden">
      <thead className="bg-green-600 text-white text-left">
        <tr>
          <th className="px-4 py-3 border border-gray-200">Feature</th>
          <th className="px-4 py-3 border border-gray-200">VoltraX Lithium</th>
          <th className="px-4 py-3 border border-gray-200">Acid Battery</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-3 border">Backup Life</td>
          <td className="px-4 py-3 border">Lasts 5–9 years</td>
          <td className="px-4 py-3 border">Lasts only 7–12 months</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="px-4 py-3 border">Weight</td>
          <td className="px-4 py-3 border">Under 50 KG (lightweight)</td>
          <td className="px-4 py-3 border">Around 120 KG (very heavy)</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-3 border">Charging Time</td>
          <td className="px-4 py-3 border">Fully charges in 3–3.5 hours</td>
          <td className="px-4 py-3 border">Needs 10–12 hours for full charge</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="px-4 py-3 border">Cycle Life</td>
          <td className="px-4 py-3 border">3000–5000+ cycles</td>
          <td className="px-4 py-3 border">300–500 cycles</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-3 border">Maintenance</td>
          <td className="px-4 py-3 border">Zero maintenance, hassle-free</td>
          <td className="px-4 py-3 border">Requires regular water top-up & checking</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="px-4 py-3 border">Efficiency</td>
          <td className="px-4 py-3 border">High efficiency (95–98%)</td>
          <td className="px-4 py-3 border">Low efficiency (70–80%)</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-3 border">Pollution</td>
          <td className="px-4 py-3 border">Eco-friendly, no leakage or gas</td>
          <td className="px-4 py-3 border">Acid & lead – harmful for environment</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="px-4 py-3 border">Space Required</td>
          <td className="px-4 py-3 border">Compact, saves space</td>
          <td className="px-4 py-3 border">Large size, needs more space</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="px-4 py-3 border">Overall Cost</td>
          <td className="px-4 py-3 border">Higher initial price but long life = big savings</td>
          <td className="px-4 py-3 border">Cheap at first but frequent replacement = high long-term cost</td>
        </tr>
      </tbody>
    </table>
  </div>
</motion.div>
  </motion.div>
</section>

{/* Testimonial Section */}
<section id="testimonials" className="py-16 bg-green-50">
  <motion.div
    className="max-w-7xl mx-auto px-4"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {/* Section Title */}
    <motion.h2
      className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-800"
      variants={fadeUp}
    >
      What Our Customers Say
    </motion.h2>

    {/* Swiper Carousel */}
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-8"
    >
      {[
        {
          name: "Rohit Sharma",
          designation: "EV Owner, Pune",
          photo: "https://via.placeholder.com/150",
          feedback: "VoltraX batteries transformed my EV experience. Fast charging and longer life make a huge difference!"
        },
        {
          name: "Suman Mukherjee",
          designation: "Fleet Manager, Kolkata",
          photo: "https://via.placeholder.com/150",
          feedback: "Reliable and maintenance-free! Our delivery fleet performance improved drastically after switching to VoltraX."
        },
        {
          name: "Priya Nair",
          designation: "EV Enthusiast, Bangalore",
          photo: "https://via.placeholder.com/150",
          feedback: "Eco-friendly and high-performance. I love that I can rely on VoltraX for both speed and safety."
        }
      ].map((testi, idx) => (
        <SwiperSlide key={idx}>
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full"
            variants={fadeUp}
          >
            <Image
              src={testi.photo}
              alt={testi.name}
              width={96}
              height={96}
              unoptimized
              className="object-cover rounded-full mb-4 border-2 border-green-700"
            />
            <p className="text-gray-700 mb-4 italic">&quot;{testi.feedback}&quot;</p>
            <h4 className="font-semibold text-lg text-green-900">{testi.name}</h4>
            <p className="text-sm text-green-700">{testi.designation}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
</section>

     {/* Gallery - Coming Soon (Autoplay Swiper) */}
<section className="py-16 bg-yellow-50">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-green-700"
        >
          Gallery
        </motion.h2>

        {/* Swiper */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {gallery.map((src, idx) => (
            <SwiperSlide key={idx}>
              <motion.div className="bg-gray-100 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>

    {/* CTA Section */}
<section
  id="contact"
  className="py-16 bg-gradient-to-r from-green-700 to-yellow-500 text-white"
>
  <div className="max-w-7xl mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold">Apply for Dealership</h2>
      {/* CTA Buttons */}
<div className="flex justify-center gap-6 mt-6 flex-wrap">
  {/* Book a Call */}
  <a
    href="tel:+918926813126"
    className="flex items-center gap-2 bg-white/90 text-green-800 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    {/* Phone Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.5a1 1 0 011-1h2.5a1 1 0 011 .85l.4 2a1 1 0 01-.25.95l-1.7 1.7a16 16 0 006.1 6.1l1.7-1.7a1 1 0 01.95-.25l2 .4a1 1 0 01.85 1V21a1 1 0 01-1 1A19 19 0 013 5.5z" />
    </svg>
    Book a Call
  </a>

  {/* Email Us */}
<a
  href="mailto:contact@voltrax.com"
  className="flex items-center gap-2 bg-yellow-400/90 text-green-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
>
  {/* Proper Envelope Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
  </svg>
  Email Us
</a>

</div>
      <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
        Power India’s EV future with VoltraX batteries.
      </p>
    </div>

    {/* Offices */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Pune Office */}
      <div className="flex gap-4 items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21V7a1 1 0 011-1h4V3h8v3h4a1 1 0 011 1v14H3zM12 5h-4v2h4V5zm0 4h-4v2h4V9zm0 4h-4v2h4v-2zm6-4h-4v2h4V9zm0 4h-4v2h4v-2z" />
        </svg>
        <div>
          <h3 className="font-semibold text-lg">Pune, India</h3>
          <h3 className="font-thin text-sm">Office 1 </h3>
           <p><b>Forge Weld Engineering and Fabricators</b></p>
          <p>Flat No.6, S.No.56, Rajnigandha Complex, Vadgaon Sheri, Pune</p>

          <p className="flex items-center gap-2 mt-1 text-sm">
            +91 9923207250
          </p>
        </div>
      </div>

      {/* West Bengal Office */}
      <div className="flex gap-4 items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21V7a1 1 0 011-1h4V3h8v3h4a1 1 0 011 1v14H3zM12 5h-4v2h4V5zm0 4h-4v2h4V9zm0 4h-4v2h4v-2zm6-4h-4v2h4V9zm0 4h-4v2h4v-2z" />
        </svg>
        <div>
          <h3 className="font-semibold text-lg">West Bengal, India</h3>
          <h3 className="font-thin text-sm">Office 2</h3>
          <p><b>Madina Solar Center</b></p>
          <p>Indira Super Market Complex, Stall No. B/9, Berhampore, West Bengal</p>
          <p className="flex items-center gap-2 mt-1 text-sm">
             
            +91 8926813126
          </p>
        </div>
      </div>
    </div>

    

  </div>
</section>

    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* PRIVACY CONTENT */}
      <section className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f8f3e] mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-8">
          At <strong>VoltraX</strong>, your privacy is very important to us.
          This policy explains how we collect, use, and protect your information
          when you visit our website or use our services.
        </p>

        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email, phone
              number, and company details when you contact us or request a quote.
              We may also collect non-personal information like browser type,
              device, and usage statistics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to inquiries and provide quotes</li>
              <li>To improve our products, services, and website</li>
              <li>To send updates, offers, or newsletters (with consent)</li>
              <li>To comply with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              3. Data Security
            </h2>
            <p>
              We implement strict security measures to safeguard your personal
              data. However, please note that no online transmission is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              4. Sharing Information
            </h2>
            <p>
              We do not sell or rent your personal data. Information may only be
              shared with trusted third-party providers who help us deliver our
              services, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              5. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              information. Please contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated date.
            </p>
          </section>
        </div>
      </section>

    </main>
  );
}

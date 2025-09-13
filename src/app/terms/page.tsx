"use client";

import { useEffect, useState } from "react";

export default function TermsPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* TERMS CONTENT */}
      <section className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f8f3e] mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-700 mb-8">
          Welcome to <strong>VoltraX</strong>. By accessing or using our
          website and services, you agree to the following terms and conditions.
          Please read them carefully.
        </p>

        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              1. Use of Website
            </h2>
            <p>
              You may browse and use our website for personal and commercial
              purposes related to Voltrax products and services. Any misuse,
              unauthorized copying, or malicious activity is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              2. Product Information
            </h2>
            <p>
              While we strive to provide accurate product details, specifications
              may vary without prior notice. Prices are subject to market
              conditions and raw material costs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              3. Warranty & Service
            </h2>
            <p>
              All Voltrax batteries come with a warranty period (3–5 years,
              depending on the model). Warranty claims must be made through
              authorized dealers or official support channels only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              4. Payments & Orders
            </h2>
            <p>
              Payments should only be made through authorized dealers or official
              Voltrax accounts. We are not responsible for transactions made with
              unauthorized third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              VoltraxPower shall not be held liable for any indirect, incidental,
              or consequential damages arising from the use of our products,
              services, or website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              6. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Updates will be posted on this page with the revised date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#28a745] mb-2">
              7. Contact Us
            </h2>
            <p>
              For any questions regarding these terms, please contact us at:{" "}
              <a
                href="mailto:contact@voltrax.in"
                className="text-[#1f8f3e] font-semibold hover:underline"
              >
                contact@voltrax.in
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

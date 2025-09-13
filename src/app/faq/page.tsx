"use client";

import { JSX, useState } from "react";

type FAQItem = {
  q: string;
  a: JSX.Element | string;
};

export default function FAQPage() {
  // FAQ list
  const faqs: FAQItem[] = [
    {
      q: "How can I claim warranty for my Voltrax battery?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Call our official support number or send us an email with your purchase details.</li>
          <li>Technician visit within 24 hours.</li>
          <li>Minor issues fixed on the spot.</li>
          <li>Major issues → battery replaced immediately.</li>
          <li>If battery is taken for service, dealer provides Stepney (backup) battery.</li>
        </ul>
      ),
    },
    {
      q: "What is the warranty period of Voltrax batteries?",
      a: "All Voltrax batteries come with a 3–5 year warranty, depending on the model, usage, and application (home, EV, solar, industrial).",
    },
    {
      q: "What if my dealer/distributor doesn’t help me?",
      a: "You can directly contact Voltrax Head Office Support. We ensure full assistance within 24 hours.",
    },
    {
      q: "What is the price of Voltrax batteries?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Prices vary depending on delivery date, raw material cost (Lithium price), and market conditions.</li>
          <li>We aim to maintain the lowest price while ensuring quality and performance.</li>
        </ul>
      ),
    },
    {
      q: "How much backup/mileage can I expect from a Voltrax battery?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Depends on load type (AC, fan, TV, EV, solar setup, etc.).</li>
          <li>Proper charging habits.</li>
          <li>Following company usage guidelines.</li>
          <li>⚡ Used correctly, your battery delivers the performance promised in specifications.</li>
        </ul>
      ),
    },
    {
      q: "Can my battery be recycled after 5 years?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Yes ✅. Voltrax batteries are recyclable.</li>
          <li>Save cost on new purchase.</li>
          <li>Protect the environment and reduce electronic waste.</li>
        </ul>
      ),
    },
    {
      q: "Can I order Voltrax batteries online? Who provides service?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Yes ✅. Order directly from our official website.</li>
          <li>Delivery arranged by nearest dealer.</li>
          <li>Payment directly to dealer.</li>
          <li>After-sales support handled by the same dealer for fast local service.</li>
        </ul>
      ),
    },
    {
      q: "Do Voltrax batteries need special maintenance?",
      a: "No ❌. Voltrax lithium batteries are maintenance-free. Just follow proper charging/discharging practices.",
    },
    {
      q: "How is Voltrax lithium battery better than normal lead-acid battery?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Lightweight (less than 50kg vs 120kg lead-acid)</li>
          <li>Faster charging (3–3.5 hrs vs 10–12 hrs)</li>
          <li>Longer life (5–7 yrs vs 7–12 months)</li>
          <li>Eco-friendly, maintenance-free</li>
        </ul>
      ),
    },
    {
      q: "Which products can run on Voltrax batteries?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>AC, Fan, TV & Home appliances</li>
          <li>Solar system backup</li>
          <li>E-Rickshaw (Toto), Battery Scooty, EV bikes</li>
          <li>Industrial & commercial usage</li>
        </ul>
      ),
    },
    {
      q: "What makes Voltrax different from other brands?",
      a: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Brand from Madina Solar Center with 15+ years of experience.</li>
          <li>Doorstep service within 24 hours.</li>
          <li>Customer-first support, even if dealer fails.</li>
          <li>Trust, transparency, and long-term performance.</li>
        </ul>
      ),
    },
  ];

  // Which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* FAQ SECTION */}
      <section className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f8f3e] mb-10 text-center">
          ❓ Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-xl bg-white shadow-sm">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900"
                onClick={() => toggleFAQ(i)}
              >
                {f.q}
                <span className="ml-2 text-gray-500">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-gray-700 text-sm">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

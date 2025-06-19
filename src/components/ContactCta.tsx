"use client";

import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="py-20 bg-orange-500 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your home?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Contact our team today and let’s make your vision a reality.
        </p>
        <Link
          href="/contact"
          className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}

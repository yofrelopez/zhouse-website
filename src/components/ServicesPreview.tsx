"use client";

import { ReactNode } from "react";

import { FaTools, FaPaintRoller, FaBath, FaSink, FaBolt, FaHammer } from "react-icons/fa";

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard icon={<FaHammer size={50} />} title="Home Repair" />
          <ServiceCard icon={<FaTools size={50} />} title="Kitchen Remodeling" />
          <ServiceCard icon={<FaBath size={50} />} title="Bathroom Renovation" />
          <ServiceCard icon={<FaPaintRoller size={50} />} title="Painting & Drywall" />
          <ServiceCard icon={<FaSink size={50} />} title="Plumbing Services" />
          <ServiceCard icon={<FaBolt size={50} />} title="Electrical Services" />
        </div>
      </div>
    </section>
  );
}


function ServiceCard({ icon, title }: { icon: ReactNode; title: string })  {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center hover:shadow-lg transition">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

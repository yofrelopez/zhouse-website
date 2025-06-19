"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-gray-100">
    <Image
        src="/hero.png"
        alt="Living Room"
        fill
        style={{ objectFit: "cover" }}
        priority
    />
    <div className="absolute inset-0 bg-black/40 z-10"></div>


    <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center text-white px-4 transform -translate-y-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Home Repair & Renovation
        </h1>
        <p className="text-xl md:text-2xl mb-8">
        Your dream home, made a reality.
        </p>
        <Link
        href="/contact"
        className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition"
        >
        Get Started
        </Link>
    </div>
    </section>

  );
}

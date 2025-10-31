import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const business = "Test Git Webhooks Cleaning";
  const location = "Seattle, WA";
  const phone = "206-555-9999";
  
  const aboutContent = {
    heading: "Professional Cleaning Services in Seattle",
    story: ["Test Git Webhooks Cleaning has served Seattle's residential and commercial properties for over a decade, delivering exceptional cleaning solutions with attention to detail and reliability.","Our experienced team uses eco-friendly products and modern techniques to ensure your spaces are spotless, healthy, and welcoming for families and businesses alike."],
    mission: "To provide Seattle with outstanding cleaning services that exceed expectations while maintaining environmental responsibility and building lasting relationships with our valued clients.",
    values: [{"title":"Excellence","description":"We deliver meticulous attention to detail in every cleaning task, ensuring spotless results that exceed customer expectations consistently."}]
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{aboutContent.heading}</h1>
          <p className="text-xl text-blue-100">Serving {location} with Excellence</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
          <div className="space-y-4 text-lg text-gray-700">
            {aboutContent.story.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-700">{aboutContent.mission}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.values.map((value, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Work With {business}</h2>
          <p className="text-xl mb-8 text-blue-100">Experience the difference of working with a trusted {location} company.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {phone && (
              <a href={`tel:${phone}`} className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                Call {phone}
              </a>
            )}
            <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

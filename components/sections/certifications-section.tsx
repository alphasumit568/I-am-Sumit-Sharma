"use client";

import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import HeadingBadge from "@/components/heading-badge";

export const CertificationsSection = () => {
  const images = [
    "/image3.jpeg",
    "/image2.jpeg",
    "/image5.png",
    "/image4.png",
    "/image1.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="certification" className="w-full mt-8">
        <HeadingBadge title="Certification" icon={<BookOpen size={14} color="#06B6D4" />} />
      <div className="space-y-2 mt-4">
            <h3 className="text-3xl font-semibold">
              My{" "}
              <span className="text-[#08090a] dark:text-slate-200">
                 Certificates
              </span>
            </h3>
           
          </div>

      <div className="relative max-w-4xl mx-auto mt-4">
        <div className="overflow-hidden rounded-lg  #0A0A0A">
          <img
            src={images[index]}
            alt={`cert-${index + 1}`}
            className="w-full h-64  md:h-80 object-contain"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <button
            onClick={prev}
            aria-label="Previous certification"
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Prev
          </button>

          <div className="text-sm text-gray-500">
            {index + 1} / {images.length}
          </div>

          <button
            onClick={next}
            aria-label="Next certification"
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
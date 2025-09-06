import React from "react";
import type { CaseStudy } from "../../../types";
import Heading from "../atoms/Heading";

const CaseStudyCard: React.FC<CaseStudy> = ({
  client,
  title,
  imageUrl,
  description,
  url, // <-- pastikan ada di tipe
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-dark-300 border border-dark-200 shadow-soft transition-all duration-300 hover:border-brand">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={`${client} – ${title}`}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-brand font-semibold mb-1">{client}</p>
        <Heading as="h3" className="mb-2 text-light-100">
          {title}
        </Heading>
        <p className="text-dark-100">{description}</p>

        {/* Tombol menuju link eksternal (opsional) */}
        {url && (
          <div className="mt-5">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${client} website`}
              className="inline-flex items-center gap-2 rounded-xl border border-brand px-4 py-2 font-medium text-brand transition hover:bg-brand hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand/60"
            >
              Visit Website
              {/* icon panah kecil */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414L14 6.414 7.707 12.707a1 1 0 0 1-1.414-1.414L12.586 5l-1.293-1.293a1 1 0 0 1 0-1.414z" />
                <path d="M5 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7v8a1 1 0 1 1-2 0V5z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;

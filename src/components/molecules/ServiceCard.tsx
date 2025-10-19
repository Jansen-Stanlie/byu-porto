import React from "react";
// import type { Service } from "../../types";
import Heading from "../atoms/Heading";

const ServiceCard: React.FC<any> = ({ icon, title, description }) => {
  return (
    <div className="bg-ink p-8 rounded-2xl border border-dark-200/50 hover:border-brand transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <Heading as="h3" className="mb-2 text-light-100">
        {title}
      </Heading>
      <p className="text-dark-100">{description}</p>
    </div>
  );
};

export default ServiceCard;

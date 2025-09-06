import React from "react";
import Heading from "../components/atoms/Heading";
import ServiceCard from "../components/molecules/ServiceCard";
import { SERVICES_DATA } from "../../constants";
import Button from "../components/atoms/Button";

const PageHeader = () => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ink">
    <div className="container mx-auto px-6 text-center">
      <Heading as="h1" className="text-light-100">
        Our Services
      </Heading>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-dark-100">
        A comprehensive range of digital services designed to elevate your
        brand, engage your audience, and deliver measurable results.
      </p>
    </div>
  </section>
);

const AllServicesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
        <div className="bg-ink p-8 rounded-2xl border-2 border-dashed border-dark-200 flex flex-col items-center justify-center text-center">
          <Heading as="h3" className="mb-2 text-light-100">
            Have a unique challenge?
          </Heading>
          <p className="text-dark-100 mb-6">
            We love tackling new problems. Let's discuss a custom solution
            tailored just for you.
          </p>
          <Button to="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <>
      <PageHeader />
      <AllServicesSection />
    </>
  );
};

export default ServicesPage;

import React from "react";
import Button from "../components/atoms/Button";
import Heading from "../components/atoms/Heading";
import ServiceCard from "../components/molecules/ServiceCard";
import CaseStudyCard from "../components/molecules/CaseStudyCard";
import HeroSlider from "../components/molecules/HeroSlider";
import {
  SERVICES_DATA,
  CLIENTS_GRID_DATA,
  CASE_STUDIES_DATA,
} from "../../constants";

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-ink">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-dark-200/20 [mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl text-center mx-auto lg:text-left lg:mx-0">
        <Heading as="h1" className="text-light-100 leading-tight">
          We design, build, and grow <br />
          <span className="text-brand">digital that performs.</span>
        </Heading>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-light-200">
          From strategy to shipped product—BYU DIGITAL turns ideas into results.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Button to="/contact" variant="primary" className="w-full sm:w-auto">
            Get a Quote
          </Button>
          <Button to="/work" variant="secondary" className="w-full sm:w-auto">
            See Our Work
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <Heading as="h2" className="text-light-100">
          Our Capabilities
        </Heading>
        <p className="mt-4 text-lg text-dark-100">
          We offer a complete suite of services to transform your digital
          presence, from initial idea to final product and beyond.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

const ClientsSection = () => (
  <section className="py-20 md:py-28 bg-light-100 text-ink relative overflow-hidden">
    <div className="container mx-auto px-6 z-10 relative">
      <div className="text-center max-w-3xl mx-auto">
        <Heading as="h2" className="text-ink">
          Our Clients
        </Heading>
        <p className="mt-4 text-lg text-dark-200">
          We are proud to have collaborated with some of the best brands in the
          industry.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
        {CLIENTS_GRID_DATA.map((client) => (
          <figure
            key={client.name}
            className="group flex flex-col items-center justify-center gap-2"
          >
            <img
              src={client.logoUrl}
              alt={client.name}
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-[1.02]"
            />
            <figcaption className="font-display font-semibold text-[13px] sm:text-sm tracking-wide text-dark-300/90 text-center transition-all group-hover:text-ink">
              {client.name}
            </figcaption>
            {/* garis aksen brand saat hover */}
            <span
              aria-hidden
              className="block h-0.5 w-6 bg-brand/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-8 transition-all"
            />
          </figure>
        ))}
      </div>
    </div>
    {/* Decorative shape from the image */}
    <div className="absolute bottom-0 right-0 w-1/2 md:w-1/3 h-1/2 bg-light-300/30 rounded-tl-full -z-0" />
  </section>
);

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      name: "Discover",
      description:
        "We start by understanding your vision, audience, and goals through collaborative workshops.",
    },
    {
      num: "02",
      name: "Design",
      description:
        "Our team creates intuitive, beautiful user experiences and visual identities that resonate.",
    },
    {
      num: "03",
      name: "Build",
      description:
        "Leveraging modern tech, we build scalable, high-performance websites and applications.",
    },
    {
      num: "04",
      name: "Grow",
      description:
        "Post-launch, we help you grow with data-driven marketing, SEO, and continuous optimization.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-ink">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="text-light-100">
            Our Proven Process
          </Heading>
          <p className="mt-4 text-lg text-dark-100">
            A streamlined journey from concept to launch, ensuring clarity,
            collaboration, and exceptional results at every stage.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 border border-dark-200/50 rounded-2xl bg-dark-300"
            >
              <span className="text-brand font-display font-bold text-2xl">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-light-100 mt-4 mb-2">
                {step.name}
              </h3>
              <p className="text-dark-100">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutHighlightSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 md:order-1">
          <Heading as="h2" className="text-light-100 mb-4">
            A Partner in Growth
          </Heading>
          <p className="text-dark-100 mb-8 text-lg">
            We are a team of creators, strategists, and technologists passionate
            about building exceptional digital experiences. Our mission is to be
            an innovative and collaborative partner, delivering the best results
            for our clients through data-oriented strategies.
          </p>
          <Button to="/about" variant="secondary">
            More About Us
          </Button>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://picsum.photos/seed/abouthome/800/600"
            alt="BYU Digital Team collaborating"
            className="rounded-2xl shadow-soft"
          />
        </div>
      </div>
    </div>
  </section>
);

const CaseStudiesHighlight = () => (
  <section className="py-20 md:py-28 bg-ink">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <Heading as="h2" className="text-light-100">
          Selected Work
        </Heading>
        <p className="mt-4 text-lg text-dark-100">
          We don't just talk the talk. Here’s a look at the tangible results and
          success stories we’ve created for our clients.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES_DATA.slice(0, 3).map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button to="/work" variant="secondary">
          View All Work
        </Button>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="bg-ink rounded-2xl p-10 md:p-16 text-center border border-dark-200/50">
        <Heading as="h2" className="text-light-100">
          Let's build something meaningful.
        </Heading>
        <p className="mt-4 text-lg text-dark-100 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? We're here to help you
          turn your ideas into reality.
        </p>
        <div className="mt-8">
          <Button to="/contact" variant="primary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ClientsSection />
      <ProcessSection />
      <AboutHighlightSection />
      <CaseStudiesHighlight />
      <CTASection />
    </>
  );
};

export default HomePage;

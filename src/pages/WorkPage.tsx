import React from "react";
import Heading from "../components/atoms/Heading";
import CaseStudyCard from "../components/molecules/CaseStudyCard";
import { CASE_STUDIES_DATA } from "../../constants";

const PageHeader = () => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ink">
    <div className="container mx-auto px-6 text-center">
      <Heading as="h1" className="text-light-100">
        Our Work
      </Heading>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-dark-100">
        We partner with ambitious brands to create digital experiences that
        matter. Explore some of our favorite projects.
      </p>
    </div>
  </section>
);

const AllCaseStudiesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES_DATA.map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
    </div>
  </section>
);

const WorkPage = () => {
  return (
    <>
      <PageHeader />
      <AllCaseStudiesSection />
    </>
  );
};

export default WorkPage;

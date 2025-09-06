import React from "react";
import Heading from "../components/atoms/Heading";
import { TEAM_DATA, VALUES_DATA, MISSION_DATA } from "../../constants";
import { Check } from "../components/atoms/Icons";
import type { TeamMember, Value, MissionPoint } from "../../types";

const PageHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ink">
    <div className="container mx-auto px-6 text-center">
      <Heading as="h1" className="text-light-100">
        {title}
      </Heading>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-dark-100">{subtitle}</p>
    </div>
  </section>
);

const VisionMissionSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="https://picsum.photos/seed/vision/800/600"
          alt="Team collaborating"
          className="rounded-2xl shadow-soft"
        />
      </div>
      <div>
        <Heading as="h2" className="text-light-100 mb-4">
          Our Vision & Mission
        </Heading>
        <p className="text-dark-100 mb-8 text-lg">
          To be the best digital marketing company that is always innovative,
          creative, and collaborative to provide the best for clients and be
          data-oriented.
        </p>
        <ul className="space-y-4">
          {MISSION_DATA.map((mission, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-6 h-6 text-brand mr-3 mt-1 flex-shrink-0" />
              <span className="text-light-200">{mission.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const ValuesSection = () => (
  <section className="py-20 md:py-28 bg-ink">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <Heading as="h2" className="text-light-100">
          Our Core Values
        </Heading>
        <p className="mt-4 text-lg text-dark-100">
          The principles that guide our work, our relationships, and our
          commitment to excellence.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {VALUES_DATA.map((value, index) => (
          <div
            key={index}
            className="bg-dark-300 p-8 rounded-2xl border border-dark-200/50"
          >
            <Heading as="h3" className="text-brand text-xl mb-3">
              {value.title}
            </Heading>
            <p className="text-dark-100">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <Heading as="h2" className="text-light-100">
          Meet Our Leadership
        </Heading>
        <p className="mt-4 text-lg text-dark-100">
          The passionate experts steering BYU DIGITAL towards new heights of
          innovation and client success.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_DATA.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-dark-200"
            />
            <Heading as="h3" className="text-xl text-light-100">
              {member.name}
            </Heading>
            <p className="text-brand">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About BYU DIGITAL"
        subtitle="We are a team of creators, strategists, and technologists passionate about building exceptional digital experiences that drive growth."
      />
      <VisionMissionSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;

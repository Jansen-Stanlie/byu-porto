import React from "react";
import type {
  Service,
  Value,
  MissionPoint,
  TeamMember,
  CaseStudy,
  Client,
} from "./types";
import {
  Briefcase,
  Code,
  Megaphone,
  Search,
  Smartphone,
  Star,
  BarChart,
  Users,
  PenTool,
  TrendingUp,
  Cloud,
  AppWindow,
} from "./src/components/atoms/Icons";

export const SERVICES_DATA: Service[] = [
  {
    icon: <Briefcase className="w-8 h-8 text-brand" />,
    title: "Digital Strategy",
    description:
      "We craft data-driven strategies to define your brand’s digital roadmap and ensure measurable success.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-brand" />,
    title: "Branding",
    description:
      "We build strong, memorable brand identities that resonate with your audience and stand out in the market.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-brand" />,
    title: "Social Media Marketing",
    description:
      "We create and manage engaging social media campaigns that build communities and drive business growth.",
  },
  {
    icon: <Code className="w-8 h-8 text-brand" />,
    title: "Web Development",
    description:
      "We design and develop high-performance, SEO-friendly websites that deliver exceptional user experiences.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand" />,
    title: "KOL Management",
    description:
      "We connect your brand with influential Key Opinion Leaders to maximize reach and build credibility in your niche.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand" />,
    title: "Digital Advertising",
    description:
      "We run targeted ad campaigns across platforms to boost brand visibility, generate leads, and increase sales.",
  },
];

export const VALUES_DATA: Value[] = [
  {
    title: "Professional Team",
    description:
      "Our team consists of experienced marketing, design, and development professionals dedicated to achieving your goals.",
  },
  {
    title: "All-in-One Solution",
    description:
      "From branding and marketing to sales and business development, we offer a complete solution for your brand’s needs.",
  },
  {
    title: "Integrity and Trust",
    description:
      "We deliver precise, measurable results, ensuring quality and earning your trust in every project we undertake.",
  },
  {
    title: "Individual Approach",
    description:
      "We offer solutions tailored to your company’s needs, based on thorough data analysis and a deep understanding of your goals.",
  },
];

export const MISSION_DATA: MissionPoint[] = [
  { text: "Deliver the best results and services with measurable data." },
  { text: "Become a solution for business development through digital." },
  {
    text: "Create creative ideas according to consumer needs and modern trends.",
  },
  { text: "Become experts in enhancing personal and corporate branding." },
  {
    text: "Collaborate with creativity and technology to drive the creative economy.",
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "David Bayu N.",
    role: "Chief Executive Officer",
    imageUrl: "https://picsum.photos/seed/david/400/400",
  },
  {
    name: "Muhammad Fauzi",
    role: "Chief Operating Officer",
    imageUrl: "https://picsum.photos/seed/ridwan/400/400",
  },
  {
    name: "Jansen Stanlie",
    role: "Head of IT",
    imageUrl: "https://picsum.photos/seed/stanley/400/400",
  },
  {
    name: "Oriza Hasfi",
    role: "Research and Development",
    imageUrl: "https://picsum.photos/seed/oriza/400/400",
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    client: "Pantai Kelapa",
    title: "Website & SEO Revamp",
    imageUrl: "https://www.pantaikelapa.com/images/garam/bg-garam3.jpg",
    description:
      "Successfully created a new website and implemented an SEO strategy that resulted in top search engine rankings.",
    url: "https://www.pantaikelapa.com/", // NEW
  },
  {
    client: "Gunung Tetap Abadi",
    title: "Corporate Website & SEO",
    imageUrl:
      "https://www.gunungtetapabadi.com/static/media/earthing-charcoal.14360a5bc58f016c785d.jpg",
    description:
      "Developed a professional corporate website and SEO plan, achieving high visibility in search results for their niche.",
    url: "https://www.gunungtetapabadi.com/", // NEW
  },
  {
    client: "Wisata Pantai Kelapa",
    title: "Social Media Engagement Campaign",
    imageUrl: "https://www.pantaikelapa.com/images/hero-bg3.jpg",
    description:
      "Launched a highly successful social media campaign, dramatically increasing follower engagement and brand awareness.",
    url: "https://www.wisatapantaikelapa.com/",
    // url optional (belum ada)
  },
];

// It's recommended to place these logos as SVG or PNG files in a `public/logos/` directory.
// The paths below are placeholders. Please replace them with your actual logo files.
export const CLIENTS_GRID_DATA: Client[] = [
  {
    name: "Tiket.com",
    logoUrl: "/src/asset/clients/tiket_com.png",
  },
  {
    name: "Pantai Kelapa",
    logoUrl: "/src/asset/clients/Pantai_Kelapa.png",
  },
  {
    name: "Pemkab Tuban",
    logoUrl: "/src/asset/clients/Pemkab_Tuban.png",
  },
  {
    name: "Begawan Apartment",
    logoUrl: "/src/asset/clients/Begawan_Apart.png",
  },
  {
    name: "Seafood Pantai Kelapa",
    logoUrl: "/src/asset/clients/SeafoodPantaiKelapa.png",
  },
  {
    name: "Lazizaa",
    logoUrl: "/src/asset/clients/Lazizaa.png",
  },
  {
    name: "Gunung Tetap Abadi",
    logoUrl: "/src/asset/clients/Gunung_Tetap_Abadi.png",
  },
  {
    name: "Bank Jatim Syariah",
    logoUrl: "/src/asset/clients/Bank_Jatim.png",
  },
  {
    name: "Traveloka",
    logoUrl: "/src/asset/clients/traveloka.png",
  },
  {
    name: "Barillah",
    logoUrl: "/src/asset/clients/Barillah.png",
  },
];

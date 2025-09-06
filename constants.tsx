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
    name: "Stanley Jansen",
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
    name: "polynia",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/2V4f5d37g6219Vz3eEMf4a/f9af4125b341f22143540e11855653b4/polynia.svg",
  },
  {
    name: "Eileen Grace",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/1gCdwUE6dY5V12bvs2n0aI/760e5684ff401d4182465e9d21b0660a/eileen-grace.svg",
  },
  {
    name: "mamaway",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/2tJub62ns2xxFw6e30Vzkg/f562df359c5d57b2781b4f4f10712d77/mamaway.svg",
  },
  {
    name: "Mirae",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/3BTRwwb0Ew5iCXTsB35TPE/d1519a0a0375a0c029f6b761a2f64319/mirae.svg",
  },
  {
    name: "Chess",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/2g5hMgx42ER5vPb2CCJ55p/23a078e87483645b20468e7456722e03/chess.svg",
  },
  {
    name: "SH-RD",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/3t71sQWhs3t2oY42p3oW0A/5cae1a9e701962319c52220b240e4f3c/sh-rd.svg",
  },
  {
    name: "evoke",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/3Q8U0l1a34G0i345G2w3rI/a049d1073111bd290f6b4b45d27b9c9f/evoke.svg",
  },
  {
    name: "VHA Laboratories",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/6eX2z4xYnDFls5T9oKQxWc/58e23924f2f0a6d892a0e41712a4c9c1/vha.svg",
  },
  {
    name: "Pastnine",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/2p2m09aN4bJzWk46s0sE6k/d73d9d30560a5839446d5102a0a256f6/pastnine.svg",
  },
  {
    name: "Nutri Beyond",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/1fUjDABpGz0pL0YVjKQLzO/7b707010470519965b53d162f2f305f2/nutri-beyond.svg",
  },
  {
    name: "mosseru",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/6D3d8nJc0u0hQ2y59j74P1/2d5e2e8e2b8b4c05291d9263435e0545/mosseru.svg",
  },
  {
    name: "Ivy & Lily",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/5GvAdYJ2Tjv6LNW4mC9vHY/1c1815594b29319f074411f5e82f767a/ivy-lily.svg",
  },
  {
    name: "DR.JOU",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/4a98G1o2ZYw0Rofv6vIS68/5e6834571946892f3cb0255b71af31a9/dr-jou.svg",
  },
  {
    name: "MyDAISY",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/LZsVmMvCHG6KsvSju618B/a3b1c1c726354898b8c5e93344600109/mydaisy.svg",
  },
  {
    name: "G-Belle Beauty",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/2z7Z2Y4t7t2p8S3l4y2y0X/14352f2d9396d19488e08d675661f435/g-belle.svg",
  },
  {
    name: "Cleviant",
    logoUrl:
      "https://images.ctfassets.net/5de0220ick7d/4u8q0g1F2w8e7s6e3S0s8i/a953b584a206cb30b659c44d4715de3f/cleviant.svg",
  },
];

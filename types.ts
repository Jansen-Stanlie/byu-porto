export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface MissionPoint {
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface CaseStudy {
  client: string;
  title: string;
  imageUrl: string;
  description: string;
  url: string;
}

export interface Client {
  name: string;
  logoUrl: string;
}

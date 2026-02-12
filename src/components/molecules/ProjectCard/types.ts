export default interface ProjectCardProps {
  data: ProjectCardDataProps;
  className: string;
}

export interface ProjectCardDataProps {
  id: string;
  title: string;
  description: string;
  type: "Web" | "Mobile" | "Cross-Platfrom" | "Design";
  url?: string;
  live?: string;
  figma?: string;
  case_study?: string;
  play_store?: string;
  apple_store?: string;
  techStack?: string[];
  longDescription?: string;
  detailedDescription?: {
    sectionTitle: string;
    content: string;
    images?: string[];
  }[];
  features?: string[];
  images?: string[];
  status?: "In Progress" | "Completed" | "Maintenance";
  year?: string;
}

export default interface ContactSectionProps {
  title: string;
  content: ContactSectionContentProps;
}

export interface ContactSectionContentProps {
  email: string;
  socials: {
    linkedIn: string;
    github: string;
    instagram: string;
  };
}

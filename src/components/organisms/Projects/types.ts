// import { ProjectCardDataProps } from 'components/molecules/ProjectCard/types';
import { ProjectCardDataProps } from '../../molecules/ProjectCard/types';

export default interface ProjectsSectionProps {
  title: string;
  content: ProjectsSectionContentProps;
  className?: string;
}

export interface ProjectsSectionContentProps {
  items: ProjectCardDataProps[];
}

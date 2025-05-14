import { Project } from '../types/project';
import Button from './Button';
import { ButtonVariant } from '../styles/input-styles';

export default function ProjectsList({
  projects,
  onSelectProject,
}: {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {projects.map((project) => (
        <li key={project.id}>
          <Button
            variant={ButtonVariant.TRANSPARENT_WHITE}
            onClick={() => onSelectProject(project)}
          >
            {project.title}
          </Button>
        </li>
      ))}
    </ul>
  );
}

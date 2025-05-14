import Button from './Button';
import { ButtonVariant } from '../styles/input-styles';
import ProjectsList from './ProjectsList';
import { Project } from '../types/project';

export default function Sidebar({
  onAddProject,
  projects,
  onSelectProject,
}: {
  onAddProject: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}) {
  return (
    <div className="bg-black rounded-r-md h-full text-white">
      <h1 className="uppercase text-xl font-bold text-white pt-20 pl-6">Your Projects</h1>

      <div className="ml-6 mt-8">
        <Button variant={ButtonVariant.GRAY} onClick={onAddProject}>
          + Add Project
        </Button>
      </div>
      <div className="ml-4 mt-8">
        <ProjectsList projects={projects} onSelectProject={onSelectProject} />
      </div>
    </div>
  );
}

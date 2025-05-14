import { Project } from '../types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-10/12">
      <h2 className="text-3xl font-semibold">{project.title}</h2>
      <p className="text-stone-400 mt-2 text-sm">
        {project.dueDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
      <p
        className="
      text-black
      mt-2
      py-5
      text-sm
      whitespace-pre-wrap
      leading-6
      border-b-2
      border-stone-300
      "
      >
        {project.description}
      </p>
    </div>
  );
}

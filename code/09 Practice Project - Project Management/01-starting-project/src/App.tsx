import { useState } from 'react';

import MainLayout from './components/MainLayout';
import Projects from './components/Sidebar';
import CreateProject from './components/CreateProject';
import NewProject from './components/NewProject';
import { Project, Task } from './types/project';
import ProjectCard from './components/ProjectCard';

function App() {
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  function handleCreateProject() {
    setIsCreatingNewProject((prev) => !prev);
  }

  function handleCancel() {
    setIsCreatingNewProject(false);
  }

  function handleSaveProject(project: Project) {
    setProjects((prev) => [...prev, project]);
    setIsCreatingNewProject(false);
  }

  function handleSelectProject(project: Project) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id ? { ...p, isSelected: true } : { ...p, isSelected: false }
      )
    );
  }

  function handleAddTask(task: Task, project: Project) {
    setProjects((prev) =>
      prev.map((p) => (p.id === project.id ? { ...p, tasks: [...p.tasks, task] } : p))
    );
  }

  function handleClearTask(task: Task, project: Project) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id ? { ...p, tasks: p.tasks.filter((t) => t.id !== task.id) } : p
      )
    );
  }

  function selectContent() {
    if (isCreatingNewProject) {
      return <NewProject onCancel={handleCancel} onSaveProject={handleSaveProject} />;
    }

    const selectedProject = projects.find((p) => p.isSelected);
    if (selectedProject) {
      return (
        <ProjectCard projects={projects} onAddTask={handleAddTask} onClearTask={handleClearTask} />
      );
    }

    return <CreateProject onCreateProject={handleCreateProject} />;
  }

  return (
    <MainLayout
      sidebar={
        <Projects
          onAddProject={handleCreateProject}
          projects={projects}
          onSelectProject={handleSelectProject}
        />
      }
      content={selectContent()}
    />
  );
}

export default App;

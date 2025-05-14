import { useState } from 'react';

import MainLayout from './components/MainLayout';
import Projects from './components/Sidebar';
import CreateProject from './components/CreateProject';
import NewProject from './components/NewProject';
import { Project } from './types/project';
import ProjectCard from './components/ProjectCard';

function App() {
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    setSelectedProject(project);
  }

  function selectContent() {
    if (isCreatingNewProject) {
      return <NewProject onCancel={handleCancel} onSaveProject={handleSaveProject} />;
    }

    if (selectedProject) {
      return <ProjectCard project={selectedProject} />;
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

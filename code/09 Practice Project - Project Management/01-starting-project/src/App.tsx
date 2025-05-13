import { useState } from 'react';

import MainLayout from './components/MainLayout';
import Projects from './components/Sidebar';
import CreateProject from './components/CreateProject';
import NewProject from './components/NewProject';
import { Project } from './types/project';

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

  return (
    <MainLayout
      sidebar={<Projects onAddProject={handleCreateProject} />}
      content={
        isCreatingNewProject ? (
          <NewProject onCancel={handleCancel} onSaveProject={handleSaveProject} />
        ) : (
          <CreateProject onCreateProject={handleCreateProject} />
        )
      }
    />
  );
}

export default App;

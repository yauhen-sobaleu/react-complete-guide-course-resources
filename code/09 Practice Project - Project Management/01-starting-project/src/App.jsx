import { useState } from 'react';

import MainLayout from './components/MainLayout';
import Projects from './components/Sidebar';
import CreateProject from './components/CreateProject';
import NewProject from './components/NewProject';

function App() {
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);

  function handleCreateProject() {
    setIsCreatingNewProject((prev) => !prev);
  }

  return (
    <MainLayout
      sidebar={<Projects />}
      content={
        isCreatingNewProject ? (
          <NewProject />
        ) : (
          <CreateProject onCreateProject={handleCreateProject} />
        )
      }
    />
  );
}

export default App;

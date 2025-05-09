import { useState } from 'react';

import MainLayout from './components/MainLayout';
import Projects from './components/Sidebar';
import CreateProject from './components/CreateProject';
import NewProject from './components/NewProject';

function App() {
  const [isNewProject, setIsNewProject] = useState(false);

  function handleCreateProject() {
    setIsNewProject((prev) => !prev);
  }

  return (
    <MainLayout
      sidebar={<Projects />}
      content={
        isNewProject ? <NewProject /> : <CreateProject onCreateProject={handleCreateProject} />
      }
    />
  );
}

export default App;

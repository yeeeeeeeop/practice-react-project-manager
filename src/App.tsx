import { useState } from 'react';

import Sidebar from './components/Sidebar';
import NoProjectSelected from './components/NoProjectSelected';
import Project from './components/Project';
import NewProject from './components/NewProject';

import { ProjectItem } from './interfaces/types';

interface ProjectsState {
  createMode: boolean;
  selectedProjectId: string | null;
  projects: ProjectItem[];
}

const NEW = 'NEW';
const NOT_SELECTED = 'NOT_SELECTED';
const SELECTED = 'SELECTED';

function App() {
  const [projectsState, setProjectsState] = useState<ProjectsState>({
    createMode: false,
    selectedProjectId: null,
    projects: [],
  });

  console.log(projectsState);

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
      createMode: true,
    }));
  };

  const handleAddProject = (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }) => {
    setProjectsState((prevState) => {
      const newProject: ProjectItem = {
        ...projectData,
        id: Math.random().toString(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let renderMode;
  if (projectsState.selectedProjectId) {
    renderMode = SELECTED;
  } else if (projectsState.createMode) {
    renderMode = NEW;
  } else {
    renderMode = NOT_SELECTED;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {renderMode === NEW && <NewProject onAdd={handleAddProject} />}
      {renderMode === NOT_SELECTED && (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      )}
      {renderMode === SELECTED && <div>Project</div>}
    </main>
  );
}

export default App;

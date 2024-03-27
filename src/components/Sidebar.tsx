import React from 'react';

import Button from './Button';

import { ProjectItem } from '../interfaces/types';

interface SidebarComponent {
  onStartAddProject: () => void;
}

const Sidebar: React.FC<SidebarComponent> = ({ onStartAddProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={onStartAddProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </button>
      </div>

      {/* Project List */}
      {/* <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <Button onClick={() => onSelect(project.id)}>
              {project.title}
            </Button>
          </li>
        ))}
      </ul> */}
    </aside>
  );
};

export default Sidebar;

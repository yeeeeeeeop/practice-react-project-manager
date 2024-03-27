import React from 'react';

import Tasks from './Tasks';

import { ProjectItem, TaskItem } from '../types/interfaces';
import { addTaskFunc, deleteTaskFunc } from '../types/functions';

interface Props {
  project: ProjectItem | undefined;
  tasks: TaskItem[];
  onDelete: (id: string) => void;
  onAddTask: addTaskFunc;
  onDeleteTask: deleteTaskFunc;
}

const SelectedProject: React.FC<Props> = ({
  project,
  tasks,
  onDelete,
  onAddTask,
  onDeleteTask,
}) => {
  const { id, title, dueDate, description } = project!;
  const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;

import React, { useRef } from 'react';

// components
import Input from './Input';

// types
import { ProjectItem } from '../interfaces/types';

interface NewProjectComponent {
  onAdd: (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }) => void;
}

const NewProject: React.FC<NewProjectComponent> = ({ onAdd }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enteredTitle = titleRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;
    const enteredDueDate = dueDateRef.current!.value;

    // validation ...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;

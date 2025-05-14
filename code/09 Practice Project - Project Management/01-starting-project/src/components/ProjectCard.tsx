import { useState } from 'react';
import { Project, Task } from '../types/project';
import Input from './Input';
import Button from './Button';
import { ButtonVariant } from '../styles/input-styles';

interface ProjectCardProps {
  projects: Project[];
  onAddTask: (task: Task, project: Project) => void;
}

export default function ProjectCard({ projects, onAddTask, onClearTask }: ProjectCardProps) {
  const [taskTitle, setTaskTitle] = useState('');

  const activeProject = projects.find((project) => project.isSelected);
  if (!activeProject) {
    throw new Error('No active project found');
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  function handleAddTask() {
    if (!taskTitle.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle,
    };

    onAddTask(newTask, activeProject);
    setTaskTitle('');
  }

  return (
    <div className="w-10/12">
      <h2 className="text-3xl font-semibold">{activeProject.title}</h2>
      <p className="text-stone-400 mt-2 text-sm">
        {activeProject.dueDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
      <p className="text-gray-700 mt-2 py-5 text-sm whitespace-pre-wrap leading-6 border-b-2 border-stone-300">
        {activeProject.description}
      </p>
      <h3 className="text-2xl font-semibold mt-4">Tasks</h3>

      <div className="w-9/12 flex items-center gap-4 mt-4">
        <div className="flex-1">
          <Input id="task" label="" value={taskTitle} onChange={handleInputChange} />
        </div>
        <Button variant={ButtonVariant.TRANSPARENT_BLACK} onClick={handleAddTask}>
          Add Task
        </Button>
      </div>

      <div>
        {activeProject?.tasks.length > 0 && (
          <ul className="mt-8 rounded-md bg-stone-100">
            {activeProject.tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between px-4 py-4 border-b border-stone-200 last:border-b-0"
              >
                <p className="text-stone-800">{task.title}</p>
                <Button
                  variant={ButtonVariant.TRANSPARENT_BLACK}
                  onClick={() => onClearTask(task, activeProject)}
                >
                  Clear
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

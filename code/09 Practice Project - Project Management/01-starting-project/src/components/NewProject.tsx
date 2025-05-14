import { useState } from 'react';
import { ButtonVariant } from '../styles/input-styles';
import { Project } from '../types/project';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

const inputMargin = 'mb-4';

interface FormData {
  title: string | undefined;
  description: string | undefined;
  dueDate: Date | undefined;
}

const initialFormData: FormData = {
  title: undefined,
  description: undefined,
  dueDate: undefined,
};

export default function NewProject({
  onCancel,
  onSaveProject,
}: {
  onCancel: () => void;
  onSaveProject: (project: Project) => void;
}) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function handleSaveProject(event: React.FormEvent) {
    event.preventDefault();

    if (!formData.title?.trim() || !formData.description?.trim() || !formData.dueDate) {
      alert('Please fill in all fields');
      return;
    }

    onSaveProject({
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      dueDate: new Date(formData.dueDate),
    });
  }

  return (
    <>
      <div className="w-10/12">
        <div className="text-right">
          <Button variant={ButtonVariant.TRANSPARENT_BLACK} onClick={onCancel}>
            Cancel
          </Button>
          <Button form="new-project-form" variant={ButtonVariant.BLACK}>
            Save
          </Button>
        </div>

        <form id="new-project-form" onSubmit={handleSaveProject}>
          <div className={inputMargin}>
            <Input id="title" type="text" label="Title" onChange={handleInputChange} />
          </div>
          <div className={inputMargin}>
            <TextArea id="description" label="Description" onChange={handleInputChange} />
          </div>
          <div className={inputMargin}>
            <Input id="dueDate" type="date" label="Due Date" onChange={handleInputChange} />
          </div>
        </form>
      </div>
    </>
  );
}

import icon from '/logo.png';
import Button from './Button';
import { ButtonVariant } from '../styles/input-styles';

export default function CreateProject({ onCreateProject }: { onCreateProject: () => void }) {
  return (
    <section className="text-center">
      <img src={icon} className="w-14 h-14 mx-auto mb-3" />
      <h2 className="capitalize text-xl font-bold text-stone-500">No project selected</h2>
      <p className="text-stone-400 mt-3">Select a project or get started with a new one</p>

      <div className="mt-8">
        <Button variant={ButtonVariant.GRAY} onClick={onCreateProject}>
          Create new project
        </Button>
      </div>
    </section>
  );
}

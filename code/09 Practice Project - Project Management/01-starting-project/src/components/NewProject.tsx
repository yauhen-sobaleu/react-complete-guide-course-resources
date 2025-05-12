import { ButtonVariant } from '../styles/input-styles';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

export default function NewProject() {
  const inputMargin = 'mb-4';

  return (
    <>
      <div className="px-8 w-10/12">
        <div className="text-right">
          <Button variant={ButtonVariant.WHITE}>Cancel</Button>
          <Button form="new-project-form" variant={ButtonVariant.BLACK}>
            Save
          </Button>
        </div>

        <form id="new-project-form">
          <div className={inputMargin}>
            <Input id="title" type="text" label="Title" />
          </div>
          <div className={inputMargin}>
            <TextArea id="description" label="Description" />
          </div>
          <div className={inputMargin}>
            <Input id="duedate" type="date" label="Due Date" />
          </div>
        </form>
      </div>
    </>
  );
}

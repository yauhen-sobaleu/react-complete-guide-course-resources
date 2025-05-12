import Input from './Input';
import TextArea from './TextArea';

export default function NewProject() {
  const inputMargin = 'mb-4';

  return (
    <form>
      <div className="px-8 w-10/12">
        <div className={inputMargin}>
          <Input id="title" type="text" label="Title" />
        </div>
        <div className={inputMargin}>
          <TextArea id="description" label="Description" />
        </div>
        <div className={inputMargin}>
          <Input id="duedate" type="date" label="Due Date" />
        </div>
      </div>
    </form>
  );
}

import Input from './Input';

export default function NewProject() {
  return (
    <form>
      <div className="px-8 w-10/12">
        <div className="mb-4">
          <Input id="title" type="text" label="Title" />
        </div>
        <div className="mb-4">
          <Input id="duedate" type="date" label="Due Date" />
        </div>
      </div>
    </form>
  );
}

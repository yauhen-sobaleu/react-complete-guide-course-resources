import Input from './Input';

export default function NewProject() {
  return (
    <form>
      <div className="px-8 w-11/12">
        <div className="mb-4">
          <Input id="title" type="text" label="Title" />
        </div>
        <div className="mb-4">
          <Input id="description" type="text" label="Description" />
        </div>
      </div>
    </form>
  );
}

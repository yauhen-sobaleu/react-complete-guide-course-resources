import Input from './Input';

export default function NewProject() {
  return (
    <form>
      <Input id="title" type="text" label="Title" />
      <Input id="description" type="text" label="Description" />
    </form>
  );
}

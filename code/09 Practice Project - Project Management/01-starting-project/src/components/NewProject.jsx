import Input from './Input';

export default function NewProject({ className = '' }) {
  return (
    <section className={className}>
      <Input id="title" type="text" label="Title" className="mb-4" />
      <Input id="description" type="text" label="Description" className="mb-4" />
    </section>
  );
}

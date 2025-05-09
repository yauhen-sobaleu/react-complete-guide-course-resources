import Button from './Button';

export default function Sidebar() {
  return (
    <div className="bg-black rounded-r-md h-full">
      <h1 className="uppercase text-xl font-bold text-white pt-20 pl-6">Your Projects</h1>

      <Button className="ml-6 mt-8">+ Add Project</Button>
    </div>
  );
}

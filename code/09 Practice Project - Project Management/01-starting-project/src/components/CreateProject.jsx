import icon from "../../public/logo.png";
import Button from "./Button";
export default function CreateProject() {
  return (
    <section className="text-center">
      <img src={icon} className="w-14 h-14 mx-auto mb-3 mt-72" />
      <h2 className="capitalize text-xl font-bold text-stone-500">
        No project selected
      </h2>
      <p className="text-stone-400 mt-3">
        Select a project or get started with a new one
      </p>

      <Button className="mt-8 px-5">
        Create new project
      </Button>
    </section>
  );
}

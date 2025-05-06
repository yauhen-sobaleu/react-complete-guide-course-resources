export default function Sidebar() {
  return (
    <section aria-label="Боковая панель управления проектами">
      <div className="bg-black h-screen w-72 rounded-r-md">
        <h1 className="uppercase text-xl font-bold text-white pt-20 pl-6">
          Your Projects
        </h1>

        <button className="bg-stone-700 p-2 rounded-md ml-6 mt-8">
          <span className="text-stone-400 hover:text-stone-300">
            + Add Project
          </span>
        </button>
      </div>
    </section>
  );
}
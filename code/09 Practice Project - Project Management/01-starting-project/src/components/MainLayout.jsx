export default function MainLayout({ sidebar, content }) {
  return (
    <main>
      <aside
        className="
          bg-black
          h-screen w-72
          rounded-r-md
          fixed
          left-0
          top-0
          "
      >
        {sidebar}
      </aside>
      <section className="ml-72">{content}</section>
    </main>
  );
}

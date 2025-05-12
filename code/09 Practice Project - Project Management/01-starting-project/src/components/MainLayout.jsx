export default function MainLayout({ sidebar, content }) {
  return (
    <main>
      <aside
        className="
          h-screen
          w-72
          fixed
          left-0
          top-0
          "
      >
        {sidebar}
      </aside>
      <section className="ml-72 mt-32">{content}</section>
    </main>
  );
}

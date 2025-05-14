export default function MainLayout({
  sidebar,
  content,
}: {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}) {
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
      <section className="ml-80 mt-20">{content}</section>
    </main>
  );
}

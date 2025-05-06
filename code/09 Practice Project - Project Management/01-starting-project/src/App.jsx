import Projects from "./components/Sidebar";
import CreateProject from "./components/CreateProject";

function App() {
  return (
    <>
      <main>
        <div className="bg-black h-screen w-72 rounded-r-md fixed left-0 top-0">
          <Projects />
        </div>
        <div className="ml-72">
          <CreateProject />
        </div>
      </main>
    </>
  );
}

export default App;

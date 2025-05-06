import Projects from "./components/Sidebar";
import CreateProject from "./components/CreateProject";

function App() {
  return (
    <>
      <main>
        <Projects className="bg-black h-screen w-72 rounded-r-md fixed left-0 top-0"/>
        <CreateProject className='text-center ml-72' />
      </main>
    </>
  );
}

export default App;

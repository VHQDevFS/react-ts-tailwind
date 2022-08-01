import './styles/global.scss';

function App() {
  const a = 'a';
  return (
    <main className="container mx-auto">
      <h1 className="bg-red mx-1 px-2 pt-4 ">
        Set up webpack react with environment {process.env.name}
      </h1>
    </main>
  );
}

export default App;

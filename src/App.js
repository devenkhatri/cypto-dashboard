import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header h-72 w-full">
        <div className="grid grid-cols-1 gap-6 place-content-center p-8 text-center">          
          <div className="text-7xl font-bold text-green-300">$ 2000.00</div>
          <div className="text-xl text-yellow-200">Last updated: 2 mins ago</div>
        </div>
      </header>
    </div>
  );
}

export default App;

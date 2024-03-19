import './App.css';
import { BusquedaComponent } from './components/BusquedaComponent';
import { LeftBarComponent } from './components/LeftBarComponent';

function App() {

  return (
    <>
      <div className="w-full antialiased h-screen ">
        <div className="grid grid-cols-[20%,80%]">
          <LeftBarComponent />
          <BusquedaComponent />
        </div>
      </div>
    </>
  )
}

export default App

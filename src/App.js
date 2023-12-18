import './App.scss';
import "flowbite/dist/flowbite";
import 'flowbite/dist/flowbite.css';
import 'flowbite/dist/flowbite';
import PrivateRouter from './PrivateRouter';

function App() {
  return (
    <>
      <PrivateRouter />
    </>
  );
}

export default App;

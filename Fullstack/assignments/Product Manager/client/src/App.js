import './App.css';
// import CreateProduct from './components/CreateProduct';
// import DisplayAll from './components/DisplayAll';
import OneProduct from './components/OneProduct';
import {Router} from '@reach/router';
import Main from './views/main';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <CreateProduct path = "/"/>
        <DisplayAll path = "/"/> */}
        <Main path = "/" />
        <OneProduct path = "/products/:id"/>
        <UpdateProduct path ="/products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;

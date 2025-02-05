import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;

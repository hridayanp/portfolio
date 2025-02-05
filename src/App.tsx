import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

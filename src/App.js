import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ViewPage from './components/ViewPage';

function App() {
  return (
  <BrowserRouter>
  <Routes>
          <Route path ="/" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/view" element={<ViewPage/>}/>
     </Routes>
  </BrowserRouter>
  );
}

export default App;

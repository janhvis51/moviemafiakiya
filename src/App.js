import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import SimpleBottomNavigation from './components/MainNav'
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
function App() {
  return (
    <BrowserRouter>
      <Header/>
    <div className="App">
      <Container>
        <Routes>
          <Route path='/' component={Trending} exact/>
          <Route path='/Movies' component={Movies}/>
          <Route path='/Series' component={Series}/>
          <Route path='/Search' component={Search}/>
        </Routes>
      </Container>
    </div>
      <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;
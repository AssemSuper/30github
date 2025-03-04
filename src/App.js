
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import BasicExample from './pages/Example.tsx';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id="page=body">
        <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        {/* <Route path ="/articles" element={<ArticleList/>}/> */}
       <Route path ="/articles/:articleId" element={<ArticlePage/>} />
       <Route path ="*" element={<NotFoundPage/>} />
       <Route path ="/" element={<BasicExample/>}/>
        
        </Routes>
        
      </div>

    </div></BrowserRouter>
     
  );
}

export default App;

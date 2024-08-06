
import ArticlesList from './components/ArticlesList'
import './App.css'
import SingleArticles from "./components/SingleArticles";

import WelcomePage from './components/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';

function App() {

  return (

<>

<Logo />

     <Routes>

        <Route path="/" element={<WelcomePage />}/>

        <Route path="/articles" element={<ArticlesList />}/>

        <Route path="/articles/:article_id" element={<SingleArticles />}/>

     </Routes>

</>

  )
}

export default App

// The link changes the url 
// the route wraps around the component allows the components to use this

import ArticlesList from './components/ArticlesList'
import './App.css'
import SingleArticles from "./components/SingleArticles";
import WelcomePage from './components/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import Topics from './components/Topics';
import SingleTopic from './components/SingleTopic';


function App() {

  return (

<>

<div className='header'>
  
<Logo />

<NavBar />

</div>

     <Routes>

        <Route path="/" element={<WelcomePage />}/>

        <Route path="/articles" element={<ArticlesList />}/>

        <Route path="/articles/:article_id" element={<SingleArticles />}/>

        <Route path="/topics" element={<Topics/>}></Route>

        <Route path="/topics/:topic" element={<SingleTopic />}></Route>

     </Routes>

</>

  )
}

export default App


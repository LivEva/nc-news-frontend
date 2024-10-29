
import ArticlesList from './components/ArticlesList'
import './App.css'
import SingleArticles from "./components/SingleArticles";
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Topics from './components/Topics';
import SingleTopic from './components/SingleTopic';
import Footer from './components/main/Footer';


function App() {



  return (

<>



<div className='header'>
  

<NavBar />

</div>

<Routes>
        {/* Redirect root path to /articles */}
        <Route path="/" element={<Navigate to="/articles" replace />} />

        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticles />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<SingleTopic />} />
      </Routes>

     <Footer />

</>

  )
}

export default App


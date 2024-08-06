import { useEffect, useState } from "react"
import { allArticles } from "../api"
import { NavLink } from "react-router-dom";
import ArticleCards from "./ArticleCards";
import Logo from "./Logo";


const ArticlesList = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        allArticles().then((articlesArray) => {

            setArticles(articlesArray)
            setIsLoading(false)

        })
    }, [])

    if(isLoading){
        return <p>Brewing the tea...</p>
    }

    return (

    
        <div className="articles-container">
    
    {/* nav bar, logo and title would go here */}

        {articles.map((article) => {


            return <ArticleCards key={article.article_id} article={article}/>
          
        })}
        
        </div>
    
    )


}

export default ArticlesList
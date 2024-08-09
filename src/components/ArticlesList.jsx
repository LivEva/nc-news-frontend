import { useEffect, useState } from "react"
import { allArticles } from "../api"
import ArticleCards from "./ArticleCards";
import React from "react";
import Lottie from "lottie-react";
import loading from '../loading-animation.json'



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
        return <div>
            <p>Brewing the tea...</p>
           <Lottie animationData={loading} loop={true} />
       </div>
      
    }

    return (

    
        <div className="articles-container">


        {articles.map((article) => {


            return <ArticleCards key={article.article_id} article={article}/>
          
        })}
        
        </div>
    
    )


}

export default ArticlesList
import { useEffect, useState } from "react"
import { allArticles } from "../api"
import ArticleCards from "./ArticleCards";
import React from "react";
import Lottie from "lottie-react";
import loading from '../loading-animation.json'
import SortBy from "./SortBy";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[searchParams, setSearchParams] = useSearchParams();
    const [sortByCriteria, setSortByCriteria] = useState('created_at');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {

        const sort_by = searchParams.get('sort_by') || 'created_at';
        const order = searchParams.get('order') || 'desc';
   
        allArticles(sort_by, order).then((articlesArray) => {

            setArticles(articlesArray)
            setIsLoading(false)

        })
    }, [searchParams])

    if(isLoading){
        return <div className="loading-teacup">
        
           <Lottie animationData={loading} loop={true} id="teacup"/>
           <p>Brewing the tea...</p>
       </div>
      
    }

    return (

    <div>

        <SortBy setSearchParams={setSearchParams} setSortByCriteria={setSortByCriteria} setSortOrder={setSortOrder} sortByCriteria={sortByCriteria} sortOrder={sortOrder} />

        <div className="articles-container">

        {articles.map((article) => {


            return <ArticleCards key={article.article_id} article={article}/>
          
        })}
        
        </div>
        </div>

    
    )


}

export default ArticlesList
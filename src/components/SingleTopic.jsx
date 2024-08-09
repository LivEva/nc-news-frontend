import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTopic } from "../api";
import ArticleCards from "./ArticleCards";


const SingleTopic = () => {

    const { topic } = useParams();

    const[articles, setArticles] = useState([]);


    useEffect(() => {

        getSingleTopic(topic).then((response) => {

            setArticles(response.articles)

        })

    },[])

    return (

        <div>

           <h1>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h1>

           <br />
           <br />
      
        <div className="articles-container">


            {articles.map((article) => {


            return (

                <ArticleCards key={article.article_id} article={article}/>

            )
            
            
            })}

    
        </div>

        </div>
    )


}

export default SingleTopic;
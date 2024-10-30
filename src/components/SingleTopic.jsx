import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTopic } from "../api";
import ArticleCards from "./ArticleCards";
import Alert from '@mui/material/Alert';
import '../styles/topics.css'


const SingleTopic = () => {

    const { topic } = useParams();

    const[articles, setArticles] = useState([]);
    const[isError, setIsError] = useState(null);
  


    useEffect(() => {

        getSingleTopic(topic).then((response) => {

            setArticles(response.articles)

            setIsError(null);

        }).catch((error) => {

           setIsError(error);
           setArticles([]);

        })

    },[])


    if(isError){
        return  <Alert variant="filled" severity="error" id='error'><p style={{ color: 'red' }}>Sorry, we don't have any tea by that flavour. Please try different one.</p></Alert>
    }

    return (

        <div>

           <h1 className="topics-title">{topic.charAt(0).toUpperCase() + topic.slice(1)}</h1>

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
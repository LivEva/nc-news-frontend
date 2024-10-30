import { useEffect, useState } from "react"
import { allArticles } from "../api"
import ArticleCards from "./ArticleCards";
import React from "react";
import Lottie from "lottie-react";
import teacup from '../icons/teacup.json'
import SortBy from "./SortBy";
import { useSearchParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import '../styles/articleList.css'
import '../styles/loading.css'


const ArticlesList = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[searchParams, setSearchParams] = useSearchParams();
    const [sortByCriteria, setSortByCriteria] = useState('created_at');
    const [sortOrder, setSortOrder] = useState('desc');
    const [error, setError] = useState(null);

    useEffect(() => {

        const sort_by = searchParams.get('sort_by') || 'created_at';
        const order = searchParams.get('order') || 'desc';

        setIsLoading(true)
   
        allArticles(sort_by, order).then((articlesArray) => {

            setArticles(articlesArray)
            setIsLoading(false)

        }).catch((error) => {

            setError(error)
            setIsLoading(false)
            setArticles([])

        })
    }, [searchParams])


    if(isLoading){
        return <div className="loading-teacup">
        
           <Lottie animationData={teacup} loop={true} id="teacup"/>
           
       </div>
      
    }

    if(error){

        const errorType = error.response.status;

        if(errorType === 404){

            return  <Alert variant="filled" severity="error" className='error'><p style={{ color: 'black' }}>{error.response.status} error code: Cannot find collection of tea. Please check input.</p></Alert>

        }

        else if(errorType === 400){

            return <Alert variant="filled" severity="error" className='error'><p style={{ color: 'red' }}>{error.response.status} error code: Bad request for tea. Please check input.</p></Alert>

        }
        else{

            return <Alert variant="filled" severity="error" className='error'><p style={{ color: 'red' }}>There seems to be an error. Please try again later.</p></Alert>

        }

       

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
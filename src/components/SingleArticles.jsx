import { useEffect, useState } from "react"
import { getArticlesbyId } from '../api'
import { Link, useParams } from "react-router-dom"
import Comments from "./Comments";



const SingleArticles = () => {

    const { article_id } = useParams();

    const[article, setArticle] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getArticlesbyId(article_id).then((response) => {

            setArticle(response)
            setIsLoading(false)

            
        })
    }, [article_id])

    if(isLoading){
        return <p>Tea selected... boiling the water...</p>
    }

    return (
        

        <div id="single-article-container">

       <h2>{article.title}</h2>
       
       <p>{article.topic}</p>

       <img src={article.article_img_url} id="single-article-img" />

       <p>Author: {article.author}</p>

       <p>Published: {article.created_at}</p>

       <p>Votes: {article.votes}</p>

       <p>{article.body}</p>

       <p>Comments: {article.comment_count}</p>

       <Link to={`/articles/${article_id}`} ></Link>
   

       <div className="comments-container">

       <Comments article_id={article.article_id}/>


       </div>
      
        
       </div>

        
        

    )


}

export default SingleArticles
import { useEffect, useState } from "react"
import { getArticlesbyId } from '../api'
import { Link, useParams } from "react-router-dom"
import Comments from "./Comments";
import ArticleVoting from "./ArticleVoting";
import AddComment from "./AddComment";



const SingleArticles = () => {

    const { article_id } = useParams();

    const[article, setArticle] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[votes, setVotes] = useState();
    const[comments, setComments] = useState([]);

    useEffect(() => {

        getArticlesbyId(article_id).then((response) => {


            setVotes(response.votes)
            setArticle(response)
            setIsLoading(false)

            
        })
    }, [article_id])

    if(isLoading){
        return <p>Tea selected... boiling the water...</p>
    }

    return (
        

<div id="single-article-container">

      <Link to={`/articles/${article_id}`} ></Link>

       <h2>{article.title}</h2>
       
       <p>{article.topic}</p>

       <img src={article.article_img_url} id="single-article-img" />

       <p>Author: {article.author}</p>

       <p>Published: {article.created_at}</p>

       <p>{article.body}</p>

       <ArticleVoting votes={votes} setVotes={setVotes} article_id={article_id}/>

       <p>Comments: {article.comment_count}</p>

       <AddComment setArticle={setArticle} comments={comments} setComments={setComments} />
   
       <div className="comments-container">

         <Comments article_id={article.article_id} comments={comments} setComments={setComments}/>


      </div>
      
        
</div>

        
        

    )


}

export default SingleArticles
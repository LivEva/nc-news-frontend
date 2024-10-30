import { useEffect, useState } from "react"
import { getArticlesbyId } from '../api'
import { Link, useParams } from "react-router-dom"
import Comments from "./Comments";
import ArticleVoting from "./ArticleVoting";
import AddComment from "./AddComment";
import Alert from '@mui/material/Alert';
import '../styles/singleArticle.css'


const SingleArticles = () => {

    const { article_id } = useParams();

    const[article, setArticle] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[votes, setVotes] = useState();
    const[comments, setComments] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {

        getArticlesbyId(article_id, setError).then((response) => {

            if(response){

                setVotes(response.votes)
                setArticle(response)
                setIsLoading(false)

            }

            setIsLoading(false)
            
        }).catch((error) => {

            setError(error)
            setIsLoading(false)

        })
    }, [article_id])

    if(isLoading){
        return <p>Tea selected... boiling the water...</p>
    }

    if(error){

        const errorType = error.response.status;

        if(errorType === 404){

            return  <Alert variant="filled" severity="error" id='error'><p style={{ color: 'red' }}>{error.response.status} error code: We don't have this tea, please try a different one.</p></Alert>

        }

        else if(errorType === 400){

            return <Alert variant="filled" severity="error" id='error'><p style={{ color: 'red' }}>{error.response.status} error code: Bad request for tea. Please check input.</p></Alert>

        }
        else{

            return <Alert variant="filled" severity="error" id='error'><p style={{ color: 'red' }}>There seems to be an error. Please try again later.</p></Alert>

        }

       

    }

    return (
        

<div className="single-article-container">

      <Link to={`/articles/${article_id}`} ></Link>

    <div className="content">

            <img src={article.article_img_url} id="single-article-img" />

            <h2>{article.title}</h2>

            <div className="author-and-date">

                <p>Author: {article.author}</p>

                <p>Published: {article.created_at}</p>

    </div>

            <p className="article-body">{article.body}</p>


    <div className="voting-container">
        
            <ArticleVoting votes={votes} setVotes={setVotes} article_id={article_id}/>

    </div>

    <div className="comments-container">

            <p>Comments: {article.comment_count}</p>

            <AddComment setArticle={setArticle} comments={comments} setComments={setComments} />

            <Comments article_id={article.article_id} comments={comments} setComments={setComments}/>

    </div>

    </div>

</div>
        
    )
}

export default SingleArticles
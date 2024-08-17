import { useEffect, useState } from "react"
import { postComment } from "../api"
import { useParams } from "react-router-dom";


const AddComment = ({setArticle, comments, setComments}) => {

    const { article_id } = useParams();

    const[name, setName] = useState('');
    const[comment, setComment] = useState('');
    const[success, setSuccess] = useState(false);
    const[error, setError] = useState('');


    const handleSubmit = (event) => {
    
        event.preventDefault();

        if(comment.trim() === ''){
            setError('please enter comment');
            return;
        }

        postComment(article_id, name, comment).then(({ data }) => {

            const newComment = data.comment

            setComments([...comments, newComment])
        
            setSuccess(true)

        })

    }

    const handleComment = (event) => {

        const value = event.target.value;

        setComment(value)

    }

    return (

        <div>

        <form className="form">

          
               
             <input onChange={handleComment}type="text"name="comment"/>
         

             <button onClick={handleSubmit} type="text" name="submit">add comment</button>

        </form>

        {success ? <p>Tea has been served!</p> : null}
        {error && <p>{error}</p>}

        </div>

    );
}

export default AddComment
import { useEffect, useState } from "react"
import { postComment } from "../api"
import { useParams } from "react-router-dom";


const AddComment = ({setArticle, comments, setComments}) => {

    const { article_id } = useParams();

    const[name, setName] = useState('');
    const[comment, setComment] = useState('');
    const[success, setSuccess] = useState(false);

    const handleName = (event) => {

        const value = event.target.value;

        setName(value)

        // console.log(value)
    }

    const handleSubmit = (event) => {
    
        event.preventDefault();

        // console.log({ name, comment })

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

            <label htmlFor="username">
                username
             <input onChange={handleName}type="text" name="username"/>
             </label>

             <label htmlFor="comment">
                comment
             <input onChange={handleComment}type="text"name="comment"/>
             </label>

             <button onClick={handleSubmit} type="text" name="submit">add comment</button>

        </form>

        {success ? <p>Tea has been served!</p> : null}

        </div>

    );
}

export default AddComment
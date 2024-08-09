import { useEffect, useState } from "react"
import { deleteComment, getComments } from "../api"


const Comments = ({article_id, comments, setComments}) => {

    console.log(comments, "THIS IS THE COMMENTS")


    // const[comments, setComments] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const[success, setSuccess] = useState(false);
    const[deletedComment, setDeletedComment] = useState(null);

    const username = 'grumpy19';
  
    useEffect(() => {

        getComments(article_id).then((commentsObject) => {

            setComments(commentsObject.comments)
            setIsLoading(false)



        }) .catch((error) => {

            setIsError(error)
    
     
        })
    }, [article_id])

    const handleDelete = (comment_id) => {

      deleteComment(comment_id).then((response) => {

        console.log(response)

        if(response){

            const updatedComments = comments.filter((comm) => 

                comm.comment_id !== comment_id

            )

        setSuccess(true)

            setDeletedComment(comment_id)

            setTimeout(() => setComments(updatedComments), 1000)

            console.log(updatedComments)
     
        }

      })

    }

    if(isLoading){
        return <p>Gathering fellow tea drinkers...</p>
    }

    return (

        <div>

        {comments.map((comment) => {

            return <div className="comment-card" key={comment.comment_id}>

                <h4>{comment.author}</h4>
                <p>{comment.body}</p>
                <p>votes: {comment.votes}</p>

                <button onClick={() => handleDelete(comment.comment_id)} disabled={username !== comment.author}>Delete Tea!</button>

                {deletedComment === comment.comment_id && <p>Tea is deleted!</p>}


            </div>
        })}


        </div>

    )

}

export default Comments
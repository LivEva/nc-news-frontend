import { useEffect, useState } from "react"
import { getComments } from "../api"
import AddComment from "./AddComment";

const Comments = ({article_id, comments, setComments}) => {


    // const[comments, setComments] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
  


    useEffect(() => {

        getComments(article_id).then((commentsObject) => {

            setComments(commentsObject.comments)
            setIsLoading(false)



        }) .catch((error) => {

            setIsError(error)
    
     
        })
    }, [article_id])

  

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
                

            </div>
        })}


        </div>


    )


}

export default Comments
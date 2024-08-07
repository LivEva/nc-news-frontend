import { useState } from "react"
import { changeVote } from "../api";



const ArticleVoting = (props) => {

    const { article_id, votes, setVotes } = props;

    const[isTea, setIsTea] = useState(false);
    const[isNotTea, setIsNotTea] = useState(false);
    const[error, setError] = useState(false);



    const handleUpVote = () => {


        changeVote(article_id, 1, setError).then((data) => {

            error ? setVotes(votes + 1) : setVotes(votes)

            setVotes(data.votes)
            setIsTea(true)
            setIsNotTea(false)
        

        }).catch((error) => {

            setIsTea(true)
            setIsNotTea(true)
        })
    

    }

    const handleDownVote = () => {

        changeVote(article_id, -1, setError).then((data) => {

            setVotes(votes - 1);

            setVotes(data.votes)
            setIsNotTea(true)
            setIsTea(false)
         
        }).catch((error) => {
            setVotes(0)
            setIsTea(true)
            setIsNotTea(true)
        })
    
    }

    return (

        <div id="votes-button">

            <p>Votes: {votes}</p>

            <button onClick={handleUpVote} disabled={isTea}>That's the tea!</button>

            <button onClick={handleDownVote} disabled={isNotTea}>That's not the tea!</button>

            {error && <p>{error.message}. Tea went cold.</p>}


        </div>

    )

}

export default ArticleVoting


import { useState } from "react"
import { changeVote } from "../api";
import thumbsUp from '../assets/thumbsUp.png'
import thumbsDown from '../assets/thumbsDown.png'
import '../styles/voting.css'

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

        <div className="voting-container">
        <p className="votes-count">Votes: {votes}</p>
    
        <div className="voting-buttons">
            <button className="vote-button" onClick={handleUpVote} disabled={isTea}>
                <img className="icon" src={thumbsUp} alt="Thumbs up" />
                That's the tea!
            </button>
    
            <button className="vote-button" onClick={handleDownVote} disabled={isNotTea}>
                <img className="icon" src={thumbsDown} alt="Thumbs down" />
                That's not the tea!
            </button>
        </div>
    
        {error && <p className="error-message">{error.message}. Tea went cold.</p>}
    </div>
    

    )

}

export default ArticleVoting


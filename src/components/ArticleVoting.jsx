import { useState } from "react"
import { changeVote } from "../api";



const ArticleVoting = (props) => {

    const { article_id, votes, setVotes } = props;

    const[isTea, setIsTea] = useState(false);
    const[isNotTea, setIsNotTea] = useState(false);



    const handleUpVote = () => {

        setVotes(votes + 1);

        changeVote(article_id, 1).then((data) => {

            setVotes(data.votes)
            setIsTea(true)
            setIsNotTea(false)

        })

    }

    const handleDownVote = () => {

        setVotes(votes - 1);

        changeVote(article_id, -1).then((data) => {

            setVotes(data.votes)
            setIsNotTea(true)
            setIsTea(false)
         


        }).catch((error) => {

            console.log(error)

        })
    
    }

    return (

        <div id="votes-button">

            <p>Votes: {votes}</p>

            {/* // Need to bring accross the original vote data and replace it with the votes here. */}

            <button onClick={handleUpVote} disabled={isTea}>That's the tea!</button>

            <button onClick={handleDownVote} disabled={isNotTea}>That's not the tea!</button>

          

        </div>

    )

}

export default ArticleVoting

// This function needs a button the user can click when they want to add a vote to the article. 

//The effects of this button needs to change the vote count of this article when the button is clicked.
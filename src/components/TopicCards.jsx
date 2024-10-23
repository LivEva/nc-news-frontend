import { Link } from "react-router-dom";
import '../styles/topics.css'

const TopicCards = (props) => {

    const { topic } = props;

    return (

        <div className="topics-card">

            <Link to={`/topics/${topic.slug}`}>

            <h2>{topic.slug}</h2>

            </Link>

            <p>{topic.description}</p>
            
        
        </div>
        
    )
}


export default TopicCards;
import { Link } from "react-router-dom";
import '../styles/topics.css'

const TopicCards = (props) => {

    const { topic } = props;

    const topicTitle = topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1);

    return (

        <div className="topics-card">

            <Link to={`/topics/${topic.slug}`}>

            <h2>{topicTitle}</h2>

            </Link>

            <p>{topic.description}</p>
            
        </div>
        
    )
}


export default TopicCards;
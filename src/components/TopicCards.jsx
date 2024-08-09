import { Link } from "react-router-dom";

const TopicCards = (props) => {

    const { topic } = props;

    return (

        <section id="topic-cards">

            <Link to={`/topics/${topic.slug}`}>

            <h2>{topic.slug}</h2>

            </Link>

            <p>{topic.description}</p>
            
        
        </section>
        
    )
}


export default TopicCards;
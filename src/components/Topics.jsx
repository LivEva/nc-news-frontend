import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicCards from "./TopicCards";
import React from "react";
import '../styles/topics.css'

const Topics = () => {

    const[topics, setTopics] = useState([]);
    const[error, setError] = useState(false);
    const[isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        getTopics(setError).then((topicsArray) => {

            setTopics(topicsArray.topics)
            setIsLoading(false)

        }).catch((error) => {

            setError(error)

            console.log(error)

        })
    }, [])

    if(isLoading){
        return <p>Prepping the tea...</p>
    }

    return (

        <div className="whole-container">

             <h1 className="topics-title">Tea Selection</h1>

         <div className="topics-container">


            {topics.map((topic, index) => {
             
             return <ul key={index}>

            <TopicCards topic={topic}/>

            </ul>
            

            })}



</div>

    
      
</div>
        
        
      
    )

}

export default Topics;
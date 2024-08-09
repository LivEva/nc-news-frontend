import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicCards from "./TopicCards";
import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {

    const[topics, setTopics] = useState([]);


    useEffect(() => {

        getTopics().then((topicsArray) => {

            setTopics(topicsArray.topics)

        })
    }, [])

    return (

        <div>

            <h1>Tea Selection</h1>
         
            {topics.map((topic) => {
             
             return <ul key={topic.id}>

            <TopicCards topic={topic}/>

            </ul>

            })}

        
        </div>
    )

}

export default Topics;
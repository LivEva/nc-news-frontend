import { useEffect, useState } from "react"
import { welcomePage } from "../api"
import Lottie from "lottie-react";
import React from "react";
import loading from '../loading-animation.json'

const WelcomePage = () => {

    const [welcome, setWelcome] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        welcomePage().then((response) => {

            setWelcome(response)
            setIsLoading(false)

        })
    }, [])

    if(isLoading){
        <p>Opening the teashop...</p>
            return <Lottie
              animationData={loading}
              loop={true}
            />
        
      }

    return (

        <div className="welcome-page" >

            <div id="massive-cupoftea">

         

           </div>
       
        </div>
    )


}

export default WelcomePage
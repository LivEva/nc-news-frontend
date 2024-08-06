import { useEffect, useState } from "react"
import { welcomePage } from "../api"
import { NavLink } from "react-router-dom";

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
    }

    return (

        <div className="welcome-page" >

            <div id="massive-cupoftea">

         

           </div>
       
        </div>
    )


}

export default WelcomePage
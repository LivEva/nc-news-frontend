
import { useEffect, useState } from "react"
import allArticles from "../api"


const ArticlesList = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        allArticles().then((articlesArray) => {

            setArticles(articlesArray)
            setIsLoading(false)

        })
    }, [])

    if(isLoading){
        return <p>Brewing the tea...</p>
    }

    return (


        <div className="articles-container">

        {articles.map((article) => {

            return <div className="articles-list" key={article.article_id}>

                <button id="articles-list-buttons">

                  
                <img src={article.article_img_url} alt="image" id="article-list-img" />
                <h2 id="article-title">{article.title}</h2> 

                </button>

                

            </div>
          
        })}
        
        </div>
    
    )


}

export default ArticlesList
import { Link } from "react-router-dom";
import '../styles/articleCards.css'

const ArticleCards = (props) => {

    const { article } = props;

    return (

        <div className="article-card" >

        <Link to={`/articles/${article.article_id}`}>

            <h2>{article.title}</h2>
            <img src={article.article_img_url} />
            <p className="author">Written  by {article.author}</p>

        </Link>

        </div>

    )

}

export default ArticleCards
import { Link } from "react-router-dom";

const ArticleCards = (props) => {

    const { article } = props;

    return (

        <section id="article-card" >

        <Link to={`/articles/${article.article_id}`}>

            <h2>{article.title}</h2>
            <img src={article.article_img_url} />

        </Link>

        </section>

    )

}

export default ArticleCards
import axios from "axios"
import React from "react"

const api = axios.create({baseURL: "https://be-nc-news-lhaf.onrender.com"});

const allArticles = () => {

    return api.get("/api/articles").then(({ data }) => {

        return data.articles;


    })
}

const getArticlesbyId = (article_id) => {

    return api.get(`/api/articles/${article_id}`).then(({ data }) => {

        return data.article;
    })
}

const welcomePage = () => {

    return api.get(`/api`).then((response) => {

        return response
    })

}

const getComments = (article_id) => {

    return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {

        return data;
    })
}

const changeVote = (article_id, votes, setError) => {

    const voteInfo = {inc_votes: votes}

    return api.patch(`/api/articles/${article_id}`, voteInfo).then(({ data }) => {

        console.log(data)

        return data.article;

    }).catch((error) => {

       setError(error)

    })
}


export { allArticles, getArticlesbyId, welcomePage, getComments, changeVote }
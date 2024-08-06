import axios from "axios"
import React from "react"

const api = axios.create({baseURL: "https://be-nc-news-lhaf.onrender.com"});

const allArticles = () => {

    return api.get("/api/articles").then(({ data }) => {

        // console.log(data.articles)

        return data.articles;


    })
}

const getArticlesbyId = (article_id) => {

    return api.get(`/api/articles/${article_id}`).then(({ data }) => {

        console.log(data.article)

        return data.article;
    })
}

const welcomePage = () => {

    return api.get(`/api`).then((response) => {

        console.log(response)

        return response
    })

}

const getComments = (article_id) => {

    return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {

        return data;
    })
}
// const allUsers = () => {

//     api.get("/api/users").then((response) => {

//         return response;
//     })
// }

// const allTopics = () => {

//     api.get("/api/topics").then((response) => {

//         return response;

//     })
// }



// const userByUsername = () => {

//     api.get("/api/users/${username}").then((response) => {

//         return response;
//     })
// }

export { allArticles, getArticlesbyId, welcomePage, getComments }
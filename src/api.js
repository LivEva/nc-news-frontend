import axios from "axios"
import React from "react"

const api = axios.create({baseURL: "https://be-nc-news-lhaf.onrender.com"});

const allArticles = () => {

    return api.get("/api/articles").then(({ data }) => {


        return data.articles;


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

// const getArticlesbyId = (article_id) => {

//     api.get("/api/articles/${article_id}").then((response) => {

//         return response;
//     })
// }

// const userByUsername = () => {

//     api.get("/api/users/${username}").then((response) => {

//         return response;
//     })
// }

export default allArticles;
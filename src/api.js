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

const changeVote = (article_id, votes) => {

    const voteInfo = {inc_votes: votes}

    return api.patch(`/api/articles/${article_id}`, voteInfo).then(({ data }) => {

        console.log(data)

        return data.article;

    }).catch((error) => {

        console.log(error)

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

export { allArticles, getArticlesbyId, welcomePage, getComments, changeVote }
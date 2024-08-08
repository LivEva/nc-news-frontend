import axios from "axios"
import React from "react"

const api = axios.create({baseURL: "https://be-nc-news-lhaf.onrender.com"});


const welcomePage = () => {

    return api.get(`/api`).then((response) => {

        console.log(response.data.endpoints)

        return response
    })

}

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

const getComments = (article_id) => {

    return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {

        return data;
    })
}

const changeVote = (article_id, votes, setError) => {

    const voteInfo = {inc_votes: votes}

    return api.patch(`/api/articles/${article_id}`, voteInfo).then(({ data }) => {

        return data.article;

    }).catch((error) => {

       setError(error)

    })
}

const postComment = (article_id, username, body) => {

    const newComment = { username: username, body: body }

    return api.post(`/api/articles/${article_id}/comments`,
       newComment).then((response) => {

        return response;

    }).catch((error) => {

        console.log(error)

    })
}

const deleteComment = (comment_id) => {

    return api.delete(`/api/comments/${comment_id}`).then(() => {

        return true;


    }).catch((error) => {

        console.log(error)

        return false;

    })
}


// const getTopics = () => {

//     return api.get(`/api/topics`).then((response) => {

//         return response

//     })
// }



export { allArticles, getArticlesbyId, welcomePage, getComments, changeVote, postComment, deleteComment }
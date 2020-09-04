import React, { useState, useEffect } from 'react';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match})=>{

    const name = match.params.name;
    const article = articles.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvote:0 , comments: [] })
    useEffect(()=>{
        setArticleInfo({ upvote: 3})
    },[name]);//empty for effect when load and then name changes

    if (!article) return <NotFoundPage/>;

    return (
        <>
            <h1>{article.title}</h1>
            <p>This Post is upvoted {articleInfo.upvote}</p>
            {article.content.map((para,key) => (
                <p key = {key}>{para}</p>
            ))}
        </>
        
    )
};

export default ArticlePage;

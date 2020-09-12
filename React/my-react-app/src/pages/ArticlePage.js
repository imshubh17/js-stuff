import React, { useState, useEffect } from 'react';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddComment';

const ArticlePage = ({match})=>{

    const name = match.params.name;
    const article = articles.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvote:0 , comments: [] })

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/article/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        };
        fetchData();
    }, [name]);//empty for effect when load and then name changes

    if (!article) return <NotFoundPage/>;

    return (
        <>
            <h1>{article.title}</h1>
            <p>This Post is upvoted {articleInfo.upvote}</p>
            {article.content.map((para,key) => (
                <p key = {key}>{para}</p>
            ))}
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        </>
        
    )
};

export default ArticlePage;



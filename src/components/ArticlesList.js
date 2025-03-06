import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { useState } from 'react';
const ArticlesList = ({articles}) =>{
    // const [activity, setActivity] = useState(false);
    // Cookies.set('previousActivities', [...Cookies.get('previousActivities'), activity.id], { expires: 7 });

    return(
        <>
            {articles.map(article => (
            <Link key={article.name} className='article-list-item' to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)} ...</p>
            </Link>
        ))}
        </>
    )
}
export default ArticlesList
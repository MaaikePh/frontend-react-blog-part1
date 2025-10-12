import './DetailBlogPage.css';
import posts from '/src/constants/data.json';
import clock from '/src/assets/klokje.png';
import dateFormatter from '../../helpers/dateFormatter.js';
import {Link, useParams} from 'react-router-dom';

function DetailBlogPage() {
    const {id} = useParams();
    const postId = Number(id);
    const post = posts.find(post => post.id === postId);

    return (
        <article className='blog-page'>
            <h1>{post?.title}</h1>
            <h2>{post?.subtitle}</h2>
            <p>Geschreven door {post?.author} op {dateFormatter(post?.created)}</p>
            <div className='read-time'>
                <img src={clock} alt='afbeelding klokje'/>
                <h6>{post?.readTime} minuten lezen</h6>
            </div>
            <p>{post?.content}</p>
            <p>{post?.comments} reacties - {post?.shares} keer gedeeld</p>
            <Link to='/overview' className='blog-links'>&lt; Terug naar de overzichtspagina</Link>
        </article>
    )
}

export default DetailBlogPage;
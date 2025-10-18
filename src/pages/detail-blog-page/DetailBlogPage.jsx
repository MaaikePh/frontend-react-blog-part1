import './DetailBlogPage.css';
import clock from '/src/assets/klokje.png';
import dateFormatter from '../../helpers/dateFormatter.js';
import {Link, Navigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function DetailBlogPage() {
    const [post, setPost] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);

    const {id} = useParams();
    const postId = Number(id);

    useEffect(() => {
        async function fetchBlogPosts(id) {
            const baseUrl = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts';
            const url = id ? `${baseUrl}?id=${id}` : baseUrl;

            try {
                toggleError(false);
                const response = await axios.get(url, {
                    headers: {
                        'novi-education-project-id': '07470393-2b91-4dbf-92b8-976e6532490b',
                    },
                })
                console.log(response.data[0]);
                setPost(response.data[0]);
            } catch (error) {
                console.error(error)
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }
        if (postId) fetchBlogPosts(postId);
    }, [postId]);

    if (loading) return <h1 className='blog-page'>Loading...</h1>;
    if (error) return <h1 className='blog-page'>Niet gevonden...</h1>;
    if (!post) {
        return <Navigate to='/not-found' replace />
    }

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
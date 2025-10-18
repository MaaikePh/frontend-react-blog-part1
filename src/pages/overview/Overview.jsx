import './Overview.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Overview() {
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchBlogPosts() {
            const baseUrl = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts';
            toggleLoading(true);

            try {
                toggleError(false);
                const response = await axios.get(baseUrl, {
                    headers: {
                        'novi-education-project-id': '07470393-2b91-4dbf-92b8-976e6532490b',
                    },
                })
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.error(error)
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }
        fetchBlogPosts();
    }, []);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Geen blogposts gevonden.</h1>;

    return (
        <div className="overview">
            <h1 className='overview-title'>Bekijk alle {posts.length} posts op het platform</h1>
            <section>
                {posts.length === 0 && !loading && !error && (
                    <h1> Er zijn nog geen blogposts.</h1>
                )}
                {posts.map((post) => (
                    <article className='blog-post' key={post.id}>
                        <div className='title-and-author'>
                            <h2><Link to={`/posts/${post.id}`} className='blog-links'>{post.title}</Link></h2>
                            <p>({post.author})</p>
                        </div>
                        <div>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default Overview;
import './Overview.css';
import posts from '/src/constants/data.json';
import {Link} from 'react-router-dom';

function Overview() {

    return (
        <div className="overview">
            <h1 className='overview-title'>Bekijk alle {posts.length} posts op het platform</h1>
            <section>
                {posts.map((post, index) => (
                    <article className='blog-post' key={index}>
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
import './Overview.css';
import posts from '/src/constants/data.json';

function Overview() {
    return (
        <div className="overview">
            <h1 className='overview-title'>Bekijk alle {posts.length} posts op het platform</h1>
            <section>
                {posts.map((post, index) => (
                    <article className='blog-post' key={index}>
                        <div className='title-and-author'>
                            <h2 className='blog-title'>{post.title}</h2>
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
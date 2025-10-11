import './DetailBlogPage.css';
import {useParams} from 'react-router-dom';

function DetailBlogPage() {
    const { id } = useParams();

    return (
        <h1>{id}</h1>
    )
}

export default DetailBlogPage;
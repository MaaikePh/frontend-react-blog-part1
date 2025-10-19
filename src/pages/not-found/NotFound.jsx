import './NotFound.css';
import {useNavigate} from 'react-router-dom';

function NotFound () {
    const navigate = useNavigate();

    function returnToHome () {
        return navigate('/');
    }

    return (
        <>
        <h1>404... Deze pagina bestaat niet</h1>
            <button type='button' onClick={returnToHome} className='home-button'>Terug naar home</button>
        </>
    )
}

export default NotFound;
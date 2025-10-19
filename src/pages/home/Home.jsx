import './Home.css';
import billboard from '/src/assets/Billboard.png';

function Home() {
    return (
        <header className='home-container'>
            <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            <img className='home-image' src={billboard} alt="Afbeelding van een schreeuwerig billboard"/>
            <div className='bottom-container'>
                <p>* En in billboards. Die zijn niet te missen natuurlijk.</p>
            </div>
        </header>
    )
}

export default Home;
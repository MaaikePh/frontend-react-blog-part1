import './App.css'
import logo from './assets/logo-medium.png'
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Overview from './pages/overview/Overview.jsx';
import NewPost from "./pages/new-post/NewPost.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import DetailBlogPage from "./pages/detail-blog-page/DetailBlogPage.jsx";

function App() {
    return (
        <>
            <div className='page-container'>
                <img src={logo} alt='Company logo'/>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to='/overview'>
                                Alle posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to='/new-post'>
                                Nieuwe post
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/overview' element={<Overview/>}/>
                <Route path='/new-post' element={<NewPost/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route path='/posts/:id' element={<DetailBlogPage />}/>
            </Routes>
        </>
    )
}

export default App

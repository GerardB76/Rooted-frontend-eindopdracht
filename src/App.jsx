import './App.css';
import {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import HomePage from './pages/home/HomePage.jsx';
import BlogPage from './pages/blog/BlogPage.jsx';
import BlogArticlePage from './pages/blog/BlogArticlePage.jsx';
import ShopPage from './pages/shop/ShopPage.jsx';
import BookDetailPage from './pages/shop/BookDetailPage.jsx';
import AccountPage from './pages/account/AccountPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
            return;
        }

        const section = document.getElementById(location.hash.slice(1));
        if (section) {
            section.focus({preventScroll: true});
            section.scrollIntoView();
        }
    }, [location]);

    return (
        <div className="site-layout">
            <Header />
            <main id="main-content" className="site-main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:articleId" element={<BlogArticlePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/shop/:bookId" element={<BookDetailPage />} />
                    <Route path="/inloggen" element={<AccountPage />} />
                    <Route path="/registreren" element={<AccountPage register />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;

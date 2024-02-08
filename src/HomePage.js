import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Mehmet Oguzhan Tor</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#cv">CV</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
            </header>
            <main className="home-main">
                <section className="introduction-section">
                    <h2>Hi there!</h2>
                    <img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="Mehmet Oguzhan Tor" />
                    <p>Hello, I'm Mehmet Oguzhan Tor. Welcome to my website!</p>
                </section>
            </main>
            <footer className="home-footer">
                <p>Contact me at <a href="mailto:mehmetoguzhantor@gmail.com">mehmetoguzhantor@gmail.com</a></p>
            </footer>
        </div>
    );
}

export default HomePage;

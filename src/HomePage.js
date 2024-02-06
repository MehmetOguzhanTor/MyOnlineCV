import React from 'react';
import './HomePage.css'; // This will import the styles you define in HomePage.css

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
                <div className="chat-bubble">Hi there!</div>
                <img src="C:\Users\oguzh\OneDrive\Masaüstü\MyOnlineCV\my-cv-website\public\photo.jpg" alt="Mehmet Oguzhan Tor" />
                <p>Hello, I'm Mehmet Oguzhan Tor. Welcome to my website!</p>
                {/* Add more content and elements as needed */}
            </main>
            <footer className="home-footer">
                <p>Contact me at [mehmetoguzhantor@gmail.com]</p>
            </footer>
        </div>
    );
}

export default HomePage;

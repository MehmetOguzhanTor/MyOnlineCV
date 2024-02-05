import React from 'react';
import './HomePage.css'; // Make sure to create this CSS file for styling

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
                <p>Hello, I'm Mehmet Oguzhan Tor. Welcome to my website!</p>
                <img src="path_to_your_photo.jpg" alt="Your Name" />
                <p>A brief introduction or professional summary goes here.</p>
            </main>
            <footer className="home-footer">
                <p>Contact me at [Your Email]</p>
            </footer>
        </div>
    );
}

export default HomePage;

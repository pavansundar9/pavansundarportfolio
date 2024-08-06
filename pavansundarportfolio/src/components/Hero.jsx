import './Hero.css';
import heroImage from '../images/hero0.png';
import gitlogo from '../images/github.png';
import instalogo from '../images/insta_logo.png';

function Hero() {
    return (
        <div className='HeroSection'>
            <div className='social-media-other'>
                <div className='line'></div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img className='social-icon' src={gitlogo} alt="Github logo" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img className='social-icon' src={instalogo} alt="Instagram logo" />
                </a>
            </div>
            <div className='hero-text'>
                <p>Hello World👋,</p>
                <div className='hero-name'>
                    <p>I'm </p>&nbsp;&nbsp;
                    <h1>Pavan Sundar</h1>
                </div>
                <p className='role-description'> Full Stack Developer</p>
                <button className='cta'>Contact Me</button>
            </div>
            <div className='hero-img'>
                <img src={heroImage} alt="Hero section background"/>
            </div>
            <div className='social-media'>
                <div className='line'></div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img className='social-icon' src={gitlogo} alt="Github logo" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img className='social-icon' src={instalogo} alt="Instagram logo" />
                </a>
            </div>
        </div>
    );
}

export default Hero;

import './AboutMe.css';
import aboutMe from '../images/about_me_0.png';
function AboutMe(){
    return (
        <div className="aboutme">
            <h1>About Me</h1>
            <div className='about-info'>
                <div className='about-image'>
                    <img src={aboutMe} alt='About me' />
                </div>
                <div className='about-text'>
                    <p>
                        Hey there! I'm <i><b>Pavan Sundar</b></i>, a <u>Full Stack Developer</u> who loves turning ideas into digital reality. Whether it's crafting smooth user interfaces with HTML, CSS, and JavaScript or building dynamic applications with React, PHP, and MySQL,  I'm passionate about creating solutions that not only work well but also delight users.
                        <br /><br />
                        When I'm not coding, you may find me exploring the latest technological trends, immersing myself in a new programming challenge or dreaming about my next big project. Currently, I'm wrapping up my B.Tech in Computer Science and Engineering at Vellore Institute of Technology, set to graduate in July 2024.
                        <br /><br />
                        I'm all about leveraging technology to innovate and make a positive impact, one line of code at a time. Let's create something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
import React from 'react';
import Typed from 'react-typed';
import './about.scss';

const About = () => {
   
    return(
        <div className="container__about">
            <div className="aboutme__container">
                <div className="components_about">
                    <div className="contain__aboutme">
                        <h1 className="title__about">About me</h1>
                        <h1 className="name_title">Veronica Juarez</h1>
                        <p className="aboutme">I'm a web designer / developer based in Cádiz, Spain. I have a passion for web design.
                                               I design what you want and develop what you need.</p>
                                <div className='contain_img'>
                                    <div className="contain__bubble">
                                       <Typed strings={["< p > Structuring the Web < / p ><br/>.Style{width:100px;} <br/> Dynamic client-side scripting"]}typeSpeed={60} className='estilo'/>
                                  
                                    </div>
                       
                        
                                    <div className="contain__image__movile">
                                        <img src="./silla.png" alt="" className="image__chair2"/>
                                    </div>
                    
                             </div>
                        
                        <div className="experience__container">
                             
                            
                            <div className="cont1">
                                <p className="title1__il">UX/UI and Ilustration</p>
                                <p className="tl1">Adobe photoshop</p>
                                <p className="tl1">Adobe Ilustrator</p>
                                <p className="tl1">Corel Draw</p>
                                <p className="tl1">Inkscape</p>
                                <p className="tl1">Invision Studio</p>
                            </div>
                            <div className="cont2">
                                <p className="title2__dev">Developer</p>
                                <p className="tl2">HTML</p>
                                <p className="tl2">CSS</p>
                                <p className="tl2">Sass</p>
                                <p className="tl2">Javascipt</p>
                                <p className="tl2">Node</p>
                                <p className="tl2">Webpack</p>
                                <p className="tl2">React</p>
                                <p className="tl2">Typescript</p>
                                <p className="tl2">Git</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="contain__image">
                        <img src="./silla.png" alt="" className="image__chair"/>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default About;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'


import './projects.scss';

const Projects = () => {
    return (
        <div className='container__projects'>
            
            <div className="projects__nothcamp">
                <div className="title1"><h1 className='myproject__title'>My Projects</h1></div>
                <p className="subtitle1">Master Frontend Developer "NorthCampSchool"</p>
                <ul>
                    <li><p>Exercise performed of a web where we can realize the search for a movie from a list
                    given to us and we have and we have the option to introduce it in a watchlist. This exercise
                            has been made with React.</p>

                        <a href="https://github.com/veronicajn/movie-react-app" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Exercise of a web of Rick and Morty series characters search website.
                            This exercise has been made with Vanilla js.</p>
                        <a href="https://github.com/veronicajn/rick-morty" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Exercise of a filter of pokemon that gives us back a pokemon, only have 11 first pokemon.
                            This exercise has been made with Vanilla js.</p>
                        <a href="https://github.com/veronicajn/filter-pokemon3" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Exercise of a filter of pokemon that gives us back a pokemon, only have 11 first pokemon.
                            Is the version before pokemon filter. This exercise has been made with Vanilla js.</p>
                        <a href="https://github.com/veronicajn/filter-pokemon2" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Exercise of a filter of pokemon that gives a pokemon image.
                            This exercise has been made with Vanilla js.</p>
                        <a href="https://github.com/veronicajn/filter-pokemon1" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Exercise a basic form. This exercise has been made with Vanilla js.</p>
                        <a href="https://github.com/veronicajn/form" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Exercise of the panel weather layout. This exercise has been made with Css.</p>
                        <a href="https://github.com/veronicajn/weather" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Exercise of the sidebar layout. This exercise has been made with Sass</p>
                        <a href="https://github.com/veronicajn/sidebar-exercise" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="projects__daw">
                <p className="subtitle1">Senior Technician in Web Application Development</p>
                <ul>
                    <li><p>Layout exercise of a clothing store web. This exercise has been made with Vanilla js, Bootstrap and Sass.</p>
                    <a href="https://github.com/veronicajn/clothing-store" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Layout exercise of a restaurant website who show the menu. This exercise has been made with Vanilla js and Sass.</p>
                    <a href="https://github.com/veronicajn/restaurant-menu" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Basic notepad exercise. This exercise has been made with Java.</p>
                    <a href="https://github.com/veronicajn/memo-pad" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Calculator exercise. This exercise has been made with Java.</p>
                    <a href="https://github.com/veronicajn/calculator" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                    <li className="margin__top"><p>Upload an image exercise. This exercise has been made with Vanilla js.</p>
                    <a href="https://github.com/veronicajn/up-image" role="button" className="link">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="icono flip animated" />
                            <span className="click">View Project</span>
                            <FontAwesomeIcon icon={faAngleRight} size="2x" className="icono" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Projects;
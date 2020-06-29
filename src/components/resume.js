import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Volunteer from './volunteer';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <h2
                            style={{
                                paddingTop: '1.2em',
                                color: '#339999',
                                fontFamily: 'Bungee Hairline',
                            }}
                        >
                            Rixio Barrios
                        </h2>
                        <h4
                            style={{
                                color: '#919292',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            <hr></hr>
                            Software Engineer
                        </h4>
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                        <p>
                            Diplomat turned Software Engineer, driven by the
                            desire to change everything. My creative and
                            inquisitive nature is constantly evolving.
                            Passionate about making interactive products shaped
                            around human experience, diversity, and intuitive,
                            efficient functionality.
                        </p>
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                        <h4
                            style={{
                                color: '#919292',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            Projects
                        </h4>
                        <a
                            href="https://rixiobarrios.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Previous Portfolio</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <a
                            href="https://rock-paper-scissors-88fbb0.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Rock Paper Scissors</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <br></br>
                        <a
                            href="http://cocktail-recipe-app.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Elixir: Cocktail Recipe</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="react-router"
                            src="../images/react-router.png"
                            alt="react-router"
                        />
                        <a
                            href="http://consoledotlove.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Console.love</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="lodash"
                            src="../images/lodash.png"
                            alt="lodash"
                        />
                        <img
                            className="jest"
                            src="../images/jest.png"
                            alt="jest"
                        />
                        <img
                            className="enzyme"
                            src="../images/enzyme.png"
                            alt="enzyme"
                        />
                        <img
                            className="react-testing-library"
                            src="../images/react-testing-library.png"
                            alt="react-testing-library"
                        />
                        <img
                            className="mongodb"
                            src="../images/mongodb.png"
                            alt="mongodb"
                        />
                        <img
                            className="mongoose"
                            src="../images/mongoose.png"
                            alt="mongoose"
                        />
                        <a
                            href="https://forfoodsake.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>For Food Sake</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="react-hooks"
                            src="../images/react-hooks.png"
                            alt="react-hooks"
                        />
                        <img
                            className="react-router"
                            src="../images/react-router.png"
                            alt="react-router"
                        />
                        <img
                            className="material-ui"
                            src="../images/material-ui.png"
                            alt="material-ui"
                        />
                        <img
                            className="jest"
                            src="../images/jest.png"
                            alt="jest"
                        />
                        <img
                            className="react-testing-library"
                            src="../images/react-testing-library.png"
                            alt="react-testing-library"
                        />
                        <img
                            className="nodejs"
                            src="../images/nodejs.png"
                            alt="nodejs"
                        />
                        <img
                            className="nodemon"
                            src="../images/nodemon.png"
                            alt="nodemon"
                        />
                        <img
                            className="becrypt"
                            src="../images/becrypt.png"
                            alt="becrypt"
                        />
                        <img
                            className="chai"
                            src="../images/chai.png"
                            alt="chai"
                        />
                        <img
                            className="cors"
                            src="../images/cors.png"
                            alt="cors"
                        />
                        <img
                            className="express"
                            src="../images/express.png"
                            alt="express"
                        />
                        <img
                            className="mocha"
                            src="../images/mocha.png"
                            alt="mocha"
                        />
                        <img
                            className="sequelize"
                            src="../images/sequelize.png"
                            alt="sequelize"
                        />
                        <a
                            href="https://www.ronaldbarrios.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Latin Percussionist</h6>
                        </a>
                        <img
                            className="angular"
                            src="../images/angular.png"
                            alt="angular"
                        />
                        <img
                            className="typescrypt"
                            src="../images/typescrypt.png"
                            alt="typescrypt"
                        />
                        <img
                            className="jquery"
                            src="../images/jquery.png"
                            alt="jquery"
                        />
                        <img
                            className="bootstrap"
                            src="../images/bootstrap.png"
                            alt="bootstrap"
                        />
                        <img
                            className="rxjs"
                            src="../images/rxjs.png"
                            alt="rxjs"
                        />
                        <img
                            className="jasmine"
                            src="../images/jasmine.png"
                            alt="jasmine"
                        />
                        <img
                            className="karma"
                            src="../images/karma.png"
                            alt="karma"
                        />
                        <img
                            className="protractor"
                            src="../images/protractor.png"
                            alt="protractor"
                        />
                        <a
                            href="https://age-calculator-4d21eb.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <hr
                                style={{
                                    borderTop: '3px solid #339999',
                                }}
                            />
                            <h4
                                style={{
                                    color: '#919292',
                                    textTransform: 'uppercase',
                                    fontFamily: 'Montserrat',
                                }}
                            >
                                Mini Projects
                            </h4>
                            <h6>Age Calculator</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                        <h4
                            style={{
                                color: '#919292',
                                textTransform: 'uppercase',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            Collaborations
                        </h4>
                        <a
                            href="https://www.orinocotribune.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Orinoco Tribune</h6>
                        </a>
                        <img
                            className="wordpress"
                            src="../images/wordpress.png"
                            alt="wordpress"
                        />
                        <a
                            href="https://richcapitalconcepts.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>Rich Capital Concepts</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <img
                            className="material-ui"
                            src="../images/material-ui.png"
                            alt="material-ui"
                        />
                        <a
                            href="https://fightpandemics.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h6>FightPandemics</h6>
                        </a>
                        <img
                            className="html"
                            src="../images/html.png"
                            alt="html"
                        />
                        <img
                            className="css"
                            src="../images/css.png"
                            alt="css"
                        />
                        <img
                            className="javascript"
                            src="../images/javascript.png"
                            alt="javascript"
                        />
                        <img
                            className="react"
                            src="../images/react.png"
                            alt="react"
                        />
                        <br></br>
                        <hr
                            style={{
                                borderTop: '3px solid #339999',
                            }}
                        />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Experience</h2>

                        <Experience
                            startYear={2020}
                            endYear="Present"
                            jobCompany="Boxless Media"
                            jobName="Software Engineer Intern"
                            jobDescription="Assisting in the creation of websites and web applications for marketing clients using various frameworks. "
                        />

                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobCompany="General Assembly"
                            jobName="Web Development Engineer Fellow"
                            jobDescription="Acquired competitive abilities in full stack web development. Created applications using the latest technologies in software engineering and development. "
                        />

                        <Experience
                            startYear={2008}
                            endYear={2019}
                            jobCompany="Consulate of Venezuela"
                            jobName="Deputy Consul"
                            jobDescription="Supervised consular services, special cases, immigration cases, incarcerations, deportations, difficult cases, complaints and grievances, public speaking, presentations, public events and communications. Deployed mobile consular services through our jurisdictions of 7 US states. Met with elected officials including a few city mayors and governors. Started two sister city programs and provided assistance with commercial and cultural trade."
                        />
                        <hr style={{ borderTop: '3px solid #339999' }} />
                        <h2>Education</h2>

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="General Assembly"
                            schoolCourse="Software Engineer Immersive"
                            schoolDescription="Three-months of learning and using numerous techniques and technologies for optimal Web-development 400+hour full-time of a full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies. Built several real-life projects individually and a few under paired programming."
                        />
                        <hr style={{ borderTop: '3px solid #339999' }} />
                        <h2>Volunteer Experience</h2>

                        <Volunteer
                            startYear={2020}
                            endYear="Present"
                            jobCompany="FightPandemics"
                            jobName="Software Engineer"
                            jobDescription="FightPandemics is an altruistic platform created in the wake of COVID-19 that connects people and organizations in need of help with those that can provide it. In fostering these vital connections, we empower communities to respond more quickly and effectively to the crisis. Our vision is to create a world where humans are more resilient to emergencies. We are a global group of volunteers that came together to make a difference and are actively looking for other highly-dedicated individuals to join us."
                        />

                        <Volunteer
                            startYear={2020}
                            endYear="Present"
                            jobCompany="Rich Capital Concepts"
                            jobName="Software Engineer"
                            jobDescription="Responsible for the coding, design and layout of the organization's website. Partially in charge of other areas like IT support, digital marketing and social media administration."
                        />
                        <hr style={{ borderTop: '3px solid #339999' }} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;

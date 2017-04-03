import React from 'react';
import Header from '../components/header';

const title = 'me.';

const About = React.createClass({
    render: function() {
        return (
            <div className="about">
                <Header
                    pageTitle={title}
                    links={this.props.links}
                />
                <main className="me">
                    <img src="assets/images/me.jpg" />
                    <div className="blurb">
                        <h1>Hi, I'm Michelle!</h1>
				        <p>I was born and raised in Los Angeles. I went to UCLA where I studied Biology; it wasn’t until the later part of my studies where I became interested in programming. After graduating from UCLA in 2013, I began working at <a href="http://www.edlio.com" target="_blank">Edlio</a> where my passion for technology intensified and I worked my way up to the development team as a Web Developer.</p>
				        <p>When I’m not at work, I like traveling to new places, watching sports (go bruins!), and chilling at the park with friends. I also enjoy working on side projects to help me grow and learn new things.</p>
			        </div>
                    <div className="skills">
                        <h1>These are some things I'm good at...</h1>
                        <nav>
                            <div className="skill">
                                HTML5
                            </div>
                            <div className="skill">
                                CSS3
                            </div>
                            <div className="skill">
                                JS
                            </div>
                            <div className="skill">
                                AngularJS
                            </div>
                            <div className="skill">
                                git
                            </div>
                        </nav>
                    </div>
                </main>
            </div>
        )
    }
});

export default About;
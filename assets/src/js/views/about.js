import React from 'react';
import Header from '../components/header';

const title = 'me.';
const skills = ['Javascript', 'AngularJS', 'React', 'Redux', 'SASS', 'CSS3', 'HTML5', 'git'];

const About = React.createClass({
    getSkills: function() {
        return skills.map(item => {
            return (
                <div className="skill">
                    {item}
                </div>
            )
        })
    },
    render: function() {
        const skillList = this.getSkills();
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
				        <p>I was born and raised in Los Angeles. After graduating from UCLA, I immediately began working at <a href="http://www.edlio.com" target="_blank">Edlio</a> where my passion and curiosity for technology grew and I worked my way up to my current role as Front End Developer. I am a self motivated individual who enjoys working on side projects to learn new things.</p>
				        <p>When I’m not coding, I indulge in traveling to new places, watching sports (go bruins!), and chilling at the park with friends.</p>
			        </div>
                    <div className="skills">
                        <h1>These are some things I'm good at:</h1>
                        <nav>
                            {skillList}
                        </nav>
                    </div>
                </main>
            </div>
        )
    }
});

export default About;
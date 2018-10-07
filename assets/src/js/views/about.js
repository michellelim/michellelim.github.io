import React from 'react';
import Header from '../components/header';

const title = 'me.';
const skills = ['Javascript', 'React', 'Redux', 'AngularJS', 'GraphQL', 'Apollo', 'SASS', 'CSS3', 'HTML5', 'git'];

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
				        <p>I was born and raised in Los Angeles. After graduating from UCLA, I immediately began working at <a href="http://www.edlio.com" target="_blank">Edlio</a> where my passion and curiosity for technology grew. I'm currently working at <a href="https://www.joinhoney.com" target="_blank">Honey</a> in Downtown Los Angeles, helping millions of people save money while shopping online. I am a self motivated individual who enjoys working on side projects to learn new things.</p>
				        <p>When I’m not coding, I indulge in traveling to new places, watching sports (go bruins!), and chilling at the park with friends. Let's grab coffee!</p>
			        </div>
                    <div className="skills">
                        <h1>These are some technologies I've used:</h1>
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
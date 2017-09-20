import React from 'react';
import Header from '../components/header';
import Project from '../components/project';

const title = 'projects.';

const projects = [
  {
    name: 'Prop Quiz',
    description: 'Quiz creation web app for friendly competition during live events',
    imageUrl: 'assets/images/propquiz-thumb.jpg',
    url: 'https://www.prop-quiz.com',
    tech: ['React', 'Material UI']
  },
  {
    name: 'memolets',
    description: 'Social media progressive web app for sharing tips from experiences',
    imageUrl: 'assets/images/memolets.jpg',
    url: 'javascript:;',
    tech: ['React', 'Redux', 'Material UI']
  },
  {
    name: 'Aquinas High School',
    description: 'Website built from PSD',
    imageUrl: 'assets/images/aquinas.jpg',
    url: 'http://www.aquinashs.net/',
    tech: ['HTML', 'CSS']
  },
  {
    name: 'Saint James School',
    description: 'Website built from PSD',
    imageUrl: 'assets/images/saintjames.jpg',
    url: 'http://www.sjsbr.org/',
    tech: ['HTML', 'CSS']
  }
]

const Work = React.createClass({
  buildPortfolio: function() {
    return projects.map(project => {
      return (
        <Project
          url={project.url}
          imageUrl={project.imageUrl}
          name={project.name}
          description={project.description}
          tech={project.tech.join(', ')}
        />
      )
    })
  },
  render: function() {
    const portfolio = this.buildPortfolio();
    return (
      <div className="work">
        <Header
          pageTitle={title}
          links={this.props.links}
        />
        <main>
          {portfolio}
        </main>

      </div>
    )
  }
});

export default Work;
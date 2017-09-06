import React from 'react';
import Header from '../components/header';

const title = 'projects.';

const projects = [
  {
    name: 'Prop Quiz',
    description: 'Quiz Creation Web App for friendly competition during live events',
    imageUrl: 'assets/images/propquiz-thumb.jpg',
    url: '/assets/images/propquiz.jpg',
    tech: ['React', 'Material UI']
  },
  // {
  //   name: 'tmsecret',
  //   description: 'Progressive Web App',
  //   imageUrl: '',
  //   url: '/',
  //   tech: ['React', 'Redux', 'Material UI']
  // },
  {
    name: 'Aquinas High School',
    description: 'Built website from PSD',
    imageUrl: 'assets/images/aquinas.jpg',
    url: 'http://www.aquinashs.net/',
    tech: ['HTML', 'CSS']
  },
  {
    name: 'Saint James School',
    description: 'Built website from PSD',
    imageUrl: 'assets/images/saintjames.jpg',
    url: 'http://www.sjsbr.org/',
    tech: ['HTML', 'CSS']
  }
]

const Work = React.createClass({
  buildPortfolio: function() {
    return projects.map(project => {
      return (
        <figure className="project">
          <a href={project.url} target="_blank">
            <img src={project.imageUrl} />
            <figcaption>
              <h1 className="title">{project.name}</h1>
              <p className="desc">{project.description}</p>
              <aside className="tech">
                <svg viewBox="10 0 100 100">
                  <g><g><g><polygon points="31.7,70 13.5,50.5 31.7,31.1 39,37.9 27.2,50.5 39,63.1    "/></g><g><polygon points="68.3,70 61,63.1 72.8,50.5 61,37.9 68.3,31.1 86.5,50.5    "/></g></g><g><rect x="20.1" y="45" transform="matrix(-0.2004 0.9797 -0.9797 -0.2004 108.994 11.0433)" width="59.9" height="10"/></g></g>
                </svg>
                {project.tech.join(', ')}
              </aside>
            </figcaption>
          </a>
        </figure>
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
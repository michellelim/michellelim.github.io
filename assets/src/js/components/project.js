import React from 'react';

const Project = React.createClass({
  render: function() {
    return (
      <figure className="project">
        <a href={this.props.url} target="_blank">
          <img src={this.props.imageUrl} />
          <figcaption>
            <h1 className="title">{this.props.name}</h1>
            <p className="desc">{this.props.description}</p>
            <aside className="tech">
              <svg viewBox="10 0 100 100">
                <g><g><g><polygon points="31.7,70 13.5,50.5 31.7,31.1 39,37.9 27.2,50.5 39,63.1    "/></g><g><polygon points="68.3,70 61,63.1 72.8,50.5 61,37.9 68.3,31.1 86.5,50.5    "/></g></g><g><rect x="20.1" y="45" transform="matrix(-0.2004 0.9797 -0.9797 -0.2004 108.994 11.0433)" width="59.9" height="10"/></g></g>
              </svg>
              {this.props.tech}
            </aside>
          </figcaption>
        </a>
      </figure>
    )
  }
});

export default Project;
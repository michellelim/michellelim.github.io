import React from 'react';
import Header from '../components/header';

const title = '';

const Home = React.createClass({
    render: function() {
        return (
            <div className='home'>
                <Header
                    pageTitle={title}
                    links={this.props.links}
                />
                <main>
                    <h1>Michelle Lim</h1>
                    <aside>Web Developer</aside>
                </main>
            </div>
        )
    }
});

export default Home;
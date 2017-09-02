import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import Work from './views/work';
import Photography from './views/photography';
import Contact from './views/contact';

require('../sass/main.scss');

const links = [
    {
        name: 'home',
        title: '',
        src: '/'
    },
    {
        name: 'about',
        title: 'me.',
        src: '/about'
    },
    {
        name: 'work',
        title: 'projects.',
        src: '/work'
    },
    {
        name: 'photography',
        title: 'snapshots.',
        src: '/photography'
    },
    {
        name: 'contact',
        title: 'contact.',
        src: '/contact'
    }
];

const HomeComp = (props) => {
    return  (
        <Home links={links} />
    )
};

const WorkComp = (props) => {
    return  (
        <Work links={links} />
    )
};

const AboutComp = (props) => {
    return  (
        <About links={links} />
    )
};

const PhotographyComp = (props) => {
    return  (
        <Photography links={links} />
    )
};

const ContactComp = (props) => {
    return  (
        <Contact links={links} />
    )
};

render((
    <HashRouter>
        <div>
            <Route exact path='/' render={HomeComp} />
            <Route path='/about' render={AboutComp} />
            <Route path='/work' render={WorkComp} />
            <Route path='/photography' render={PhotographyComp} />
            <Route path='/contact' render={ContactComp} />
        </div>
    </HashRouter>
), document.getElementById('content'));


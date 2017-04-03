import React from 'react';
import Header from '../components/header';

const title = 'snapshots.';

const Photography = React.createClass({
    render: function() {
        return (
            <div className="photography">
                <Header
                    pageTitle={title}
                    links={this.props.links}
                />
                <main>
                    <figure>
                        <img src="../assets/images/lund-leaves.jpg" />
                        <figcaption>
                            <h1 className="location">Lund</h1>
                            <div className="date">October 2011</div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="../assets/images/prague-street.jpg" />
                        <figcaption>
                            <h1 className="location">Prague</h1>
                            <div className="date">December 2011</div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="../assets/images/amsterdam.jpg" />
                        <figcaption>
                            <h1 className="location">Amsterdam</h1>
                            <div className="date">December 2011</div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="../assets/images/zaanse-schans.jpg" />
                        <figcaption>
                            <h1 className="location">Zaanse Schans</h1>
                            <div className="date">December 2011</div>
                        </figcaption>
                    </figure>
                </main>
            </div>
        )
    }
});

export default Photography;
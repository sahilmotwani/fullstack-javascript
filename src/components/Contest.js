import React from 'react';

class Contest extends React.Component {

    render() {
        return (
            <div className="Contest">
                <div className="contest-name">
                    {this.props.description}
                </div>
                <div className="home-link link"
                onClick={this.props.contestListClick}>
                    Contest List
                </div>

            </div>
        );
    }
}

Contest.propTypes = {
    id: React.PropTypes.number.isRequired,
    contestListClick : React.PropTypes.func.isRequired
};

export default Contest;
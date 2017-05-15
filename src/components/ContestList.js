import React from 'react';
import ContestPreview from './ContestPreview';

class ContestList extends React.Component { 
    state = {
        contests: this.props.contests
    };
    render() {
        if(!this.state.contests){
            this.state.contests = window.initialData
        }
        return (
            <div>
                {this.state.contests.map(contest =>
                    <ContestPreview key={contest.id} {...contest} />
                )}
            </div>
        );
        

    }
}

ContestList.propTypes = {
    contests: React.PropTypes.array
};

export default ContestList;
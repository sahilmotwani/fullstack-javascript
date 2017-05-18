import React from 'react';
import ContestPreview from './ContestPreview';

class ContestList extends React.Component {
    state = {
        contests: this.props.contests,
        onContestClick: this.props.onContestClick
    };
    render() {
        if (!this.state.contests) {
            this.state.contests = window.initialData
        }
        return (
            <div className="ContestList" >
                {Object.keys(this.state.contests).map(contestId =>{
                    return <ContestPreview key={contestId} {...this.state.contests[contestId]} onClick={this.state.onContestClick} />
                    }
                )}
            </div>
        );
    }
}

ContestList.propTypes = {
    contests: React.PropTypes.object,
    onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;
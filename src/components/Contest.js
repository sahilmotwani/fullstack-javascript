import React from 'react';

class Contest extends React.Component {

    componentDidMount() {
        this.props.fetchNames(this.props.nameIds);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.refs.newNameInput.value) {
            return;
        }
        this.props.addName(this.refs.newNameInput.value, this.props._id);
        this.refs.newNameInput.value = '';
    }

    render() {
        return (
            <div className="Contest">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Contest Description</h3>
                    </div>
                    <div className="panel-body">
                        <div className="contest-description">
                            {this.props.description}
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Proposed Names</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.props.nameIds.map(nameId => {
                                return <li key={nameId} className="list-group-item">
                                    {this.props.lookupName(nameId).name}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Propose a New Name</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <input type="text"
                                    placeholder="New Name Here..."
                                    ref="newNameInput"
                                    className="form-control" />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-info">
                                        Sumbit
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
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
    _id: React.PropTypes.number.isRequired,
    contestListClick: React.PropTypes.func.isRequired,
    fetchNames: React.PropTypes.func.isRequired,
    nameIds: React.PropTypes.array.isRequired,
    lookupName: React.PropTypes.func.isRequired,
    addName: React.PropTypes.func.isRequired
};

export default Contest;
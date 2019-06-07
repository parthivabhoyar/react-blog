import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

interface IRecipeProps {
    fetchUser: any;
    user: any;
    userId: number;
    dataIndex: number;
}

class UserData extends React.Component<IRecipeProps> {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        let nodes = [<div key={`emptyuser${this.props.dataIndex}`}>...</div>];
        if (this.props.user.length > 0) {
            const data = this.props.user.filter((d: any) => d.userId === this.props.userId);
            if (data.length > 0) {
                nodes = [<div key={`user${this.props.dataIndex}`}>{data[0].username}</div>];
            }
        }
        return nodes;
    }
}

const mapStateToProps = (state: any) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { fetchUser })(UserData);
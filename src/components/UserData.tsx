import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

interface IRecipeProps {
    fetchUser?: any;
    user?: any;
    userId: number;
    dataIndex: number;
}

class UserData extends React.Component<IRecipeProps> {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { dataIndex, user } = this.props;

        let nodes = [<div key={`emptyuser${dataIndex}`}>...</div>];
        if (user) {
            nodes = [<div key={`user${dataIndex}`}>{user.username}</div>];
        }
        return nodes;
    }
}

const mapStateToProps = (state: any, myProps: IRecipeProps) => {
    return { user: state.user.find((d: any) => d.userId === myProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserData);